// HARD
// CHALLENGE 3


// Inside of a closure, create an object called PII (Personally Identifiable Information)that
// cannot be accessed directly. The object should have at least two properties: name and SSN. 
// Only the name property should be accessible, and it should be called through a public function.
// The SSN property should not be accessible at all. Creating private objects and private
// properties helps you control who has access to what data and helps you prevent people who 
// shouldn't see important info like social security numbers from getting access to the data. 
// You can use 'getName' or other get methods to access data that people might need. For example, 
// people addressing a package or email may need a customer's name, but they definitely shouldn't 
// have access to their SSN.



function createPII() {
    // ...private variables... object created with 2 private variables name and SSN
    var PII = {
      name: "Jenna",
      ssn: "453-28-6759"
    };
  
    // public method to access the name property
    function getName() {
      return PII.name;
    }
  
    // public method to access the SSN property ***but will return 'undefined'
    function getSSN() {
      return undefined;
    }
  
    // Return an object with public methods
    //getName method used .. 
    return {
      getName: getName,
      getSSN: getSSN
    };
  }
  
  var patient = createPII();
  
  // Outputs
  console.log(patient.name);  // Output: undefined

  console.log(patient.ssn);    // Output: undefined

  console.log(patient.getName());  // Output: Jenna

  console.log(patient.getSSN());   // Output: undefined
  
  

  
  
  