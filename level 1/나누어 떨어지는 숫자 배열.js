/*
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1

<제한사항>
1. arr은 자연수를 담은 배열
2. 정수 i, j에 대해 i!=j이면 arr[i]!=arr[j] 입니다.
3. divisor는 자연수입니다.
4. array는 길이 1 이상인 배열입니다.

arr [5,9,7,10]
divisor 5
result => [5,10]
*/

function solution(arr, divisor) {
    var answer = [];
    
    console.log(arr);
    console.log(divisor);
    for(let i=0;i<arr.length;i++){
        if(arr[i]%divisor==0)
            answer.push(arr[i]);
    }
    answer.sort(function(a,b){return a-b;});
    if(answer.length==0)
        answer.push(-1);
    return answer;
}