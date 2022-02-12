/*
자연수 n이 매개변수로 주어집니다.
n을 x로 나눈 나머지가 1이 되도록하는 가장 작은 자연수 x를 return

<제한사항>
1. 3<=n<=1,000,000

n 10
result => 3
*/

function solution(n) {
    for(let i=2; i<n; i++){
        if(n%i==1)
            return i;
    }
}