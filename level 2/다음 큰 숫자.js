/*
자연수 n이 주어졌을 때, n의 다음 큰 숫자는 조건에 따른다.
조건 1. n의 다음 큰 숫자는 n보다 큰 자연수입니다.
조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수입니다.

n 78 (1001110)
return => 83 (1010011)
*/

function solution(n) {
    function one(number){
        return number.toString(2).match(/1/g).filter(item=>item!=='').length;
    }
    var origin=one(n);
    while(true){
        n++
        if(one(n)==origin){
            return n
        }
    }
}