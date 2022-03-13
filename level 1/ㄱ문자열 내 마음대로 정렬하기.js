/*
문자열로 구성된 리스트 strings과 정수 n
각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬

<제한사항>
1. strings는 길이 1 이상, 50 이하인 배열입니다.
2. strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
3. strings의 원소는 길이 1 이상, 100 이하인 문자열입니다.
4. 모든 strings의 원소의 길이는 n보다 큽니다.
5. 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

strings ["sun", "bed", "car"]
n 1
return => ["car", "bed", "sun"]
*/

function solution(strings, n) {
    
    /*
    sort() 함수 사용?
    */
    strings.sort(function (a,b){
        return a[n]===b[n]? a.localeCompare(b):a[n].localeCompare(b[n])
    })
    
    return strings;
}