//寻找第k小
let quickSort= function(nums,l,r,k){
    let low =l,high=r;
    if(l>r)
        return;
    let pivot = r-l>=2?selectPivot(nums,l,r):nums[l];
    while (low<high){
        while (low<high&&nums[high]>=pivot){
            high--;
        }
        nums[low]=nums[high];
        while (low<high&&nums[low]<=pivot){
            low++
        }
        nums[high]=nums[low];
    }
    nums[low]=pivot;
    console.log(nums,low,k);
    if(low+1===k){
        return nums[low];
    }else if(low+1>k){
        return quickSort(nums,l,low-1,k)
    }else {
        return quickSort(nums,low+1,r,k);
    }
};
let selectPivot = function(nums,l,r){
  let low = l;
  let high = r;
  let mid = Math.floor((r-l)/2);
  if(nums[low]>nums[mid]) swap(nums,low,mid);
  if(nums[mid]>nums[high]) swap(nums,mid,high);
  if(nums[low]<nums[mid]) swap(nums,low,mid);
  return nums[l];
};
let swap = function (nums,i,j) {
    let t=nums[i];
    nums[i]=nums[j];
    nums[j]=t;
}
//寻找前k小，heap.js小顶堆
let topk = function (nums,k) {
    buildHeap(nums);
    let res =[];
    let i=0;
    while (i<k){
        res.push(deleteMin(nums));
        i++
    }
    return res;
};
