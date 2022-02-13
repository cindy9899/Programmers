/*
두 정수 a,b가 주어졌을 때, a와 b 사이에 속한 모든 정수의 합

<제한사항>
1. a와 b가 같은 경우는 둘 중 아무 수나 리턴
2. a와 b는 -10,000,000 이상 10,000,000 이하인 정수
3. a와 b의 대소관계는 정해져 있지 않습니다.

a 3
b 5
return => 12 (3+4+5)
*/

function solution(a, b) {
    var answer = 0;
    
    answer=(a+b)*(Math.abs(a-b)+1)/2;
    return answer;
}