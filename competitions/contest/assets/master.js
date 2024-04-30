let register = document.getElementById("butt")
register.onclick = function () { myfunction() };
let id = document.querySelector("[contID]").getAttribute("contID");


let contests = localStorage.getItem("contests");
if (contests == null) {
    contests = [];
}
else {
    contests = JSON.parse(contests);
    if(contests.includes(id)){
        register.textContent = "You have registered Before";
        register.setAttribute("disabled", "disabled");
    }
}

function myfunction() {
    if(!contests.includes(id)){
        contests.push(id);
        localStorage.setItem("contests", JSON.stringify(contests));
        alert("You are registered successfully to Contest");
    }
}



let banner = document.getElementById("banner");
let ctitle = document.getElementById("ctitle");
let firstmany = document.getElementById("firstmany");
let secoundmany = document.getElementById("secoundmany");
let thirdmany = document.getElementById("thirdmany");
let myfav = document.getElementById("myfav");
let pdate = document.getElementById("pdate");
let pdiscription = document.getElementById("pdiscription");


fetch('/src/API/contest.json')
.then(async (response) => {
    let fulldata = await response.json();

    // console.log(fulldata);

    let data;

    for (let i = 0; i < fulldata.length; i++) {
        if (fulldata[i].id == id) {
            data = fulldata[i];
            break;
        }
    }
    ctitle.textContent = data.name;
    banner.setAttribute('src', `${data.images[0]}`);
    firstmany.textContent = `${data.prizes["1"]}`;
    secoundmany.textContent = `${data.prizes["2"]}`;
    thirdmany.textContent = `${data.prizes["3"]}`;
    pdate.textContent = `${data.date}`;
    pdiscription.textContent = `${data.description}`;

    data.agenda.forEach(ele => {
        myfav.innerHTML +=`
            <tr>
                <td>${ele.name}</td>
                <td>${ele.start}</td>
                <td>${ele.end}</td>
                <td>${ele.status}</td>
            </tr>
        `
    });
    // console.log( data.agenda);
    // console.log(myfav);
    return response.json();
})
.catch (error => console.log(error));