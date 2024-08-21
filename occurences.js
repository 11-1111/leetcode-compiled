const occurrences = {};  // Renamed for correct spelling
const arr = ['mary', 'ivy', 'ivy', 'james','ivy', 'kevin'];  // Use quotes for string literals

arr.forEach(person => {
   if (occurrences[person]) {
      occurrences[person]++;
   } else {
      occurrences[person] = 1;
   }
   
});

