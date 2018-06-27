//17. Letter Combinations of a Phone Number
/**
 * @param {string} digits
 * @return {string[]}
 */
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

//递归
// var letterCombinations = function(digits) {
//     let letters={
//         '2':'abc',
//         '3':'def',
//         '4':'ghi',
//         '5':'jkl',
//         '6':'mno',
//         '7':'pqrs',
//         '8':'tuv',
//         '9':'wxyz'
//     };
//     let ret = [];
//     for(let letter of digits){
//         ret.push(letters[letter])
//     }
//     return binaryCombination(ret,0,digits.length);
// };

// function binaryCombination(ret,low,high){
//     let len = high-low;
//     let res=[];
//     if(len===1){
//         return [...ret[low]];
//     }
//     if(len===0)
//         return [];
//     len = Math.floor(len/2);
//     let ra =binaryCombination(ret,low,len+low);
//     let rb =binaryCombination(ret,len+low,high);
//     for(let a of ra){
//         for(let b of rb){
//             res.push(a+b);
//         }
//     }
//     return res;

// }
