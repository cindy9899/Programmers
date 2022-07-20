/*
참가자들에게는 숫자들과 3가지의 연산문자(+, -, *) 만으로 이루어진 연산 수식이 전달되며,
참가자의 미션은 전달받은 수식에 포함된 연산자의 우선순위를 자유롭게 재정의하여
만들 수 있는 가장 큰 숫자를 제출하는 것입니다.
2개 이상의 연산자가 동일한 순위를 가지도록 연산자 우선순위를 정의할 수는 없습니다.
만약 계산된 결과가 음수라면 해당 숫자의 절댓값으로 변환하여 제출하며,
제출한 숫자가 가장 큰 참가자를 우승자로 선정하며, 그 숫자를 우승 상금으로 지급합니니다.
우승시 받을 수 있는 가장 큰 금액은?

<제한 사항>
1. expression은 길이가 3 이상 100 이하인 문자열입니다.
2. expression은 공백문자, 괄호문자없이 오직 숫자와 3가지의 연산자 만으로 이루어진 올바른 중위표기법으로 표현된 연산식입니다.
    잘못된 연신식은 입력으로 주어지지 않습니다.
3. expression의 피연산자는 0 이상 999 이하의 숫자입니다.
4. expression은 적어도 1개 이상의 연산자를 포함하고 있습니다.
5. 연산자 우선순위를 어떻게 적용하더라도, expression의 중간 계산값과 최종 결과값은 절댓값이 2^63-1이하가 되도록 입력이 주어집니다.
6. 같은 연산자끼리는 앞에 있는 것의 우선순위가 더 높습니다.

expression "100-200*300-500+20"
return => 60420
*/

function operate(op, r1, r2){
    if(op=="+") return r1+r2;
    else if(op=="-") return r1-r2;
    else return r1*r2;
}

function solution(expression) {
    var range=[
        ["*", "-", "+"],
        ["*", "+", "-"],
        ["+", "*", "-"],
        ["+", "-", "*"],
        ["-", "+", "*"],
        ["-", "*", "+"]
    ]
    var numberArr=[]
    var resultArr=[]
    let tmp=""
    for(let i=0; i<expression.length; i++){
        if(expression[i]>=0 && expression[i]<=9){
            tmp+=expression[i]
        }else{
            numberArr.push(Number(tmp))
            numberArr.push(expression[i])
            tmp=""
        }
        if(i==expression.length-1) numberArr.push(Number(tmp))
    }
    
    for(let i=0; i<range.length; i++){
        var tmpArr=[...numberArr]
        for(let j=0; j<3; j++){
        while(tmpArr.indexOf(range[i][j])>0){
            let index=tmpArr.indexOf(range[i][j])
            if(index>0){
                tmpArr.splice(index-1, 3, operate(range[i][j], tmpArr[index-1], tmpArr[index+1]))
            }
        }
    }
        resultArr.push(Math.abs(tmpArr[0]))
    }
    
    return Math.max(...resultArr);
}