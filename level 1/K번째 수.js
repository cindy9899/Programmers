/*
배열 array의 i번쨰 숫자부터 j번째 숫자까지 자르고 정렬
k번째 있는 수는?
array, i=(int), j=(int), k=(int)

<제한사항>
1. array의 길이는 1 이상 100 이하입니다.
2. array의 각 원소는 1 이상 100 이하입니다.
3. commands의 길이는 1 이상 50 이하입니다.
4. commands의 각 원소는 길이가 3 입니다.

array [1, 5, 2, 6, 4, 7, 4]
commands [[2,5,3], [4,4,1], [1,7,3]]
return => [5,6,3]
*/

function solution(array, commands) {
    var answer = [];    
    for(let i=0; i<commands.length; i++){
        answer.push(array.slice(commands[i][0]-1, commands[i][1]).sort(function(a,b){return a-b})[commands[i][2]-1])
    }
    return answer;
}