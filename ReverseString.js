function rev(name) {
    const temp=[];
    const len=name.length - 1;

    for(let i=len;i>=0;i--)
        temp.push(name[i]);
    
    return temp.join('');    
}

console.log('Priya')
console.log(rev('Priya'))