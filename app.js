// ls-array; k-number of chunks; t-target value 
function chunkArray(ls, k, t) {
    let outputArr = [];
    for (let i = 0; i < ls.length; i += k) {
       outputArr.push(ls.slice(i, k + i));
    }
    return  outputArr;
   }




