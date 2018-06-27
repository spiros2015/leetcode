//3.Longest Substring Without Repeating Characters
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxlen = 0,
        pointer = 0,
        first = 0,
        dic ={};
    for(let i=0;i<s.length;i++){
        pointer=dic[s[i]];
        if(pointer!==undefined){
            let temp = i-first;
            maxlen =maxlen<temp?temp:maxlen;
            first = pointer+1;
            i =first-1;
            dic={};
        }else {
            dic[s[i]]=i;
        }
    }
    let last = s.length-first;
    return Math.max(last,maxlen);

};
