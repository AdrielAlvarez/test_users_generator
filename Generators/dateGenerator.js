function dateGenerator( min, max){
    const randomDay =Math.floor(Math.random() * 30 + 1);
    const randomMonth =  Math.floor(Math.random() * 12 + 1);
    const randomYear=(start, end)=> Math.floor(Math.random() * (end - start) + start)
    return randomMonth+"/"+randomDay+"/"+randomYear(min,max);
}
// module.exports = dateGenerator