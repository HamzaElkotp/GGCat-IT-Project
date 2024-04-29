document.getElementById("butt").onclick = function () { myfunction() };
let id = document.querySelector("[contID]").getAttribute("contID");

function myfunction() {
    let contests = localStorage.getItem("contests");
    // check if it is empty or null
    // if null create newone
    // if not null, so you have array push to array
    // push array to localstorage
    if (contests == null) {
        contests = [];
    } else {
        contests = JSON.parse(contests);
    }
    contests.push(id);
    localStorage.setItem("contests", JSON.stringify(contests));
    alert("You are registered successfully to Contest");
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

    console.log(fulldata);

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
    console.log( data.agenda);
    // console.log(myfav);
    return response.json();
})
.catch (error => console.log(error));