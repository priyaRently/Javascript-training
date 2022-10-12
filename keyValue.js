const obj = {
    key1: 'value1',
    key2: 'value2',
}
console.log('INPUT :-')
console.log(obj);

let keys = Object.keys(obj);
let values = Object.values(obj);

//console.log(keys);
//console.log(values);

/*var result = keys.reduce(function(result,field,index)
                    {
                        result[values[index]]=field; 
                        return result;
                    },{})
*/
var result = {};
for(var i=0;i<values.length;i++)
{
    result[values[i]] = keys[i];
}   
console.log('OUTPUT:-')                 
console.log(result);