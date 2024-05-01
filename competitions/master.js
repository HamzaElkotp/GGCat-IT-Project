// let data = [
//     {
//         competation_name: "rocket1",
//         start: 15/1/2005,
//         end: 2/2/2016,
//         winer:{
//             name1:"retage",
//             name2:"jage",
//             name3:"shahed"
//         },
//         prize:{
//             prize1:"10000$",
//             prize2:"5,000$",
//             prize3:"2,000$"
//         }
//     },
//     {
//         competation_name: "rocket2",
//         start: 15/1/2016,
//         end: 2/2/2005,
//         winer:{
//             name1:"sayed",
//             name2:"shahed",
//             name3:"jage"
//         },
//         prize:{
//             prize1:10.000,
//             prize2:5.000,
//             prize3:2.000
//         }
//     }
// ];

// function readAll() {
//     window.localStorage.setItem("ziad", JSON.stringify(data));
//     let datatable = document.getElementById("tbodyid");
//     let object = localStorage.getItem("ziad");
//     let objectdata = JSON.parse(object);
//     let element = "";
//     objectdata.forEach(ele => {
//         element +=
//             `
//             <tr>
//                 <td>${ele.Event_name}</td>
//                 <td>${ele.start}</td>
//                 <td>${ele.end}</td>
//                 <td>
//                     <ol>
//                         <li>${ele.name1}</li>
//                         <li>${ele.name2}</li>
//                         <li>${ele.name3}</li>
//                     </ol>
//                 </td>
//                 <td>
//                     <ul>
//                         <li>${ele.prize1}</li>
//                         <li>${ele.prize2}</li>
//                         <li>${ele.prize3}</li>
//                     </ul>
//                 </td>
//             </tr>
//         `;
//     });
//     datatable.innerHTML = element;
//     // console.log(element);
// }
// readAll();

let game1titel= document.getElementById("game1titel");
let game1date= document.getElementById("game1date");
let game1description= document.getElementById("game1description");
let banner1 = document.getElementById("game1img");

let game2titel= document.getElementById("game2titel");
let game2date= document.getElementById("game2date");
let game2description= document.getElementById("game2description");
let banner2 = document.getElementById("game2img");


fetch('/GGCat-IT-Project/src/API/contest.json')
.then(async(response)=>{
    let fulldata = await response.json();
    
    game1titel.textContent=`${fulldata[0].name}`;
    game1date.textContent=`${fulldata[0].date}`;
    game1description.textContent=`${fulldata[0].description}`;
    banner1.setAttribute('src', `${fulldata[0].images[0]}`);

    game2titel.textContent=`${fulldata[1].name}`;
    game2date.textContent=`${fulldata[1].date}`;
    game2description.textContent=`${fulldata[1].description}`;
    banner2.setAttribute('src', `${fulldata[1].images[0]}`);




})
