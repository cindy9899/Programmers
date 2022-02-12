/*
정수들의 절댓값을 차례대로 담은 정수 배열 absolute
이 정수들의 부호를 차례대로 담은 불린배열 signs
실제 정수들의 합을 구하시오

<제한사항>
1. absolutes의 길이는 1이상 1,000 이하
2. absolutes의 모든 수는 각각 1이상 1,000 이하
3. signs의 길이는 absolutes의 길이와 같다.
4. signs[i]가 참이면 absolutes[i]의 실제 정수가 양수, 그렇지 않으면 음수

absolutes [4,7,12]
signs [true, false true]
result=> 9
*/

function solution(absolutes, signs) {
    var answer=0;
    for(let i=0;i<absolutes.length;i++){
        if(signs[i]) answer+=absolutes[i];
        else answer-=absolutes[i];
    }
    return answer;
}