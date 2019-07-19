// Add your code 
// Test 1 - Send Data
// In submitData, write a valid POST request to http://localhost:3000/users using fetch(). This request should include:

// The destination URL
// Headers for 'Content-Type' and 'Accept' set to 'application/json'
// A body with the name and email passed in as arguments to submitData. These should be assigned to name and email keys within an object. This object should then be stringified.
function submitData(name, email){

    let data = {
        name: `${name}`,
        email: `${email}`
    };

    let configObj = { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };



    return  fetch("http://localhost:3000/users", configObj)
        .then(response => response.json())
        .then(data => findId(data))
        .catch(function(error) {
            console.log(error.message);
            document.body.append(error.message)
        });


    function findId(data){
        document.body.append(data.id)
    }
}