/*
각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
각 기능의 개발 속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고,
이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

각 배포마다 몇 개의 기능이 배포되는지 반환하시오

<제한 사항>
1. 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
2. 작업 진도는 100 미만의 자연수입니다.
3. 작업 속도는 100 이하의 자연수입니다.
4. 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다.
   예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일뒤에 이루어집니다.

progresses [93, 30, 55]
speeds [1, 30, 5]
return => [2, 1]
*/

function solution(progresses, speeds) {
   var arr=[]
   var answer = [];
   
   for(let i=0; i<progresses.length; i++){
       arr.push(Math.ceil((100-progresses[i])/speeds[i]))
   }
   let now=0;
   let i=1;
   let many=0;
   while(i<=arr.length){
       many++
       if(arr[now]<arr[i]){
           answer.push(many)
           many=0
           now=i
           i=now+1
       }else{
           i++
       }
   }
   answer.push(many)
   
   return answer;
}