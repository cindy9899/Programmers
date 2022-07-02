/*
0으로 된 도로에 숫자 블록을 설치하기로 하였다.
블록 번호가 n일 때, 가장 처음 블록은 n*2의 위치에 설치한다.
만약 기존 블록이 깔려있으면 그 자리의 블록을 빼고 새로운 블록으로 집어넣는다.

예를들어 3번 블록까지 설치하고 나면 첫 10개의 블록은 0,1,1,2,1,3,1,2,3,2가 된다.
특정 구간에 어떤 블록이 깔려있는지를 알고 싶다.
구간을 나타내는 두 수 begin, end가 매개 변수로 주어질 때, 그 구간에 깔려있는 블록의 숫자배열은?

<제한 사항>
1. begin, end는 1 이상 1,000,000,000 이하의 자연수, begin은 항상 end 보다 작습니다.
2. end-begin의 값은 항상 10,000을 넘지 않습니다.

begin 1
end 10
return => [0,1,1,2,1,3,1,4,3,5]
*/

function load(Num){
    for(let i=2; i<=Math.sqrt(Num); i++){
        if(Num%i==0 && Num/i <=10000000){
            return Num/i;
        }
    }
    return 1;
}

function solution(begin, end) {
    var answer = [];
    if(begin==1){
        answer.push(0)
        begin++
    }
    for(let i=begin; i<=end; i++){
        answer.push(load(i))
    }
    return answer;
}