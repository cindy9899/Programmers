/*
배열 arr가 주어집니다.
배열의 각 원소는 숫자 0부터 9까지로 이루어져있습니다.
이때, 배열 arr에서 연속으로 나타나는 숫자를 하나만 남기고 제거하는데
원소들의 숫자를 유지해야 합니다.

<제한사항>
1. 배열 arr의 크기 : 1,000,000 이하의 자연수
2. 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

arr [1,1,3,3,0,1,1]
result => [1,3,0,1]
*/

function solution(arr)
{
    var answer = [];

    answer.push(arr[0]);
    for(let i=1;i<arr.length;i++){
        if(answer[answer.length-1]==arr[i])
            continue;
        answer.push(arr[i]);
    }
    
    return answer;
}
