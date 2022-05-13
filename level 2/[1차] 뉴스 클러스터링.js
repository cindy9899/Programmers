/*
"자카드 유사도"
두 집합 A, B 사이의 자카드 유사도 J(A,B)는
두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값으로 정의된다.
예를 들어 A={1, 2, 3}, B={2, 3, 4}라고 할 때
교집합={2, 3} 합집합={1, 2, 3, 4}이므로 J(A, B)=2/4=0.5가 된다.

다중집합=> A는 원소 1을 3개 가지고 있고, B는 원소 1을 5개 가지고 있을때
교집합은 원소 1을 min(3, 5)개 가지고 있다.

이를 이용하여 문자열 사이의 유사도를 계산할 수 있다.
"FRANCE", "FRENCH"가 주어졌을 때, 이를 두 글자씩 끊어서 다중 집합을 만들면
{FR, RA, AN, NC, CE}, {FR, RE, EN, NC, CH}가 된다.
이를 이용하여 자카드 유사도를 구하면 2/8=0.25가 된다.

<제한 사항>
1. 입력으로는 str1, str2의 두 문자열이 들어오는 데, 각 문자열의 길이는 2 이상 1,000 이하이다.
2. 입력으로 들어온 문자열은 두 글자씩 끊어서 다중 집합의 원소로 만든다.
   이때 영문자로 된 글자 쌍만 유효하고, 기타 공백이나 숫자, 특수 문자가 들어있는 경우는 글자 쌍을 버린다.
   "ab+"가 입력으로 들어오면 "ab"만 원소로 삼고, "b+"는 버린다.
3. 다중집합 원소 사이를 비교할 때, 대문자와 소문자의 차이는 무시한다.
   "AB" "Ab", "ab"는 같은 원소로 취급한다.
*/

function solution(str1, str2) {
   var answer = 0;
   var checkEng=/[a-z]/;
   var str1Arr=[]
   var str2Arr=[]
   str1=str1.toLowerCase()
   str2=str2.toLowerCase()
   for(let i=0; i<str1.length-1; i++){
       if(checkEng.test(str1[i]) && checkEng.test(str1[i+1])){
           let jaletter=str1[i]+str1[i+1]
           str1Arr.push(jaletter)
       }
   }
   for(let i=0; i<str2.length-1; i++){
       if(checkEng.test(str2[i]) && checkEng.test(str2[i+1])){
           let jaletter=str2[i]+str2[i+1]
           str2Arr.push(jaletter)
       }
   }
   var strSet=new Set([...str1Arr, ...str2Arr])
   
   var union=0;
   var intersection=0;
   strSet.forEach((setLetter)=>{
       const tmp1=str1Arr.filter((e)=>e==setLetter).length;
       const tmp2=str2Arr.filter((e)=>e==setLetter).length;
       
       union+=Math.max(tmp1, tmp2)
       intersection+=Math.min(tmp1, tmp2)
   })
   if(union==0 && intersection==0){
       answer=1
   }else{
       answer=intersection/union
   }
   
   return Math.floor(answer*65536);
}