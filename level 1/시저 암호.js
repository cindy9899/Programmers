/*
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 
다른 알파벳으로 바꾸는 암호화 방식을 시저암호라고 한다.

<제한사항>
1. 공백은 아무리 밀어도 공백입니다.
2. s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
3. s의 길이는 8000이하입니다.
4. n은 1 이상, 25 이하인 자연수입니다.
*/

function solution(s, n) {
    var answer = '';
    for(let i=0; i<s.length; i++){
        var letter=s.charCodeAt(i)
        if(letter==32){
            answer+=" "
            continue;
        }
        else if(65<=letter && letter<=90){
            letter+=n
            if(letter>90){
                letter-=26
            }
        }
        else{
            letter+=n
            if(letter>122){
                letter-=26
            }
        }
        letter=String.fromCharCode(letter)
        answer+=letter
    }
    
    return answer;
}