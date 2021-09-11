//Falsy value :
// 1. 0
// 2. ""
// 3. undefined
// 4. NaN
// 5. null
// 6. false

// Truthy Value:
// 1. '0'
// 2. ' ' //space here
// 3. [] // array without value or with value 
// 4. {} //object without value or with value

let name = 21;
if (name || name == 0) {
    console.log("condition true");
}
else{
    console.log("condition false");
}