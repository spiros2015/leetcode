let swap = function (nums,i,j) {
    let t=nums[i];
    nums[i]=nums[j];
    nums[j]=t;
}

let buildHeap = function (nums) {
    if (nums.length<=1) return nums;
    let len=nums.length;
    nums.unshift(-Infinity);
    let i=Math.floor(len/2);
    while (i>0) {
        for (let j = i; j * 2 <= len; ) {
            let child = 2 * j;
            if (2 * j === len) {
                nums[j] > nums[child]&&swap(nums,j,child);
                break;
            }
            if (nums[j] <= nums[child] && nums[j] <= nums[child+1]) {
                break;
            }
            if(nums[child]>nums[child+1]){
                child++;
            }

            swap(nums,j,child)
            j=child;
        }
        i--;
    }
};
let deleteMin=function(nums){
  if(nums.length===1)
      return;
  let len=nums.length-1;
  let min = nums[1];
  let lastElement= nums[len];
  let i =1;
  for (;i<=len;){
      let child=2*i;
      if(child===len){
          nums[i]=nums[i]>nums[child]?nums[child]:nums[i];
          break;
      }
      if(nums[child]>nums[child+1])
          child++;
      nums[i]=nums[i]>nums[child]?nums[child]:nums[i];
      i=child;
  }
  nums[i]=lastElement;
  nums.pop();
  return min;
};

let insert= function(nums,ele){
    nums.push(ele);
    let len=nums.length-1;
    while (nums[Math.floor(len/2)]>ele){
        nums[len]=nums[Math.floor(len/2)];
        len = Math.floor(len/2);
    }
    nums[len]=ele;
    return nums;
};
