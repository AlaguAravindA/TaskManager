
let data1;
async function fetchdata(){
    try{

        var data = await fetch("./user.json");
        data1 = await data.json();
        // console.log(data1);
        return data1;
    }
    catch(error){
        console.log(error);
    }
    // console.log(data1);
}


async function login(Username,pass){
    const users =  await fetchdata();
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let user = users.find( data => data.email === Username && data.password === pass )
            if(user){
                resolve(user);
            }
            else{
                reject(new Error("invalid UserName or Password"));
            }

        },1000)
    })

}

document.querySelector("#login").addEventListener("click",async (e)=>{
    e.preventDefault();
    try{

        const user = (document.querySelector("#name").value);
        const pass = (document.querySelector("#pass").value);
        await login(user,pass);
        window.location.href = "https://alaguaravinda.github.io/TaskManager/jslearn/";
    }catch(error){
        console.log(error.message)
        
        document.querySelector("#error").style.display="block"


        setTimeout(() => {
            document.querySelector("#error").style.display="none"
        }, 5000);
    }

})

// var data1;

// async function fetchdata() {
//     try {
//         var response = await fetch("./user.json");
//         var data = await response.json();
//         console.log(data);
//         data1 = data;
//         console.log(data1); // This will log the data after it has been fetched
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// fetchdata();
