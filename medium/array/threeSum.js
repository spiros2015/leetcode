var threeSum = function(nums) {
    let ret=[];
    nums=nums.sort((a,b)=>a-b);

    for(let i=0;i<=nums.length-3;i++){
        if(nums[i]>0) break;
        if (i===0||nums[i]!==nums[i-1]){
            let low =i+1;
            let high = nums.length-1;
            while (low<high){
                let sum= nums[i]+nums[low]+nums[high];
                if(sum===0){
                    ret.push([nums[i],nums[low],nums[high]]);
                    low++;
                    high--;
                    while (low<high){
                        if(nums[high]===nums[high+1]){
                            high--;
                        }else {
                            break;
                        }
                        if(nums[low]===nums[low-1]) {
                            low++;
                        }else {
                            break;
                        }
                    }
                }else if(sum>0){
                    high--;

                }else {
                    low++;
                }
            }
        }
    }
    return ret;

};
