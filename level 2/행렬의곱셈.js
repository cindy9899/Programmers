/*
2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수

<제한 조건>
1. 행렬 arr1, arr2의 행과 열의 길이는 2이상 100 이하입니다.
2. 행렬 arr1, arr2의 원소는 -10 이상 20이하인 자연수입니다.
3. 곱할 수 있는 배열만 주어집니다.
*/

function solution(arr1, arr2) {
    var answer=Array.from(Array(arr1.length), ()=> Array(arr2[0].length).fill(0))
    
     for(let i=0; i<arr1.length; i++){
         for(let j=0; j<arr2[0].length; j++){
            for(let k=0; k<arr1[0].length; k++)
                answer[i][j]+=arr1[i][k]*arr2[k][j];
         }
     }
    return answer;
}