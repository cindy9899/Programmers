/*
행과 열의 크기가 같은 두 행렬 arr1, arr2를 입력받아, 행렬 덧셈의 결과를 반환

<제한사항>
1. 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

arr1 [[1,2], [2,3]]
arr2 [[3,4], [5,6]]
return => [[4,6], 7,9]
*/

function solution(arr1, arr2) {
    var answer = [];
    
    
    for(let i=0;i<arr1.length;i++){
        var temp = [];
        for(let j=0;j<arr1[0].length;j++){
            temp.push(arr1[i][j]+arr2[i][j]);
        }
        answer.push(temp);
    }
    return answer;
}