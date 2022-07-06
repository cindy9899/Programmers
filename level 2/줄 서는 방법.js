/*
n명의 사람이 일렬로 줄을 서고 있습니다.
사람의 수 n과, 자연수 k가 주어질 때, 사람을 나열하는 방법을 사전 순으로 나열한 것의 k번째 방법은?
ex) n=3이면
- [1, 2, 3]
- [1, 3, 2]
- [2, 1, 3]
- [2, 3, 1]
- [3, 1, 2]
- [3, 2, 1]


<제한 사항>
1. n은 20이하의 자연수입니다.
2. k는 n! 이하의 자연수입니다.

n 3
k 5
return => [3, 1, 2]
*/

function solution(n, k) {
    var answer = [];
    var leftArr=Array(n).fill().map((arr, i)=>{return i+1})
    var changeNum=[1]
    for(let i=2; i<n; i++){ //각 자리별로 올라갈 수 있는 최소 횟수
        changeNum.unshift(i*changeNum[0])
    }
    
    for(let i=0; i<changeNum.length; i++){
        //만약 올라갈수있는 횟수 조건에 맞지 않다면 남은 수중 가장 작은 수 넣기
        if(k<=changeNum[i]){
            let temp=leftArr[0]
            answer.push(temp)
            leftArr=leftArr.filter(e=>e!=temp)
        }else{
            //만약 k가 나누어떨어지면 그 위치에서 가장 큰수이므로
            //남은 수를 큰 수부터 붙인다.
            if(k%changeNum[i]==0){
                let temp=leftArr[Math.floor(k/changeNum[i])-1]
                answer.push(temp)
                leftArr=leftArr.filter(e=>e!=temp)
                leftArr.map((e, i)=>{
                    answer.push(leftArr[leftArr.length-i-1])
                })
                break;
            //만약 k가 나누어 떨어지지 않는다면
            }else{
                let temp=leftArr[Math.floor(k/changeNum[i])]
                answer.push(temp)
                leftArr=leftArr.filter(e=>e != temp)
                k%=changeNum[i]
            }
        }
    }
    //남은 숫자들
    //k가 2 이상인데 빠져나왔다면 changeNum으로 나눈 나머지가 0일때 빠져나왔다는 것을 의미
    if(k<=1){
        leftArr.map(e=>answer.push(e))
    }
    
    return answer;
}