/*
124 나라가 있습니다.
10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.
1. 124 나라에는 자연수만 존재합니다.
2. 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.

1-> 1, 2-> 2, 3-> 4, 4-> 11 등으로 변한됩니다.

제한사항
n은 500,000,000 이하의 자연수입니다.
*/

function solution(n) {
    const number=['1','2','4']
    var result="";
    while(true){
        if(n<4){
            result+=number[n-1];
            break;
        }
        let share=parseInt((n-1)/3)
        let remain=(n-1)%3
        result+=number[remain]
        n=share
    }
    result=result.split("").reverse().join("")
    return result;
}