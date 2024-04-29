// window.localStorage.setItem('myfeedbacks', JSON.stringify(
//     [
//         {
//             id:1,
//             gamename:"Rocket League",
//             rate:8.9,
//             desc: "This is a very good game, with goods controls i really enjoed playing it with my frieds, I also liked the new cars and goal effects."
//         },
//         {
//             id:2,
//             gamename:"Fortnite",
//             rate:9.6,
//             desc: "Best game I have ever played, It is alittle bit hard but it's okay that what makes the games competitve and intersting."
//         },
//         {
//             id: 3,
//             gamename:"Fall Guys",
//             rate:9.0,
//             desc: "FUNNYYYYYYYYYYYY, I really enjoed it, and I laughed alot while playing it espically with my friends I hope u keep adding new maps and i think the waiting time for matchmaking needs to be reduced."
//         }
//     ]
// ));



let feeds = document.querySelector('.feeds');

var storedData = localStorage.getItem('myfeedbacks');

var reviews = JSON.parse(storedData);

function readData(){
    feeds.innerHTML = '';
    reviews.forEach(function(review) {
        feeds.innerHTML += `
            <div class="feed_box p-20 br-30" id="${review.id}">
                <div class="info">
                    <h4>${review.gamename}</h4>
                    <h4>${review.rate}/10&#11088;</h4>
                </div>
                <div class="review">
                    <p>${review.desc}</p>
                </div>
                <div>
                    <button class="btn-success btn-se-md" onclick="openPopup(this)" num="${review.id}">Edit</button>
                    <button class="btn-del btn-se-md" onclick="deleteFeed(this)" num="${review.id}">Delete</button>
                </div>
            </div>
        `;
    });
}
readData();

let popup = document.getElementById("popup");
let overlay = document.getElementById("overlay");

let m_id = 0;

function openPopup(e){
    m_id = e.getAttribute('num');
    popup.classList.add("open-popup");
    overlay.classList.add("overlay-active");
}

function cancelPopup(){
    popup.classList.remove("open-popup");
    overlay.classList.remove("overlay-active");
}

function deleteFeed(e) {
    m_id = e.getAttribute('num');
    //find index
    let indexToDelete = reviews.findIndex(function(review) {
        return review.id == m_id;
    });

    
    //remove the review from the array
    reviews.splice(indexToDelete, 1);
    //update the local storage
    localStorage.setItem('myfeedbacks', JSON.stringify(reviews));
    //remove div from feeds
    let feedToRemove = document.getElementById(m_id);
    feedToRemove.parentNode.removeChild(feedToRemove);
}


function savePopup() {
    // get values
    var selectedGame = document.getElementById("games").value;
    var rating = document.querySelector('.feed_popup_info input[type="number"]').value;
    var description = document.querySelector('textarea[name="popup_review"]').value;

    var indexToUpdate = m_id;
    indexToUpdate--;
    
    reviews[indexToUpdate].gamename = selectedGame;
    reviews[indexToUpdate].rate = parseFloat(rating);
    reviews[indexToUpdate].desc = description;

    console.log("Updated review:", m_id);

    //update local storgae
    localStorage.setItem('myfeedbacks', JSON.stringify(reviews));
    
    cancelPopup();
    readData();
}