/**
 Purpose:
 Create a new promise -API devloper side 
 Fetch that promise- Web devloper side 
 -async desfinition of the function that contains the fetch
 - await in front of the fetch
 */

 //------------------API devloper side-------------------
async function fetch_weather(){
    const promise_weather = new Promise((resolve, reject) => {
        let isPaidMember = true 
        if(isPaidMember){
            setTimeout(() => {
                const weatherJSON = { monday: "sunny", tuesday: "rainy" }
                let weatherJSONStr = JSON.stringify(weatherJSON)
                resolve(weatherJSONStr)
            }, 2000)
        } else {
            reject("You must be a paid member to access")
        }
    })
let result = await promise_weather
console.log(result)

}
fetch_weather()

