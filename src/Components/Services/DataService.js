let userData = {}; 



async function login(loginUser){

    const res = await fetch('https://codewarsreservation.azurewebsites.net/User/AddUser', {
        method: "no-cors",
        headers: {

            'Content-Type': "application/json"
            },
        body: JSON.stringify(loginUser)
});
if(!res.ok){


    const message = `An Erros has Occured ${res.status}`;
    throw new Error (message);
}

let data = await res.json();
console.log(data);

}

async function GetLoggedInUserData(userName){
    let res = await fetch (`https://codewarsreservation.azurewebsites.net/User/userbyusername/${userName}`)
    let data = await res.json();
    userData = data;
    console.log(userData);

    return userData;
}