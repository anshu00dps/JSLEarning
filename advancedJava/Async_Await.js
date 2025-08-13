function fetchData() {
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve({name:"Ashwani", url:"https://google.com"})
        },3000);
    })
}

async function getUserData(){
    try{
        console.log('Fetching User Data')
        const userData = await fetchData()
        console.log("User Data: ", userData);
    } catch(error){
        console.log("Error fetching Data", error);
    }
}

getUserData();