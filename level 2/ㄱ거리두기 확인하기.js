/*
대기실은 5개이며, 각 대기실은 5x5 크기입니다.
거리두기를 위하여 응시자들끼리는 맨해튼 거리가 2 이하로 앉지 않는다.
단 응시자가 앉아있는 자리 사이가 파티션으로 막혀있을 경우에는 허용한다.
응시자(P) / 빈 테이블(O) / 파티션(X)

각 대기실 별로 거리두기를 지키고 있으면 1, 한 명이라도 지키지 않고 있으면 0을 배열에 담아 return

<제한 사항>
1. places의 행 길이(대기실 개수) = 5
    places의 각 행은 하나의 대기실 구조를 나타낸다.
2. places의 열 길이(대기실 세로 길이) = 5
3. places의 원소는 P, O, X로 이루어진 문자열
    places 원소의 길이(대기실 가로 길이) = 5
4. 입력으로 주어지는 5개 대기실의 크기는 모두 5x5 입니다.
5. return 값 형식
    - 1차원 정수 배열에 5개의 원소를 담아서 return
    - places에 담겨 있는 대기실의 순서대로, 거리두기 준수 여부를 차례대로 배열에
    - 각 대기실 별로 모든 응시자가 거리두기를 지키고있으면 1, 아니면 0

places
[["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]
return => [1, 0, 1, 1, 1]
*/

