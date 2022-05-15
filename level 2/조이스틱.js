/*
맨 처음에는 A로만 이루어져 있습니다.
조이스틱을 각 방향으로 움직이면 아래와 같습니다.
위: 다음 알파벳
아래: 이전 알파벳(A에서 아래쪽으로 이동하면 Z로)
왼쪽: 커서를 왼쪽으로 이동(첫 번째에서 왼쪽으로 이동하면 마지막 문자)
오른쪽: 커서를 오른쪽으로 이동(마지막에서 오른쪽으로 이동하면 첫 문자)

예를들어, JAZ를 만드려면
1. 첫 번째 위치에서 위로 9번 조작하여 J를 완성합니다.
2. 조이스틱을 왼쪽르로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
3. 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
=> 11번이 최소 이동

<제한 사항>
1. name은 알파벳 대문자로만 이루어져 있습니다.
2. name의 길이는 1 이상 20 이하입니다.

name "JEROEN"
return => 56
*/

function solution(name) {
    var answer = 0;
    var min=name.length-1;
    for(let i=0; i<name.length; i++){
        if(name.charCodeAt(i)<=78){
            answer+=name.charCodeAt(i)-65
        }else{
            answer+=91-name.charCodeAt(i)
        }
    
        var aEnd=i+1
        while(name[aEnd]=="A"){
            aEnd++
        }
    
        min=Math.min(min, ((i)*2)+name.length-aEnd, (name.length-aEnd)*2+i)
        //1. 처음부터 끝까지 진행
        //2. 진행하다가 A를 만나서 앞으로 가는 진행
        //3. 뒤쪽의 요소를 먼저 수정하고 name의 처음으로 넘어오는 진행
    }
    answer+=min
    
    return answer;
}