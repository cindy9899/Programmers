/*
트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다.
다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며,
다리는 weight 이하까지의 무게를 견딜 수 있습니다.
모든 트럭이 다리를 건너려면 최소 몇초가 걸리는지 반환하시오.

<제한 사항>
1. bridge_length는 1 이상 10,000 이하입니다.
2. weight는 1 이상 10,000 이하입니다.
3. truck_weights의 길이는 1 이상 10,000 이하입니다.
4. 모든 트럭의 무게느 1 이상 weight 이하입니다.

bridge_length 2
weight 10
truck_weights [7, 4, 5, 6]
return => 8
*/

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var onBridge=[]
    var onBridgeWeight=0;
    while(truck_weights.length>0){
        answer++;
        if(onBridge.length==bridge_length){
            onBridgeWeight=onBridgeWeight-onBridge.shift()
        }
        if(onBridgeWeight+truck_weights[0]>weight){
            onBridge.push(0)
            continue;
        }
        let nowTruck=truck_weights.shift()
        onBridge.push(nowTruck)
        onBridgeWeight+=nowTruck
    }
    return answer+bridge_length;
}