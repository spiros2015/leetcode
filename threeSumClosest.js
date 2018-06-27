var threeSumClosest = function(nums, target) {
    let distance = Math.abs(target-nums[0]-nums[1]-nums[2]);//距离  初始为前三个数减去target
    let res = nums[0]+nums[1]+nums[2];//结果，初始为前三个数
    nums.sort((a,b)=>a-b);//排序
    for(let i=0;i<=nums.length-3;i++){
        if(i>0&&nums[i]===nums[i-1]) continue;//第一个加速，去重
        let low = i+1;//第二个加数
        let high = nums.length-1;//第三个加数
        while(low<high){
            let sum = nums[i]+nums[low]+nums[high];
            let ret = sum-target;
            if(ret===0){
                return target;//距离为0；返回target
            }else if(ret>0){//和大于target,high--
                if(distance>ret){
                    distance = ret;
                    res = sum;
                }
                high--;
            }else{//和小于target,low++
                if(distance>-ret){
                    distance = -ret;
                    res = sum;
                }
                low++;
            }
        }
    }
    return res
};
