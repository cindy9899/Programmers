/*
H-index는 과학자의 생산성과 영향력을 나타내는 지표입니다..
어느 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고
나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-index입니다.

<제한사항>
1. 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
2. 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

citations [3, 0, 6, 1, 5]
return => 3
<이 과학자가 발표한 논문의 수는 5편이고, 그 중 3편의 논문은 3회이상 인용되었습니다..
그리고 나머지 2편의 논문은 3회이하 인용되었기 떄문에 이 과학자의 H-index는 3입니다.
*/

function solution(citations) {
    var answer = 0;
    citations.sort((a,b)=> b-a)
    for(let i=0; i<citations.length; i++){
        if(i<citations[i]){
            answer++
        }
    }
    
    return answer;
}