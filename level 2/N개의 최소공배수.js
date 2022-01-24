/*
n개의 숫자를 답은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수

<제한 사항>
1. arr은 길이 1이상, 15 이하인 배열입니다.
2. arr의 원소는 100이하인 자연수입니다.
*/

function solution(arr) {
    var answer = 0;
    var least=arr[0];
    
    for(let i=1; i<arr.length; i++){
        let a=least
        let b=arr[i]
        if(a<b){
            let tmp=a;
            a=b;
            b=tmp;
        }
       while(b!=0){
           var n=a%b;
           a=b
           b=n
       }
        least=(least*arr[i])/a
    }
    return least;
}