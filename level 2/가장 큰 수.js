/*
정수를 이어 붙여 만들 수 있는 가장 큰 수를 반환
주어진 정수가 [6, 10, 2]라면 가장 큰 수는 6210입니다.

<제한사항>
1. numbers의 길이는 1 이상 100,000 이하입니다.
2. numbers의 원소는 0 이상, 1,000 이하입니다.
3. 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

numbers [3, 30, 34, 5, 9]
return => "9534330"
*/

function solution(numbers) {
    let answer=numbers.map(num=>num+"").sort(function(a,b){return (a+b)-(b+a)}).reverse().join("")
    return Number(answer)==0? "0" : answer
}

