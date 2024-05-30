//Create a function that will capitalize the first letter of each word in a text
   
         function capitalize(words){
          const newSenctence=words.split(" ");
          const sentence=newSenctence.map( word =>{
            return word.charAt(0).toUpperCase()+word.slice(1);
          });
          return sentence.join(" ");
         }

         console.log(capitalize("this is javascript here"));