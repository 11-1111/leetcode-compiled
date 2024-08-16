//thisNumber(10).isEqual(10)


function thisNumber (num){
    let x=num;

    return{


        isEqual : function(input){
            if(x===input){
                return "Equal";
            }   
            else{
                return "Not Equal";
            }
        },


        isNotEqual :function(input){
            if(x!==input){
                return "Not Equal";
            }   
            else{
                return "Equal";
            }
        }
    }

}

console.log(thisNumber(10).isEqual(10));

// const  check = thisNumber(10);
// console.log(check.isEqual(10));
// console.log(check.isEqual(20));
// console.log(check.isNotEqual(10));
// console.log(check.isNotEqual(20));
