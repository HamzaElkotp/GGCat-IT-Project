function redirect(){
    let url = new URL(window.location);
    let forward = url.searchParams.entries().next();
    if(forward?.value){
        window.location = forward.value[1];
    } else{
        let data = JSON.parse(window.sessionStorage.getItem('loginCredentials'));
        if(data.type == "Admin"){
            window.location = `/admin`
        } else{
            window.location = `/myprofile`
        }
    }
}


// Taps System
let tapheads = document.querySelectorAll('[taphead]');
tapheads.forEach((tapbox)=>{
    tapbox.addEventListener('click', ()=>{
        tapheads.forEach((other)=>{
            other.classList.add('outline');
            document.querySelector(`[tap="${other.getAttribute("taphead")}"]`).classList.add('hide');
        })
        tapbox.classList.remove('outline');
        document.querySelector(`[tap="${tapbox.getAttribute("taphead")}"]`).classList.remove('hide');
    })
})


// Login System
let loginBtn = document.querySelector('[role="login"]');
let logingwarning = document.querySelector('#logingwarning');
let login_username = document.querySelector('#login_username');
let login_password = document.querySelector('#login_password');
let login_type = document.querySelector('input[name="role"]:checked');
loginBtn.addEventListener('click', async (e)=>{
    e.preventDefault();

    let usrname = login_username.value;
    let psswd = login_password.value;
    
    if(usrname.length > 0 && psswd.length > 0){
        let loginData = await JSON.parse(window.localStorage.getItem('userdata'));
        if(loginData != null && loginData["username"] && loginData["password"]){
            if(loginData["username"] == usrname && loginData["password"] == psswd){

                window.sessionStorage.setItem('loginCredentials', JSON.stringify({
                    loging: true,
                    type: login_type.value
                }));
                redirect();

            } else{
                logingwarning.textContent = "Wrong login data!";
                alert("Wrong login data!");
            }
        } else{
            logingwarning.textContent = "This account doesn't exists!";
            alert("This account doesn't exists!");
        }
    } else{
        logingwarning.textContent = "Please, Enter all required data!";
        alert("Please, Enter all required data!");
    }
})


// Register System
let joinBtn = document.querySelector('[role="join"]');
let joingwarning = document.querySelector('#joingwarning');
let join_email = document.querySelector('#join_email');
let join_username = document.querySelector('#join_username');
let join_password = document.querySelector('#join_password');
let agree = document.querySelector('[name="agree"]');
joinBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    let userData = {
        email: join_email.value,
        username: join_username.value,
        password: join_password.value,
    }

    if(userData.username.length > 0 && userData.password.length > 0 && userData.email.length > 0){
        if(agree.checked){
            if(userData.email.includes("@",".")){
                window.localStorage.setItem('userdata', JSON.stringify(userData));
                window.sessionStorage.setItem('loginCredentials', JSON.stringify({
                    loging: true,
                    type: "Gamer"
                }));
                redirect()
            } else{
                joingwarning.textContent = "Please, Enter valid email address";
                alert("Please, Enter valid email address");
            }
        } else{
            joingwarning.textContent = "Please, Agree Terms of Use";
            alert("Please, Agree Terms of Use");
        }
    } else{
        joingwarning.textContent = "Please, Enter all required data!";
        alert("Please, Enter all required data!");
    }
})


let termsOfUse = document.getElementById("termsOfUse");
let terms = document.getElementById("terms");
termsOfUse.addEventListener('click', ()=>{
    terms.classList.add('show')
})