//JSON data
var jsonData = {
    "category": "Online, Battle Royale",
    "gamers": 9432,
    "reviews": {
        "gameplay": 8.3,
        "sounds": 5.6,
        "community": 9.5
    }
};

// Function to create and populate tables from JSON data
document.addEventListener("DOMContentLoaded", function() {
    populateTables(jsonData);
    });
function populateTables(data) {
    let dataDiv = document.getElementById("data");
    console.log(dataDiv); // Check if dataDiv is null
    if (dataDiv) {
    // Create the first table for category and gamers
        let table1 = document.createElement("table");

        let tr1 = document.createElement("tr");
        let th1 = document.createElement("th");
        th1.textContent = "Category";
        tr1.appendChild(th1);

        let th2 = document.createElement("th");
        th2.textContent = "Gamers";
        tr1.appendChild(th2);

        table1.appendChild(tr1);

        let tr2 = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = data.category;
        tr2.appendChild(td1);

        let td2 = document.createElement("td");
        td2.textContent = data.gamers;
        tr2.appendChild(td2);

        table1.appendChild(tr2);

    // Create the second table for reviews
        let table2 = document.createElement("table");

        let tr3 = document.createElement("tr");
        let th3 = document.createElement("th");
        th3.textContent = "Data";
        tr3.appendChild(th3);

        let th4 = document.createElement("th");
        th4.textContent = "Review";
        tr3.appendChild(th4);

        table2.appendChild(tr3);

        for (let key in data.reviews) {
            let tr = document.createElement("tr");
            let tdKey = document.createElement("td");
            tdKey.textContent = key;
            tr.appendChild(tdKey);
            let tdValue = document.createElement("td");
            tdValue.textContent = data.reviews[key];
            tr.appendChild(tdValue);
            table2.appendChild(tr);
        }
    // Append tables to the data 
        dataDiv.appendChild(table1);
        dataDiv.appendChild(table2);
    } 
    else {
        console.error("Element with id 'data' not found");
    }
    }


    //function for attach fortnite game to favourite 
function  favourite(fortnite) {
    
}