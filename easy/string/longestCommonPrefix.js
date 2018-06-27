//最长公共字符串
var longestCommonPrefix = function(strs) {
    if(strs.length==0) return '';
    let ret ='';
    let flag = false;;
    for(let i=0;i<strs[0].length;i++){
        for(let j=0;j<strs.length;j++){
            if(strs[j][i]!==strs[0][i]){
                flag=true;
                break;
            }
        }
        if(flag){
            break;
        }
        ret +=strs[0][i];
    }
    return ret;
    
};
