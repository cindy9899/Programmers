/*
중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발하였다.
1. 인쇄 대기 목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼낸다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면
    J를 대기목록의 가장 마지막에 넣는다.
3. 그렇지 않으면 J를 인쇄한다.

내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고싶다.
priorities=대기 목록에 있는 문서의 중요도가 순서대로 담김
location=내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지
return=> 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지

<제한사항>
1. 현재 대기목록에는 1개 이상 100개 이하의 문서가 있다.
2. 인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다.
3. location은 0이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며
    대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현한다.
 */
    function solution(priorities, location) {
        var answer = 0;
        var wait=priorities
        var mine=location
        while(wait.length>0){
            let print=true
            let first=wait[0]
            for(let i=0; i<wait.length; i++){
                if(first<wait[i]){
                    wait.shift()
                    wait.push(first)
                    print=false
                    if(mine-1<0){
                        mine=wait.length-1
                    }else{
                        mine=mine-1
                    }
                    break;
                } 
            }
            if(print){
                answer++;
                if(mine==0){
                    return answer
                }
                wait.shift()
                if(mine-1<0){
                        mine=wait.length-1
                    }else{
                        mine=mine-1
                    }
            }
        }
        
        return answer;
    }
