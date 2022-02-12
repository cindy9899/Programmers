/*
스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 
노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다
1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

genres=노래의 장르를 나타내는 문자열배열
plays=노래별 재생 횟수를 나타내는 정수 배열
return=>베스트 앨범에 들어갈 노래의 고유번호를 순서대로

<제한사항>
1. genres[i]는 고유번호가 i인 노래의 장르입니다.
2. plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
3. genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
4. 장르 종류는 100개 미만입니다.
5. 장르에 속한 곡이 하나라면 하나의 곡만 선택합니다.
6. 모든 장르는 재생된 횟수가 다릅니다.

 */

function solution(genres, plays) {
    var answer = [];
    var playdic={}    
    for(let i=0; i<genres.length; i++){
        playdic[genres[i]]=[...playdic[genres[i]] || [], {"id":i, "play": plays[i]}]
    }
    let result=[]
    for(let i in playdic){
        result.push({
            genr: i,
            playlist: playdic[i].sort(function(a,b){
                return b.play-a.play
            })
        })
    }
    result=result.sort(function(a,b){
        return b.playlist.reduce((acc, cur)=>acc+=cur.play,0)-a.playlist.reduce((acc, cur)=>acc+=cur.play,0)
    })
    for(let i=0; i<result.length; i++){
        for(let j=0; j<result[i].playlist.length; j++){
            if(j>=2){
                break;
            }
            answer.push(result[i].playlist[j].id)
        }
    }
    
    
    return answer;
}