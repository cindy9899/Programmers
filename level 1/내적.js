/*
길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어진다.
a와 b의 내적을 return하라
a와 b의 내적은 a[0]*b[0]+a[1]*b[1]+...+a[n-1]*b[n-1]

<제한사항>
1. a, b의 길이는 1이상 1,000 이하입니다.
2. a, b의 모든 수는 -1,000이상 1,000 이하입니다.

a [1,2,3,4]
b [-3, -1, 0, 2]
result => 3
*/

function solution(a, b) {
    var answer = 0;
    
    for(let i=0;i<a.length;i++){
        answer+=a[i]*b[i];
    }
    return answer;
}