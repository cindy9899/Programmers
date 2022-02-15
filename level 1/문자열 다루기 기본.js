/*
문자열 s의 길이가 4 혹은 6이고, 숫자로만 이루어져 있는가

<제한사항>
1. s는 길이 1 이상, 길이 8 이하인 문자열입니다.

s "a234"
return => false
s "1234"
return => true
*/

function solution(s) {
    if(s.length !== 4 && s.length !== 6) return false
    let reg = new RegExp(/[0-9]/g)
    return s.match(reg).join("") == s
}