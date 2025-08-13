function fetchData (){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Name: Ashwani")
        },3000)
    })
}

function commentData (){
    return new Promise( reject =>{
        setTimeout(()=>{
            reject("Can't find coment")
        },2000)
    })
}

async function dataCollector(){
    try{
        const[fetchData, commentData] = await Promise.all([
            fetchData(),
            commentData()
        ]);
        console.log(fetchData);
        console.log(commentData);

    }catch(error){
        console.log("Error found")
    }
}

dataCollector();