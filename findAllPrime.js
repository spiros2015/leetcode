let findAllPrime = function (num) {
    let res = [2];
    let i=3;
    let isprime = true;
    while (i<=num){
        for(let j of res){
            if(i%j===0) {
                isprime=false;
                break;
            }
        }
        isprime&&res.push(i);
        i=i+2;
        isprime = true;
    }
    return res.reduce((a,b,)=>a+b);
}
