/*
1부터 n까지 번호가 붙어있는 n명의 사람이 끝말잇기를 하고 있습니다.
1. 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
2. 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다. 
3. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야한다.
4. 이전에 등장했던 단어는 사용할 수 없습니다.
5. 한 글자인 단어는 인정되지 않습니다.

<제한사항>
1. 끝말잇기에 참여하는 사람의 수 n은 2이상 10 이하의 자연수입니다.
2. words는 끝말잇기에 사용한 단어들이 순서대로 들어있는 배열이며, 길이는 n이상 100이하입니다.
3. 단어의 길이는 2이상 50 이하입니다.
4. [번호, 차례] 형태로 return(틀린 사람)
5. 주어진 단어들로 탈락자가 생기지 않는다면, [0,0]을 return

*/

function solution(n, words) {
    var answer = [];
    var lastwords=[];

    for(let i=0; i<words.length; i++){
        if(lastwords.includes(words[i])){
            answer=[(i+1)%n==0?n:(i+1)%n, Math.ceil((i+1)/n)]
            break;
        }
        if(i>0){
            if(words[i-1][words[i-1].length-1] != words[i][0]){
                answer=[(i+1)%n==0?n:(i+1)%n, Math.ceil((i+1)/n)];
                break;
            }            
        }
        
        lastwords.push(words[i]);
                
    }
    if(lastwords.length==words.length)
        answer=[0,0]

    return answer;
}