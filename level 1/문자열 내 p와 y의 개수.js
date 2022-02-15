/*
대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
p의 개수와 y의 개수를 비교해 같으면 True, 다르면 False
p, y 모두 하나도 없는 경우는 항상 True를 리턴합니다.
개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

<제한사항>
1. 문자열 s의 길이 : 50 이하의 자연수
2. 문자열 s는 알파벳으로만 이루어져 있습니다.

s "pPoooyY"
answer => true
*/

function solution(s){
    var answer = true;
    var judge=0;

    for(let i=0; i<s.length; i++){
        if(s[i]=='P' || s[i]=='p')
            judge++;
        else if(s[i]=="Y" || s[i]=="y")
            judge--;
        else
            continue;
    }
    if(judge==0)
        answer=true;
    else
        answer=false;

    return answer;
}