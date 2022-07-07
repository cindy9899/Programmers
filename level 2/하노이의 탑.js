/*
하노이 탑은 퍼즐의 일종입니다.
1. 한 번에 하나의 원판만 옮길 수 있습니다.
2. 큰 원판이 작은 원판 위에 있어서는 안됩니다.
n개의 원판이 있고, 이 n개의 원판을 3번 원판으로 최소 횟수로 옯기려고 합니다.
1번 기둥에 있는 원판의 개수 n이 매개변수로 주어질 때,
3번 기둥으로 최소로 옮기는 방법을 return하는 solution을 완성하라

<제한 사항>
1. n은 15이하의 자연수입니다.

n 2
return => [[1, 2], [1, 3], 2, 3]
*/

function solution(n) {
    var answer = [];
    
    function Hanoi(num, from, other, to){
        if(num===0){
            return;
        }else{
            //받아온 원반 갯수보다 하나 적은 원반들을 목적지가 아닌 다른 곳으로
            Hanoi(num-1, from, to, other);
            answer.push([from, to]);
            //다른곳으로 옮겼던 원반들을 그 위로
            Hanoi(num-1, other, from, to);
        }
    }
    Hanoi(n, 1, 2, 3);
    
    return answer;
}