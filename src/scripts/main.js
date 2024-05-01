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


let theme = localStorage.getItem('theme') || "";


function lightThemeActivator(){
    let linkNodes = [...document.getElementsByTagName('link')];
    linkNodes.forEach((ele)=>{
        if(ele.getAttribute("href").includes('epicTheme')){
            let path = ele.getAttribute("href");
            path = path.replace('epicTheme', 'totoTheme');
            ele.setAttribute("href", path);
        }
    })
    localStorage.setItem('theme', 'light');
}
function darkThemeActivator(){
    let linkNodes = [...document.getElementsByTagName('link')];
    linkNodes.forEach((ele)=>{
        if(ele.getAttribute("href").includes('totoTheme')){
            let path = ele.getAttribute("href");
            path = path.replace('totoTheme', 'epicTheme');
            ele.setAttribute("href", path);
        }
    })
    localStorage.setItem('theme', 'dark');
}


function navBarActivator(){
    document.getElementById('sun').addEventListener('click', ()=>{
        document.getElementById('moon').classList.remove('hide');
        document.getElementById('sun').classList.add('hide');
        lightThemeActivator();
    })
    document.getElementById('moon').addEventListener('click', ()=>{
        document.getElementById('sun').classList.remove('hide');
        document.getElementById('moon').classList.add('hide');
        darkThemeActivator();
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
    if(nav){
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
                        <i class="far fa-sun hide" id="sun"></i>
                        <i class="far fa-moon" id="moon"></i>
                    </span>
                </div>
            </div>
        `;
        navBarActivator();
    }
}());

if(theme == "light"){
    lightThemeActivator();
    document.getElementById('sun')?.classList.add('hide');
    document.getElementById('moon')?.classList.remove('hide');
} else{
    document.getElementById('sun')?.classList.remove('hide');
    document.getElementById('moon')?.classList.add('hide');
}



(function footerLoader(){
    let footer = document.querySelector('#footer');
    let date = new Date();
    let year = date.getFullYear();

    if(footer){
        footer.innerHTML += 
        `
            <div class="p-20 footer">
                <p>All rights Are Reversed ${year}</p>
            </div>
        `;
    }
}());