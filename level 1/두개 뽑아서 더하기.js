/*
정수배열 numbers가 주어집니다.
numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아
더해서 만들 수 있는 모든 수를 배열에 오른차순으로 담아 return

<제한사항>
1. numbers의 길이는 2 이상 100 이하입니다.
2. numbers의 모든 수는 0 이상 100 이하입니다.

numbers [2,1,3,4,1]
result => [2,3,4,5,6,7]
*/

function solution(numbers) {
    var answer = [];
    var tempnum;
    
    for(let i=0;i<numbers.length-1;i++){
        for(let j=i+1; j<numbers.length;j++){
            tempnum=numbers[i]+numbers[j];
            if(!answer.includes(tempnum))
                answer.push(tempnum);
        }
    }
    
    answer.sort(function(a,b){return a-b;});
    return answer;
}