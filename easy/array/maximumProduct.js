var maximumProduct = function(nums) {
      let max=Array(3);
    let min=Array(3);
    let minpos=0,maxpos=0;
    let temp;
    for(let i = 0;i<3;i++){
        max[i]=nums[0];
        maxpos =0;
        for (let j=0;j<nums.length-i;j++){
            if (nums[j]>max[i]){
                max[i]=nums[j];
                maxpos=j;
            }
        }
        temp = nums[maxpos];
        nums[maxpos]=nums[nums.length-1-i];
        nums[nums.length-1-i]= temp;
    }
    for(let i = 0;i<3;i++){
        min[i]=nums[0];
        minpos =0;
        for (let j=0;j<nums.length-i;j++){
            if (nums[j]<min[i]){
                min[i]=nums[j];
                minpos=j;
            }
        }
        temp = nums[minpos];
        nums[minpos]=nums[nums.length-1-i];
        nums[nums.length-1-i]= temp;
    }
    let a =max[0]*max[1]*max[2];
    let b =min[0]*min[1]*max[0];
    return a-b>0?a:b;
};
