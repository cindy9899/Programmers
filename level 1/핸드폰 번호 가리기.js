/*
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가린다.
전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 * 으로 가린 문자열을 리턴

<제한사항>
1. s는 길이가 4 이상, 20 이하인 문자열입니다.

phone_number 01033334444
return *******4444
*/

function solution(phone_number) {
    var answer = '';
    for(let i=0;i<phone_number.length-4;i++)
        answer+='*';
    for(let i=phone_number.length-4;i<phone_number.length;i++)
        answer+=phone_number[i];
    return answer;
}