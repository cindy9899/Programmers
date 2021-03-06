/*
스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.
스파이가 가진 의상들이 담긴 2차원배열이 주어질 때 서로 다른 옷의 조합의 수는?

<제한 사항>
1. clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
2. 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
3. 같은 이름을 가진 의상은 존재하지 않습니다.
4. clothes의 모든 원소는 문자열로 이루어져 있습니다.
5. 모든 문자열의 길이는 1 이상 20 이하인 자연수이고
   알파벳 소문자 또는 '_'로만 이루어져 있습니다.
6. 스파이는 하루에 최소 한 개의 의상은 입습니다.

clothes
[["yellowhat", "headgear"],
 ["bludesunglasses", "eyewear"],
 ["green_turban", "headgear"]]
return => 5
*/

function solution(clothes) {
    var answer = 1;
    var dic={}
    for(let i=0; i<clothes.length; i++){
        if(Object.keys(dic).includes(clothes[i][1]))
            dic[clothes[i][1]]++
        else{
            dic[clothes[i][1]]=1
        }
    }
    var tmparr=Object.values(dic)
    for(let i=0; i<tmparr.length; i++){
        answer*=tmparr[i]+1
    }
    
    return answer-1;
}