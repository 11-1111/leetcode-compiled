//toBe or notToBe
//javascript objects 

function expect(standard){
    let s= standard;
        return toBe(val){
            let v=val;
            if(s===v){ 
            return "Equal"
        }
    }
        return notToBe(val){
             let v=val;
            if(s!==v){ 
            return "Not Equal"
        }
    }
}

const x=expect(10);
console.log(x.toBe(10));
console.log(x.notToBe(10));
console.log(x.toBe(20));
console.log(x.notToBe(20));
