/*
문자열 s를 숫자로 변환한 결과를 반환하는 함수

<제한사항>
1. s의 길이는 1 이상 5 이하입니다.
2. s의 맨 앞에는 부호(+, -)가 올 수 있습니다.
3. s는 부호와 숫자로만 이루어져있습니다.
4. s는 "0"으로 시작하지 않습니다.

s "-1234"
return => -1234
*/

function solution(s) {
    var answer = 0;
    if(s[0]=="-")
        answer-=Number(s.substr(1));
    else
        answer+=Number(s);
    return answer;
}