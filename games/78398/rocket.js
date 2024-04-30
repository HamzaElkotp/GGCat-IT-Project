let love = document.getElementById("love");

let myfav = localStorage.getItem("MyFavourites");
if(myfav == null){
    localStorage.setItem("MyFavourites", `[]`);
    myfav = localStorage.getItem("MyFavourites");
}

let data = JSON.parse(myfav);
if(data.includes("78398")){
    love.classList.add("added");
}


love.addEventListener('click', ()=>{
    if(!data.includes("78398")){
        data.push("78398");
        localStorage.setItem("MyFavourites", JSON.stringify(data));
    }
    alert("Added to MyFavourites Successfully");
    love.classList.add("added");
})