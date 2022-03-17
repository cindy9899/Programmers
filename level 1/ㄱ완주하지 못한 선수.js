/*
단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때
완주하지 못한 선수의 이름을 반환하도록 작성하시오.
완주를 하지 못한 선수는 오직 1명 입니다.

<제한사항>
1. 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
2. completion의 길이는 participant의 길이보다 1 작습니다.
3. 참가자의 이름은 1개 이상 20개이하의 알파벳 소문자로 이루어져 있습니다.
4. 참가자 중에는 동명이인이 있을 수 있습니다.

participant ["mislav", "stanko", "mislav", "ana"]
completion ["stanko", "ana", "mislav"]
return => "mislav"
*/
function solution(participant, completion) {
    let list = {}
    for(let i=0;i<completion.length;i++){
        if(!list[completion[i]]) list[completion[i]] = 1
        else list[completion[i]] += 1
    }
    
    for(let i=0;i<participant.length;i++){
        if(!list[participant[i]]) 
            return participant[i]
        else{
            list[participant[i]] -= 1
        }
        
    }
    
}
