/*
단어의 s의 가운데 글자를 반환하는 함수 만들기
단어의 길이가 짝수라면 가운데 두 글자를 반환

<제한사항>
1. s는 길이가 1 이상, 100이하인 스트링

s qwer
return => we
*/

function solution(s) {
    if(s.length%2==1)
        return s[Math.floor(s.length/2)];
    else
        return s.substr(s.length/2-1,2);
}