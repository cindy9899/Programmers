/*
채팅방의 관리자 창을 만들기로 했다.
들어오면=> "[닉네임]님이 들어왔습니다."
나가면=> "[닉네임]님이 나갔습니다."
닉네임 변경시에 기존에 채팅방에 출력되어 있던 메시지의 닉네임도 전부 변경된다.

<제한사항>
1. record는 다음과 같은 문자열이 담긴 배열이며, 길이는 1 이상 100,000 이하이다.
2. 다음은 record에 담긴 문자열에 대한 설명이다.
- 모든 유저는 [유저 아이디]로 구분한다.
- [유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장 : "Enter [유저 아이디[] [닉네임]"
- [유저 아이디] 사용자가 채팅방에서 퇴장 : "Leave [유저 아이디]"
- [유저 아이디] 사용자가 닉네임을 [닉네임]으로 변경 : "Change [유저 아이디] [닉네임]"
- 첫 단어는 Enter, Leave, Change 중 하나이다.
- 각 단어는 공백으로 구분되어 있으며, 알파벳 대문자, 소문자, 숫자로만 이루어져있다.
- 유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
- 유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
- 채팅방에서 나간 유저가 닉네임을 변경하는 등 잘못된 입력은 주어지지 않는다.

record
["Enter uid1234 Muzi",
 "Enter uid4567 Prodo",
 "Leave uid1234",
 "Enter uid1234 Prodo",
 "Change uid4567 Ryan"]
result=>
["Prodo님이 들어왔습니다.",
 "Ryan님이 들어왔습니다.",
 "Prodo님이 나갔습니다.",
 "Prodo님이 들어왔습니다."]
*/

function solution(record) {
    var answer = [];
    var userIdDic={}
    record.map(records=>{
        if(records.split(" ")[0]!='Leave'){
            let userId=records.split(" ")[1]
            let userName=records.split(" ")[2]
            userIdDic[userId]=userName
        }
    })
    record.map(records=>{
        switch(records.split(" ")[0]){
            case 'Enter':
                answer.push(userIdDic[records.split(" ")[1]]+"님이 들어왔습니다.")
                break;
            case 'Leave':
                answer.push(userIdDic[records.split(" ")[1]]+"님이 나갔습니다.")
                break;
        }
    })
    return answer;
}