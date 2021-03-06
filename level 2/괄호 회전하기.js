/*
다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의한다.
- (), [], {} 는 모두 올바른 괄호 문자열입니다
- 만약 A가 올바른 괄호 문자열이라면 (A), [A], {A}도 올바른 괄호 문자열
- 만약 A, B가 올바른 괄호 문자열이라면 AB도 올바른 괄호 문자열입니다.

대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다.
이 s를 왼쪽으로 x(0<=x<(s의 길이)) 칸 만큼 회전시켰을 때,
s가 올바른 괄호 문자열이 되게 하는 x의 개수는?

<제한 사항>
1. s의 길이는 1 이상 1,000 이하입니다.

ex) [](){}에서 왼쪽으로 1번 회전하면 ](){}[

s [](){}
return => 3
*/

function check(str){
    var checkArr=[]
    if(str.length%2!=0) return 0
    for(let i=0; i<str.length; i++){
        if(str[i]=="[" || str[i]=="(" || str[i]=="{"){
            checkArr.push(str[i])
        }else{
            switch(str[i]){
                case "]": if(checkArr[checkArr.length-1]!="[") return false;
                    else checkArr.pop();
                    break;
                case "}": if(checkArr[checkArr.length-1]!="{") return false;
                    else checkArr.pop();
                    break;
                case ")": if(checkArr[checkArr.length-1]!="(") return false;
                    else checkArr.pop();
            }
        }
    }
    return true;
}

function solution(s) {
    var answer = 0;
    s=s.split("")
    for(let i=0; i<s.length; i++){
        if(check(s)) answer++
        let tmp=s.shift()
        s.push(tmp)
    }
    return answer;
}