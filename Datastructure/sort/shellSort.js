let shellSort = function (nums) {
    let len= nums.length;
    let temp;
    let j;
    for (let add=Math.floor(len/2);add>0;){
        for (let i=add;i<len;i++){
            temp=nums[i];
            for (j=i;j>=add&&nums[j-add]>temp;j-=add){
                nums[j]=nums[j-add];
            }
            nums[j]=temp;
        }
        add=Math.floor(add/2)
    }
    return nums;
};
