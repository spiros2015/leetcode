let insertSort = function(nums){
    //假设第一个数已经排好序
    let temp,i=1,j;

    for (i;i<nums.length;i++){
        temp = nums[i];//取待插入的数，前面i个已经排好
        for(j=i;j>0&&nums[j-1]>temp;j--)
            nums[j]=nums[j-1]//如果带插入比最后小，后移一位
        nums[j] = temp;//把待插入数放到正确的位置
    }
    return nums;
}
console.log(insertSort([3, 1, 2, 4, 6,10,0,100,2]));
