/*
Ax+By+C=0 으로 표현할 수 있는 n개의 직선이 주어질 때,
이 직선의 교점 중 정수 좌표에 별을 그리려 합니다.
모든 별을 포함하는 최소한의 크기만 나타내면 됩니다.

<제한사항>
1. line의 세로(행) 길이는 2 이상 1,000 이하인 자연수입니다.
- line의 가로(열) 길이는 3 입니다.
- line의 각 원소는 [A, B, C] 형태입니다.
- A, B, C는 -100,000 이상 100,000 이하인 정수입니다.
- 무수히 많은 교점이 생기는 직선 쌍은 주어지지 않습니다.
- A=0 이면서 B=0인 경우는 주어지지 않습니다.
2. 정답은 1,000 * 1,000 크기 이내에서 표현됩니다.
3. 별이 한 개 이상 그려지는 입력만 주어집니다.

line [[2,-1,4],[-2,-1,4],[0,-1,1],[5,-8,-12],[5,8,12]]
result =>[
"....*....",
".........",
".........",
"*.......*",
".........",
".........",
".........",
".........",
"*.......*"
]

<참고사항>
Ax+By+E=0
Cx+Dy+F=0
두 직선의 교점이 유일하게 존재할 경우 그 교점은 다음과 같습니다.
x=(BF-ED)/(AD-BC)
y=(EC-AF)/(AD-BC)
*/

function solution(line) {
    const crossPoints = [];
    let minX = Number.MAX_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;
    let maxX = -Number.MAX_SAFE_INTEGER;
    let maxY = -Number.MAX_SAFE_INTEGER;

    //정수 교차점, 최소/최댓값
    for (let i = 0; i < line.length - 1; i++) {
        for (let j = i + 1; j < line.length; j++) {
            const [a, b, e] = line[i];
            const [c, d, f] = line[j];

            const slope = a * d - b * c;
            if (!slope) continue; // 분모가 0인 경우 -> 서로 평행하거나 일치

            const x = (b * f - e * d) / slope;
            const y = (e * c - a * f) / slope;
            if(!Number.isInteger(x) || !Number.isInteger(y)) continue;
            

            crossPoints.push([x, y]); // 교차점 추가
            minX = Math.min(minX, x); // 좌표 최대/최솟값 갱신
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
        }
    }
    
    // . 로 이루어진 배열의 좌표값 수정
    const paper=Array.from(Array(maxY-minY+1), ()=>Array(maxX-minX+1).fill("."))

    crossPoints.forEach(([x, y]) => {
        paper[maxY - y][x - minX] = '*';
    });

    return paper.map(v => v.join(''));
}
