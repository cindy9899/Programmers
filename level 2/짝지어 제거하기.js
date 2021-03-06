/*
알파벳 소문자로 이루어진 문자열을 가지고 시작합니다.
같은 알파벳이 2개 붙어있는 짝을 찾습니다.
그 둘을 제거한 뒤, 앞뒤로 문자열을 이어붙입니다.
이 과정을 반복하여 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다.
예를 들어 s=baabaa 이면
baabaa -> bbaa-> aa-> 
의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.

<제한사항>
1. 문자열의 길이 : 1,000,000 이하의 자연수
2. 문자열을 모두 소문자로 이루어져 있습니다.

s cdcd
return => 0
*/

function solution(s)
{
    var sstack=[];
    var strtrue=true;
    if(s.length%2!=0) return 0
        for(let i=0; i<s.length; i++){
            if(sstack[sstack.length-1]==s[i])
                sstack.pop()
            else
                sstack.push(s[i])
        }
    if(sstack.length==0)
        return 1
    else
        return 0
}