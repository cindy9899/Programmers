/*
박사님은 당신에 자신의 연구실에 있는 총 N마리의 폰켓몬중에서 N/2마리를 가져가도 좋다고 했습니다.
폰켓몬은 종류에 따라 번호를 붙여 구분합니다.
[3번, 1번, 2번, 3번]이라면 3번 폰켓몬 2마리, 1번 폰켓몬 1마리, 2번 폰켓몬 1마리 입니다.
당신은 최대한 많은 종류의 폰켓몬을 가지길 원하기 때문에, 최대한 많은 종류의 폰켓몬을 포함해서
N/2마리를 선택하려 합니다.
그 중, 가장 많은 폰켓몬을 선택하는 방법을 찾아 그때의 폰켓몬 종류 번호의 개수를 반환하시오

<제한사항>
1. nums는 폰켓몬의 종류 번호가 담긴 1차원 배열입니다.
2. nums의 길이(N)는 1 이상 10,000 이하의 자연수이며, 항상 짝수로 주어집니다.
3. 폰켓몬의 종류 번호는 1 이상 200,000 이하의 자연수로 나타냅니다.
4. 가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도,
   선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return하면 됩니다.

nums [3,3,3,2,2,4]
result => 3
*/

function solution(nums) {
    var size=Math.floor(nums.length/2)
    var list={}
    for(let i=0; i<nums.length; i++){
        if(!list[nums[i]]){
            list[nums[i]]=1
        }else{
            list[nums[i]]+=1
        }
    }
    if(Object.keys(list).length>size){
        return size
    }else{
        return Object.keys(list).length
    }

}