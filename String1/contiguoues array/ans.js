var findMaxLength = function(nums) {
    let res = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, -1);

    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] === 0){
            sum -= 1;
        }else{
            sum += 1;
        }
        if(map.has(sum)){
            let len = i - map.get(sum);
            res = Math.max(res, len);
        }else{
            map.set(sum , i);
        }
    }
    return res;
};