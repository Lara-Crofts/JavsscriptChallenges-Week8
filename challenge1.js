// EASY
// CHALLENGE 1 

// A local gym wants to implement an "exercise of the day" program where there is a free
// class that day that promotes a certain exercise. The gym needs some backend logic to update 
// its system to reflect which exercise will be promoted that day. Write a function that will take
// as an input the name of an exercise and console log a message like Today's exercise: running


// -------------------
// define variable 'exercise' as initial start/default exercise. 
// and we call 'exerciseOfTheDay' to create a closure, and closure scope is within
// 'exerciseForTheDay' function which includes te 'exercise' variable and the inner function.
//inner function includes 'exercise' variable. 


function exerciseOfTheDay() {
    // this part is the closure scope vvv
    let exercise = "Resting"; // Default exercise, just ‘resting for the day for outer function (exerciseForTheDay)
  
    return function(newExercise) {
      if (newExercise) {
        exercise = newExercise;
      }
      console.log("Today's exercise: " + exercise);
    };
  }
  // **this part is the global scope vvv
// closure is available where inner functioon retains access to 'exercise' variable 
// 'exercise' function set to display the exercise for the day 
  const exercise = exerciseOfTheDay();
  
  console.log(exercise("Running")); // output: Today's exercise: Running

  console.log(exercise("Swimming")); // output: Today's exercise: Swimming

  console.log(exercise("Dancing")); // output: Today's exercise: Dancing

  console.log(exercise("Climbing")); // output: Today's exercise: Fencing
  

