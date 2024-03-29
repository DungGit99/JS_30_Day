 // ## Array Cardio Day 2
 const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  //1
  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?

    // function
    const isAdult_function = people.some(function(person){
        const currentYear = (new Date()).getFullYear();
        if(currentYear -person.year>19){
            return true;
        }
    }) 
    // arrow function
    const isAdult = people.some(person=>(new Date()).getFullYear() - person.year>=19 );
    console.log({isAdult})
    //2
  // Array.prototype.every() // is everyone 19 or older?
    const allAdults = people.every(person=>(new Date()).getFullYear()-person.year>=19);
    console.log({allAdults});
  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423

    // function 
    const findComment_function = comments.find(function(person){
        if(person.id ===823423){
            return true;
        }
    })
    console.log(findComment_function);
    //arrow function
    const findComment = comments.find(comment =>comment.id===823423);
    console.log(findComment);
    //3
  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  const index = comments.findIndex(comment =>comment.id===823423);
//   comments.splice(index,1);
  console.log(comments.slice(0,index));
  console.log(comments.slice(index+1));
  const newComments = [
   ...comments.slice(0, index),
   ...comments.slice(index + 1)
  ];
  console.log(newComments);