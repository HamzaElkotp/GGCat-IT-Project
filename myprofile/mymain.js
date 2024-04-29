// Function to store profile data in local storage
function storeProfileData() {
    // Get form values
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var username = document.getElementById("uname").value;
    var phoneNumber = document.getElementById("phname").value;
    var email = document.getElementById("ename").value;
    var password = document.getElementById("pname").value;

    // Create profile object
    var profile = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        phoneNumber: phoneNumber,
        email: email,
        password: password
    };

    // Store profile data in local storage
    localStorage.setItem("profile", JSON.stringify(profile));
}

function loadProfileData() {
    // Check if profile data exists in local storage
    if (localStorage.getItem("profile")) {
        // Parse stored profile data
        var profile = JSON.parse(localStorage.getItem("profile"));

        // Populate form fields with stored profile data
        document.getElementById("fname").value = profile.firstName;
        document.getElementById("lname").value = profile.lastName;
        document.getElementById("uname").value = profile.username;
        document.getElementById("phname").value = profile.phoneNumber;
        document.getElementById("ename").value = profile.email;
        document.getElementById("pname").value = profile.password;
        console.log(localStorage.getItem("profile"));
    }
}

// Call loadProfileData function when the page loads
window.onload = function() {
    loadProfileData();
};

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".form1");
    if (form) {
        form.addEventListener("submit", function(event) {
            // Prevent form submission from refreshing the page
            event.preventDefault();
            
            // Store profile data in local storage
            storeProfileData();
        });
    } else {
        console.error("Form element with class 'form1' not found.");
    }
});


//rank add button
var data=[
    ['name','Fortnite frenzy challenge', ' rocket rumble tournament','fall guys showdown'],
    ['date','6/7/2023', '5/8/2023',' 10/9/2023 '] , ['scores','850 out of 999','17 out of 20','12 out of 15'],
    ['postions',`1<sup>st</sup> place` ,`3<sup>rd</sup> place` , `4<sup>th</sup> place`],
    ['levels','gold','silver','bronze']
];

document.addEventListener('DOMContentLoaded', function() {
    const table = document.querySelector('.rank3');
    const tbody=document.getElementById('tbody');
    const addButton = document.querySelector('.add');
    // Add event listener to the button
    if(table){
        addButton.addEventListener('click', function(event) {
        // Iterate through the arrays simultaneously
            event.preventDefault();
            for (let i = 0; i < data.length ; i++) {
                const getrow=document.createElement('tr');
                for(let j=0 ; j<data[i].length ; j++){
                    const newCell = document.createElement('td');
                    newCell.innerHTML=data[i][j];
                    getrow.appendChild(newCell);
                }
                tbody.appendChild(getrow);
                }
            
    });
    }
});
