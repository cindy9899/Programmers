/*
정수 x와 자연수 n을 입력받아, x부터 시작하여 x씩 증가하는 n개의 숫자를 지니는 리스트 반환

<제한사항>
1. x는 -10000000 이상, 10000000 이하인 정수입니다.
2. n은 1000 이하인 자연수입니다.

x 2
n 5
return => [2,4,6,8,10]
*/

function solution(x, n) {
    var answer = [];
    for(let i=1;i<=n;i++)
        answer.push(x*i);
    return answer;
}