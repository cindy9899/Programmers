/*
숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 원래 숫자를 찾는 게임
문자열 s가 매개변수로 주어질 때 s가 의미하는 원래 숫자를 출력

<제한사항>
1. 1<=s의 길이<=50
2. s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
3. return 값이 1 이상 2,000,000,000이하의 정수가 되는 올바른 입력만 s로 주어집니다.

s "one4seveneight"
return => 1478
*/

function solution(s) {
    var answer=""
    var temp=""
    var list={"zero":"0", "one":"1", "two":"2", "three":"3", "four":"4", "five":"5", "six":"6", "seven":"7", "eight":"8", "nine":"9"}
    
    for(let i=0; i<s.length; i++){
        if(s[i]>=0 && s[i]<10){
            answer=answer+s[i]
        }else{
            temp=temp+s[i]
        }
        if(list[temp]){
            answer=answer+list[temp]
            temp=""
        }
    }
    answer=Number(answer)
    
    return answer;
    
}