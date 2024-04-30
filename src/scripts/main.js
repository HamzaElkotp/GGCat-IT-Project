let blockAccess = ['myprofile', 'admin'];

async function checkLoging(){
    let loginCredentials = window.sessionStorage.getItem('loginCredentials');
    let status = await JSON.parse(loginCredentials);
    if(status.loging != true){
        return 1;
    }
    return 0;
}
function redirectToLoggin(status){
    if(status){
        window.location = `/auth/?redirect=${window.location.pathname}`;
    }
    return 0;
}





const composer = function(...functions) {
    return async function(...value) {
        let result = value;
        for (const func of functions) {
            result = await func(result);
        }
    }
}

const secureApp = composer(checkLoging, redirectToLoggin);

(function checkBlockAccess(){
    let currentPath = window.location.pathname.split('/')[1];
    blockAccess.forEach(path => {
        if(path == currentPath){
            secureApp();
        }
    })
}());




function themeActivator(){

}

function navBarActivator(){
    document.getElementById('sun').addEventListener('click', ()=>{
        document.getElementById('moon').classList.add('hide');
        document.getElementById('sun').classList.remove('hide');
    })
    document.getElementById('moon').addEventListener('click', ()=>{
        document.getElementById('sun').classList.add('hide');
        document.getElementById('moon').classList.remove('hide');
    })

    let login = sessionStorage.getItem('loginCredentials');
    let data = JSON.parse(login);

    if(data != null){
        if(data.loging){
            document.getElementById('auth').remove();
            if(data.type == "Admin"){
                document.getElementById('dashboard').setAttribute('href', '/admin');
            } else{
                document.getElementById('dashboard').setAttribute('href', '/myprofile');
            }
        } else{
            document.getElementById('dashboard').remove();
        }
    } else{
        document.getElementById('dashboard').remove();
    }
}

(function navBarLoader(){
    let nav = document.querySelector('#header');
    nav.innerHTML += 
    `
    <div class="header">
        <span href="#default" class="logo"><span class="gg">GG</span>Cat</span>
        <div class="header-right">
            <span class="allLinks">
                <a href="/"><i class="fas fa-home"></i> Home</a>
                <a href="/rank"><i class="fas fa-trophy"></i> Ranks</a>
                <a href="/competitions/"><i class="fas fa-trophy"></i> Contests</a>
                <a href="/auth" id="auth"><i class="fas fa-medal"></i> Login/Join</a>
                <a href="/" id="dashboard" class="active"><i class="fas fa-columns"></i> Dashboard</a>
            </span>
            <span class="themeChoose">
                <i class="far fa-sun" id="sun"></i>
                <i class="far fa-moon" id="moon"></i>
            </span>
        </div>
    </div>
    `;
    navBarActivator();
}());

// (function footerLoader(){
//     let footer = document.querySelector('#footer');
//     footer?.innerHTML += 
//     `
        

//     `;
// }());