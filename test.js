function fetchData(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            let success = false
            if(success){
                resolve("Data Fetched Successfully")
            }else{
                reject("Error fetching Data")
            }
        },3000)
    })
}
fetchData()
    .then((data) => {
    console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
