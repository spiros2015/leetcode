var fourSum = function(nums, target) {
    let ret = [];
    //排序
    nums.sort((a,b)=>a-b);
    for(let i=0;i<=nums.length-4;i++){
        if(i>0&&nums[i]===nums[i-1]) continue;//第一个加数，重复的跳过
        for(let j=i+1;j<=nums.length-3;j++){
            if(j>i+1&&nums[j]===nums[j-1]) continue;//第二个加数，重复跳过
            let low=j+1;//第三个加数
            let high = nums.length-1;//第四个加数
            while(low<high){
                let sum = nums[i]+nums[j]+nums[low]+nums[high];
                if(sum===target){
                    ret.push([nums[i],nums[j],nums[low],nums[high]]);
                    low++;
                    high--;
                    while (low<high){
                        if(nums[high]===nums[high+1]){
                            high--;//去重
                        }else {
                            break;
                        }
                        if(nums[low]===nums[low-1]) {
                            low++;//去重
                        }else {
                            break;
                        }
                    }
                }else if(sum>target){
                    high--;
                }else{
                    low++
                }
            }
        }
    }
    return ret;
};
