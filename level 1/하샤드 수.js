/*
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다.
예를 들어 18에서 1+8=9이고, 18은 9로 나누어 떨어지므로 하샤드 수입니다.

<제한조건>
1. x는 1 이상, 10000 이하인 정수입니다.

arr 10
return => true
arr 11
return => false
*/

function solution(x) {
    var answer = true;
    var stringNum = String(x);
    var sum=0;
    for(let i=0;i<stringNum.length;i++){
        sum+=Number(stringNum[i]);
    }
    if(x%sum!=0)
        answer=false;
    return answer;
}
