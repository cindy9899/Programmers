/*
한자리 숫자가 적힌 종이조각이 흩어져있다.
흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 한다.
17-> 3개(7, 17, 71), 011-> 2개(11, 101)

<제한사항>
1. numbers는 길이 1이상 7이하인 문자열이다.
2. numbers는 0~9까지 숫자만으로 이루어져있다.
3. "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미이다.
*/


function getPermutations(arr, selectNumber){
    const result=[];
    if(selectNumber===1) return arr.map((value)=>[value])
    arr.forEach((fixed, index, origin)=>{
        const rest=[...origin.slice(0, index), ...origin.slice(index+1)];
        const permutations=getPermutations(rest, selectNumber-1);
        const attached=permutations.map((permutation)=>[fixed, ...permutation]);
        result.push(...attached);
    });
    return result
}
function isPrime(num){
    if(num<2)
        return false
    if(num===2){
        return true;
    }
    for(let i=2; i<=Math.floor(Math.sqrt(num)); i++){
        if(num%i===0)
            return false
    }
    return true;
}

function solution(numbers) {
    var ansarr=[]
    numbers=String(numbers).split("")
    for(let i=1; i<=numbers.length; i++){
        const comb=getPermutations(numbers, i)
        for(let j=0; j<comb.length; j++){
            ansarr.push(Number(comb[j].join("")))
        }
    }
    var answer = 0;
    const set=new Set(ansarr)
    ansarr=[...set];
    for(let i=0; i<ansarr.length; i++){
        if(isPrime(ansarr[i]))
            answer++
    }
    
    
    
    
    
    
    return answer;
}