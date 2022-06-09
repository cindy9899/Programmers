/*
중앙에는 노란색으로 칠해져있고, 테두리 1줄은 갈색으로 칠해져있는 격자모양 카펫
갈색 격자의 수 brown, 노란색 격자의 수 yellow가 주어질 때, 카펫의 가로, 세로의 크기는?

<제한 사항>
1. 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
2. 노란색 격자의 수 yellow는 1 이사 2,000,000 이하인 자연수입니다.
3. 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

brown 10
yellow 2
return => [4, 3]
explain>>
####
#@@#
####
*/

function solution(brown, yellow) {
    var sum=brown+yellow;
    for(let h=3; h<brown; h++){
        if(sum%h==0){
            var w=sum/h;
        }
        if((h-2)*(w-2)==yellow){
            return [w,h]
        }
    }
}