/*
rows x columns 크기의 행렬에 숫자가 한 줄씩 순서대로 적혀있습니다.
이 행렬에서 직사각형 모양의 범위를 여러 번 선택해, 테두리 부분에 있는 숫자들을 시계방향으로 회전
각 회전은 (x1, y1, x2, y2)인 정수 4개로 표현합니다.
문제에서 주어진 테두리 이외의 중앙 부분은 회전하지 않습니다.

<제한사항>
1. rows는 2 이상 100 이하인 자연수입니다.
2. columns는 2 이상 100 이하인 자연수입니다.
3. 처음 행렬에는 가로 방향으로 숫자가 1부터 하나씩 증가하면서 적혀있습니다.
 - 아무 회전도 하지 않았을 때, i행 j열에 있는 숫자는 ((i-1) * columns+j)입니다.
4. queries의 행의 개수(회전의 개수)는 1 이상 10,000 이하입니다.
5. queries의 각 행은 4개의 정수 [x1, y1, x2, y2] 입니다.
 - x1 행 y1 열부터 x2행 y2열까지 영역의 테두리를 시계방향으로 회전한다는 뜻입니다.
 - 1<=x1<x2<=rows, 1<=y1<y2<=columns입니다.
 - 모든 회전은 순서대로 이루어집니다.
 - 두번째 회전에 대한 답은 첫번째 회전을 실행한 다음, 그 상태에서 두번째 회전을 실행했을 떄 이동한 숫자 중 최솟값입니다.

 rows 6
 columns 6
 queries [[2,2,5,4],[3,3,6,6],[5,1,6,3]]
 return => [8, 10, 25]
*/

function solution(rows, columns, queries) {
    var origin=Array.from(Array(rows), ()=>Array(columns).fill(null))
    var num=0;
    for(let i=0; i<rows; i++){
        for(let j=0; j<columns; j++){
            num++
            origin[i][j]=num
        }
    }
    var newArr=Array.from(Array(rows), ()=>Array(columns).fill(null))
    var answer = [];
    
    for(let k=0; k<queries.length; k++){
        let smallest=10000 //set largest
        if(k>0){
            origin=newArr.map(v=>[...v])
        }
        var qu=queries[k];
        for(let i=0; i<rows; i++){
        for(let j=0; j<columns; j++){
            if(i==qu[0]-1 && j>=qu[1]-1 && j<qu[3]-1){
                if(smallest>origin[i][j]) smallest=origin[i][j]
                newArr[i][j+1]=origin[i][j]
            }else if(i==qu[2]-1 && j>qu[1]-1 && j<=qu[3]-1){
                if(smallest>origin[i][j]) smallest=origin[i][j]
                newArr[i][j-1]=origin[i][j]
            }else if(j==qu[1]-1 && i>qu[0]-1 && i<=qu[2]-1){
                if(smallest>origin[i][j]) smallest=origin[i][j]
                newArr[i-1][j]=origin[i][j]
            }else if(j==qu[3]-1 && i>=qu[0]-1 && i<qu[2]-1){
                if(smallest>origin[i][j]) smallest=origin[i][j]
                newArr[i+1][j]=origin[i][j]
            }else{
                newArr[i][j]=origin[i][j]
            }
        }
    }
        answer.push(smallest)
    }
    
    return answer;
}