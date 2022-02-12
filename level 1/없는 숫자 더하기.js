/*
0부터 9까지의 숫자 중 일부가 들어있는 배열 numbers가 매개변수
numbers에서 찾을 수 없는 0부터 9까지의 모든 숫자를 더한 수를 return

<제한사항>
1. 1 <= numbers의 길이 <= 9
2. 0 <= numbers의 모든 원소 <=9
3. numbers의 모든 뭔소는 서로 다릅니다.

numbers [1,2,3,4,6,7,8,0] => result 14

*/

function solution(numbers) {
    var answer = 45;
    for(let i=0; i<numbers.length; i++){
        answer-=numbers[i]
    }
    return answer;
}

/*
function solution(numbers){
    return 45-numbers.reduce((acc, cur)=>cur+acc, 0);
}

*/