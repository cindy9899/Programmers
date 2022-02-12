/*
자연수 n이 매개변수로 주어집니다.
n을 3진법 상에서 앞뒤로 뒤집은 후 이를 다시 10진법으로 표현하여 return

<제한사항>
1. n은 1 이상 100,000,000 이하인 자연수

n 45
result => 7
(45=> 1200=> 0021=> 7)
*/

function solution(n) {
    var answer = 0;
    var three = [];
    
    while(n>=3){
        three.push(n%3);
        n=parseInt(n/3);
    }
    three.push(n);
    
    for(let i=0;i<three.length;i++){
        answer+=Math.pow(3,three.length-1-i)*three[i];
    }
    return answer;
}