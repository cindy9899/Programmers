/*
문자열 s에는 공백으로 구분된 숫자들이 저장되어있다.
최솟값과 최댓값을 찾아 이를 "(최솟값) (최댓값)" 형태의 문자열로 반환하는 함수를 작성하시오

<제한 사항>
1. s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.

s "1 2 3 4"
return => "1 4"
*/

function solution(s) {
    var answer = '';
    s=s.split(" ").map(x=>+x)
    answer=Math.min.apply(null, s)+" "+Math.max.apply(null, s)
    return answer;
}