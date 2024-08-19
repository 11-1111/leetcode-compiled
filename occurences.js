const occurrences = {};  // Renamed for correct spelling
const arr = ['ivy', 'ivy', 'ivy', 'james','ivy', 'kevin'];  // Use quotes for string literals

arr.forEach(person => {
   if (occurrences[person]) {
      occurrences[person]++;
   } else {
      occurrences[person] = 1;
   }
});

const arranged = occurrences.sort((a, b)=> )
console.log(occurrences);



// 
/*const occurrences = {};  
const arr = ['ivy', 'ivy', 'ivy', 'james','ivy', 'kevin'];  

arr.forEach(person => {
   if (occurrences.person) {
      occurrences.person++;
   } else {
      occurrences.person = 1;
   }
});

console.log(occurrences);
