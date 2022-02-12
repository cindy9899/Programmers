/*
2016년 1월 1일은 금요일입니다.
2016년 a월 b일은 무슨 요일일까요?
요일의 이름은 [SUN, MON, TUE, WED, THU, FRI, SAT]

<제한사항>
1. 2016년은 윤년입니다.
2. 2016년 a월 b일은 실제로 있는 날입니다.

a 5
b 24
result => TUE
*/

function solution(a, b) {
    var answer = '';
    var weekday = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    
    var date=new Date(2016, a-1, b);
    answer=weekday[date.getDay()];
    
    return answer;
}