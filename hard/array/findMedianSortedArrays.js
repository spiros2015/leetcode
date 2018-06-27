//There are two sorted arrays nums1 and nums2 of size m and n respectively.
//Find the median of the two sorted arrays. The overall run time complexity should be O(log(min(m,n))).
//主要思想是划分，把两个数组划成左右元素个数相等的两边，只要保证maxLeftX<=minRightY&&maxLeftY<=minRightX就划分成功，否则二分
var findMedianSortedArrays = function(nums1, nums2) {
    let x = nums1.length;
    let y=nums2.length;
    if(x>y)
        return findMedianSortedArrays(nums2,nums1);
    
    let start = 0;
    let end = x;
    while(start<=end){
        let partitionX = Math.floor((end+start)/2);
        let partitionY = Math.floor((x+y+1)/2)-partitionX;
        let maxLeftX = partitionX===0?-Infinity:nums1[partitionX-1];
        let maxLeftY = partitionY===0?-Infinity:nums2[partitionY-1];

        let minRightX = partitionX===x?Infinity:nums1[partitionX];
        let minRightY = partitionY===y?Infinity:nums2[partitionY];
        if(maxLeftX<=minRightY&&maxLeftY<=minRightX){
            if((x+y)%2){
                return Math.max(maxLeftX,maxLeftY)
            }else{
                return (Math.max(maxLeftX,maxLeftY)+Math.min(minRightX,minRightY))/2
            }
        }else if(maxLeftX>minRightY){
            end=partitionX-1;
        }else{
            start=partitionX+1;
        }
    }
};
