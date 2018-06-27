/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 
 //Given two non-negative integers num1 and num2 represented as strings,
 //return the product of num1 and num2, also represented as a string.
var multiply = function(num1, num2) {
    if(num1==='0'||num2==='0')
        return '0';
    let len = num1.length+num2.length;
    let res = new Array(len);
    res.fill(0);
    
    for(let i=num1.length-1;i>=0;i--){
        for(let j=num2.length-1;j>=0;j--){
            let product=num1[i]*num2[j];
            let ret = res[i+j]*10+res[i+j+1]+product;
            if(ret>=100) res[i+j-1]+=Math.floor(ret/100);
            res[i+j]=Math.floor(ret%100/10);
            res[i+j+1]=Math.floor(ret%100%10);
        }
    }
    if(res[0]===0)
        res.shift();
    return res.join('');
    
};
