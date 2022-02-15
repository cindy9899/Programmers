/*
String형 배열 seoul의 요소 중 "Kim"의 위치 x를 찾아 출력

<제한사항>
1. seoul은 길이 1 이상, 1000이하인 배열입니다.
2. seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
3. "Kim"은 반드시 seoul 안에 오직 한번 포함되어 있습니다.

seoul ["Jane", "Kim"]
return => 김서방은 1에 있다.
*/

function solution(seoul) {
    var answer = "김서방은 "+seoul.indexOf("Kim")+"에 있다";
    return answer;
}