/*
실패율은 다음과 같이 정의한다.
- 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어의 수
실패율이 높은 stage부터 내림차순으로 stage의 번호가 담겨있는 배열을 반환

<제한사항>
1. 스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
2. stages의 길이는 1 이상 200,000 이하이다
3. stages에는 1 이상 N+1 이하의 자연수가 담겨있다.
- 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
- 단, N+1은 마지막 스테이지(N번째 스테이지)까지 클리어 한 사용자를 나타낸다.
- 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
- 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0으로 정의한다.

N 5
stages [2, 1, 2, 6, 2, 4, 3, 3]
return => [3, 4, 2, 1, 5]
*/

function solution(N, stages) {
    var answer = [];
    var userDic={}
    var tmpvalue=[]
    for(let i=1; i<=N; i++){
        userDic[i]=0
    }
    for(let i=0; i<stages.length; i++){
        if(userDic.hasOwnProperty(stages[i])){
           userDic[stages[i]]+=1 
        }   
    }
    var allUser=stages.length;
    for(let i=1; i<=N; i++){
        let lastP=allUser-userDic[i]
        tmpvalue.push(userDic[i]/(allUser==0?1:allUser))
        userDic[i]=userDic[i]/(allUser==0?1:allUser)
        allUser=lastP
    }
    tmpvalue=[...new Set(tmpvalue.sort(function(a,b){return b-a}))]
    
    userDic=Object.entries(userDic)
    for(let i=0; i<tmpvalue.length; i++){
        var tmparr=[]
        var filtered=userDic.filter(([key, value])=>value==tmpvalue[i])
        for(let i=0; i<filtered.length; i++){
            tmparr.push(parseInt(filtered[i][0]))
        }
        answer=answer.concat(tmparr.sort(function(a,b){return a-b}))
    }
    return answer;
}