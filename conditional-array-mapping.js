function returnWhen(arr,fn){
    const filteredArr=[];

for(i=0 ; i<arr.length ;i++){
   if(fn(arr[i],i)) {
    filteredArr.push(arr[i])
   }

}
return filteredArr;
}


let array = [0,10,20,30];

function greaterThan10(n)
{
return n>10; ////if true returns true
}

console.log(greaterThan10(20));

console.log(returnWhen(array,greaterThan10));