var letterCombinations = function(digits) {
    if(digits.length===0) return [];
    let letters={
        '2':'abc',
        '3':'def',
        '4':'ghi',
        '5':'jkl',
        '6':'mno',
        '7':'pqrs',
        '8':'tuv',
        '9':'wxyz'
    };
    let res =[''];
    for (let digit of digits){
        let len = res.length;
        for(let i=0;i<len;i++){
            let top = res.shift();
            for(let letter of letters[digit]){
                res.push(top+letter)
            }
        }
    }
    return res;
}
