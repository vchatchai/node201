const db = {  
    getFullName:Promise.resolve("Jack Spratt"),
    getAddress:Promise.resolve("10 Clean street"),
    getFavorites:Promise.resolve("Lean")
}

async function profile(){
    let fullname =   db.getFullName
    let address =   db.getAddress
    let favorites =   db.getFavorites

    let result = {fullname, address, favorites};
    console.log("result",result)
    return result
}

profile().then(res => console.log(res))
console.log("done.")