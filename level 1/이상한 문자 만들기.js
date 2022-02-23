/*
문자열 s는 한 개 이상의 단어로 구성되어 있다.
각 단어는 하나 이상의 공백 문자로 구분되어 있다.
각 단어의 짝수번째 알파벳은 대문자, 홀수번째 알파벳은 소문자로 바꾼 문자열을 반환하는 함수

<제한사항>
1. 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백) 별로 짝/홀수 인덱스 판단
2. 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리

s "try hello world"
return => "TrY HeLlO WoRlD"
*/

function solution(s) {
    var answer = '';
    var temp = s.split("");
    var index=0;
    for(let i=0; i<temp.length; i++){
        if(temp[i]==" "){
            index=0
        }else{
            if(index%2==0){
                temp[i]=temp[i].toUpperCase()
            }else{
                temp[i]=temp[i].toLowerCase()
            }
            index++
        }
    }

    return temp.join("");
}