/*
두 정수 left와 right가 매개변수로 주어진다.
left부터 right까지의 모든 수들 중에서
약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return

<제한사항>
1. 1<=left<=right<=1000

left 13
right 17
result => 43 (13+14+15-16+17)
*/

function dvisor(n) {
    var result=0
    for(let i=0; i<=n; i++){
        if(n%i==0){
            result++
        }
    }
    if(result%2==0){
        return n
    }else{
        return n*(-1)
    }
}

function solution(left, right) {
    var answer = 0;
    for(let i=left; i<=right; i++){
    answer+=dvisor(i)
    }
    return answer;
}