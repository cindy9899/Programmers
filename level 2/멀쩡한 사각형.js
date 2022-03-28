/*
가로 길이가 Wcm, 세로 길이가 Hcm인 직사각형 종이가 있다.
누군가가 이 종이를 대각선 꼭짓점 2개를 잇는 방향으로 잘라 놓았다.
크기가 같은 직각삼각형 2개로 나누어진 상태의 가로세로 방향과 평행하게 
1cm x 1cm로 잘라 사용할 수 있는 만큼만 사용

<제한사항>
1. W, H : 1억 이하의 자연수

W 8
H 12
return => 80
*/

function solution(w, h) {
    var answer = 0;
    const [a,b]=[Math.min(w,h), Math.max(w,h)]
    for(let i=1; i<b; i++){
        answer+=Math.floor(a/b*i)
    }
    return answer*2;
}