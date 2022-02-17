/*
길이가 n이고, "수박수박..."와 같은 패턴을 유지하는 문자열

<제한조건>
1. n은 길이 10,000 이하인 자연수

n 3
return => "수박수"
*/

function solution(n) {
    var answer = '';
    for(let i=0;i<n;i++){
        if(i%2==0)
            answer+="수";
        else
            answer+="박";
    }
    return answer;
}