// Add your code here
function submitData(name, email) {
    

    let formData = {
        name: `${name}`,
        email: `${email}`
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(json => idFinder(json.id))
    .catch(function(error) {
        console.log(error)
        document.querySelector("body").append(error.message)
      });

    function idFinder(jsonId) {
        document.querySelector("body").append(jsonId) 
    }

    // function displayError(error) {
    //     document.querySelector("body").append(error.message)
    // }


}


