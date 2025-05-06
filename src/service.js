let getData = async function(){
    let data = []
    try{
        let response = await fetch("../data.js")
        if(!response.ok){
            throw new Error("Data-da problem var")
        }
        data = await response.json();
        return data
    }
    catch(error){
        console.error(`error message: ${error}`)
    }
}

export default getData