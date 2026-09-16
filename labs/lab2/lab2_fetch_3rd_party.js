/**
Purpose:
Fetch from a third party API and print out the result
 */
fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) =>{
        return response.json()
    })
    .then((dataJSON) =>{
        console.log(dataJSON)
    })
    .catch((error) =>{
        console.log(error)
    })