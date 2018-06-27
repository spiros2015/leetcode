//5. Longest Palindromic Substring
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length<=1) return s;
    let left=0,right=0;
    for (let i=0;i<s.length;i=i+0.5){
        let low=Math.ceil(i-1);
        let high=Math.floor(i+1);
        while(low>=0&&high<s.length){
            if(s[low]!==s[high]) break;
            low--;
            high++;
        }
        if(high-low-1>right-left){
            left = low+1;
            right = high;
        }
    }
    return s.slice(left,right);
};
