/*
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다.
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수는?

<제한 사항>
1. s는 길이 1 이상 200 이하인 문자열입니다.
2. s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
    - 숫자는 단어의 첫 문자로만 나옵니다.
    - 숫자로만 이루어진 단어는 없습니다.
    - 공백문자가 연속해서 나올 수 있습니다.

s "3people unFollowed me"
return => "3people Unfollowed Me"
*/

function solution(s) {
    var sstr=s.split(" ").map(function(v){
        return v.toLowerCase()
    });
    for(let i=0; i<sstr.length; i++){
        if(sstr[i].charCodeAt(0)>47 && sstr[i].charCodeAt(0)<58)
            continue;
        else
            sstr[i]=sstr[i].charAt(0).toUpperCase()+sstr[i].slice(1)
            
    }
    return sstr.join(" ");
}