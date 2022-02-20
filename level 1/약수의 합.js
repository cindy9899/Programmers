/*
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수

<제한사항>
1. n은 0 이상 3000 이하인 정수입니다.

n 12
return 28 (1+2+3+4+6+12)
*/

function solution(n) {
    var answer = 0;
    for(let i=1;i<=n;i++){
        if(n%i==0)
            answer+=i;
    }
    return answer;
}