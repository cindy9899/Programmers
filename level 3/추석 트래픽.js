/*
로그 데이터를 분석한 수 초당 최대 처리량을 계산한다.

1. solution함수에 전다로디는 lines 배열은 N(1<=N<=2000)개의 로그 문자열로 되어잇으며,
    각 로그 문자열마다 요청에 대한 응답 완료시간 S와 처리시간 T가 공백으로 구분되어있다.
2. 응답완료시간 S는 작년 추석인 2016년 9월 15일만 포함하여 고정길이 2016-09-15 hh:mm:ss.sss 형식으로 되어있다.
3. 처리시간 T는 0.1s, 0.312s, 2s와 같이 최대 소수점 셋째 자리까지 기록한다.
4. 예를 들어 로그문자열 "2016-09-15 03:10:33.202 0.011s"는 "2016년 9월 15ㅇ리 오전 3시 10분 33.010초"부터 "2016년 오전 3시 10분 33.020초"까지
    "0.011초" 동안 처리된 요청을 의미한다.(처리시간=시작시간, 끝시간을 포함)
5. lines 배열은 응답완료시간 S를 기준으로 오름차순 정렬되어있다.
*/

function solution(lines) {
    var startTime=[]
    var endTime=[]
    var max=-10
    //시작시간, 끝난시간 parcing
    for(let i=0; i<lines.length; i++){
        //시간
        var timeS= new Date(`${lines[i].split(" ")[0]} ${lines[i].split(" ")[1]}`)
        var timeE= new Date(`${lines[i].split(" ")[0]} ${lines[i].split(" ")[1]}`)
        //console.log(timeS.toString())
        endTime[i]=timeE
        //걸린시간
        var processT=lines[i].split(" ")[2].slice(0, -1).split(".")
        
         if(processT.length==1){
             timeS.setSeconds(timeS.getSeconds()-processT[0])
             timeS.setMilliseconds(timeS.getMilliseconds()+1)
             startTime[i]=timeS
         }else{
            timeS.setSeconds(timeS.getSeconds()-processT[0])
            timeS.setMilliseconds(timeS.getMilliseconds()-processT[1]+1)
            startTime[i]=timeS
        }       
    }
    
    //1초 비교(시작시간 기준)
    for(let i=0; i<startTime.length; i++){
        var count=0; //겹치는 숫자
        var startS=new Date(startTime[i]) //1초 시작 시간
        var endS=new Date(startTime[i])
        endS.setMilliseconds(endS.getMilliseconds()+999) //1초 끝 시간
        
        for(let j=0; j<startTime.length; j++){
            if(!(endTime[j]<startS || startTime[j]>endS)){
                count++;
            }
        }
        if(max<=count)
            max=count
        
    }
    console.log(max)
    
    for(let i=0; i<startTime.length; i++){
        var count=0; //겹치는 숫자
        var startE=new Date(endTime[i]) //1초 시작 시간
        var endE=new Date(endTime[i])
        endE.setMilliseconds(endE.getMilliseconds()+999) //1초 끝 시간
        
        for(let j=0; j<startTime.length; j++){
            if(!(endTime[j]<startE || startTime[j]>endE)){
                count++;
            }
        }
        if(max<=count)
            max=count
        
    }
    console.log(max)
    
    return max;
}