var romanToInt = function(s) {
    let dic={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    };
    let ret = dic[s[0]];
    
    for(let i=1;i<s.length;i++){
        if(dic[s[i]]>dic[s[i-1]]){
            ret += dic[s[i]]-2*dic[s[i-1]]
        }else{
            ret+=dic[s[i]]
        }
    }
    return ret;
};
