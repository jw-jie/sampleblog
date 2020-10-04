let apiUrlUsers ='https://jsonplaceholder.typicode.com/users';

async function login(e) {
    e.preventDefault()
    try {
        const response = await fetch(apiUrlUsers);
        const data = await response.json();
        
        data.map(element =>{
           if(email.value.toLowerCase() === element.email.toLowerCase()){

            //put to local storage
            localStorage.setItem('USER_ID', element.id);

            window.location.replace("account.html");
            
           } else{
           console.log("Error: please check the sample generated email below to login")
           document.querySelector(".blog101").textContent="ERROR: check sample email below to log in"

           }
        })
        
    } catch (error){
   console.log(error)
    }
}





