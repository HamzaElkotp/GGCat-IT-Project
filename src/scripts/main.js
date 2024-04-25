let blockAccess = ['myprofile', 'admin'];

async function checkLoging(){
    let loginCredentials = window.sessionStorage.getItem('loginCredentials');
    let status = await JSON.parse(loginCredentials);
    if(status != true){
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
    // document.getElementById('sdsds').addEventListener('click', ()=>{
    //     console.log(1)
    // })
}

(function navBarLoader(){
    let nav = document.querySelector('#header');
    navBarActivator();
    nav?.innerHTML += 
    `
        

    `;

}());

(function footerLoader(){
    let footer = document.querySelector('#footer');
    footer?.innerHTML += 
    `
        

    `;
}());