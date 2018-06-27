var twoSum = function(nums, target) {
    var obj ={}
    for(let index=0;index<nums.length;index++){
        obj[nums[index]] = index;
    }
    for(let i=0;i<nums.length;i++){
        var j=obj[target-nums[i]]
        if(j&&j!==i){
            return [i,j];
        }
    }
    return [];
};
