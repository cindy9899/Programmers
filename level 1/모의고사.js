/*
수포자 삼인방은 모의고사에서 수학 문제를 전부 찍으려고 합니다.
1번 수포자 : 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자 : 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, ...
3번 수포자 : 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, ...

정답이 순서대로 들어있는 answers가 주어질 때 가장 많은 문제를 맞힌 사람은?

<제한사항>
1. 시험은 최대 10,000 문제로 구성되어 있습니다.
2. 문제의 정답은 1, 2, 3, 4, 5중 하나입니다,
3. 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

answers [1,2,3,4,5]
return => [1]
answers [1,3,2,4,2]
return => [1,2,3]
*/

function solution(answers) {
    var answer = [];
    var stu1=[1,2,3,4,5]
    var stu2=[2,1,2,3,2,4,2,5]
    var stu3=[3,3,1,1,2,2,4,4,5,5]
    var ans1=answers.filter(function(a,i){return a===stu1[i%stu1.length]}).length
    var ans2=answers.filter(function(a,i){return a===stu2[i%stu2.length]}).length
    var ans3=answers.filter(function(a,i){return a===stu3[i%stu3.length]}).length
    
    var maxscore=Math.max(ans1, ans2, ans3)
    
    if(ans1==maxscore) answer.push(1);
    if(ans2==maxscore) answer.push(2);
    if(ans3==maxscore) answer.push(3);
    
    return answer;
}