/*
. Promise will be always called with new keyword
. Promise is a callback function that takes two parameters as input i.e resolve and reject
. resolve will get triggered when we get the desired output
. reject will get triggered when we don't get the desired output
. 
*/
function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if(success){
                resolve("Data fetched successfully")
            }else{
                reject("Error fetching Data") 
            }
        }, 3000);
    })
}

fetchData()
    .then((data =>{
        console.log(data)
        return data.toLowerCase()
    }))
    .then(value => console.log(value))
    .catch((error) => console.error(error))
// output will be resolve 

/*
.chaining asynchronus operations i.e:
    fetchData()
        .then()
        .then()
        .catch()
*/