// import {SearchResults} from "/searchResults.js";
import { FavoriteRender } from "./favoriteRender.js";
const name_button = document.getElementById('ChangeName');

async function updateUserName(_id, name) {
    const data = JSON.stringify({ _id, name });
    const response = await fetch("/updatename", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    });
    if (!response.ok) {
    console.error(`Unable to update name`);
    } else {
    return response.json();
    }
}

async function updateUserPassword(_id, pass) {
    const data = JSON.stringify({ _id, pass });
    const response = await fetch("/updatepassword", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    });
    if (!response.ok) {
    console.error(`Unable to update password`);
    } else {
    return response.json();
    }
}

async function updateUserEmail(_id, email) {
    const data = JSON.stringify({ _id, email });
    const response = await fetch("/updatemail", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    });
    if (!response.ok) {
    console.error(`Unable to update password`);
    } else {
    return response.json();
    }
}


const email_button = document.getElementById("ChangeEmail");
if(email_button)
email_button.addEventListener("click", async () =>{
    const new_email = document.getElementById("change_email");
    let email_req = await updateUserEmail(user_information._id, new_email.value);
    if(email_req){
        new_email.value = "";
        alert('Email updated');
        return;
    }
    else{
        alert('Failed to update email');
    }
});

const pass_button = document.getElementById("ChangePass");
if(pass_button)
pass_button.addEventListener("click", async () => {
    const new_pass = document.getElementById('change_pass');
    let pass_req = await updateUserPassword(user_information._id ,new_pass.value);
    if(pass_req){
        new_pass.value = "";
        alert('Password updated');
        return;
    }
    else{
        alert('failed to update Password');
    }
});
if(name_button)
name_button.addEventListener("click", async () => {
    const new_name = document.getElementById('change_name');
    let name_req = await updateUserName(user_information._id ,new_name.value);
    if(name_req){
        new_name.value = "";
        alert('Username updated');
        return;
    }
    else{
        alert('failed to update UserName');
    }
});


// //get destinations by name returns an array of objects to be rendered

async function getFavorites(username){
    const data = JSON.stringify({username});
    const response = await fetch('/getfavoritearray', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
    return JSON.stringify(response);
}
function renderfavorites(array){
    const favPlaces = document.getElementById("favoritesLoad");
    const render = new FavoriteRender(array);
    render.render(favPlaces);
  }



// //get the array

const userbutton = document.getElementById("userprofile");

if(userbutton)
userbutton.addEventListener("click", async ()=>{
    const user = localStorage.getItem("userid");
    const arr = await getFavorites(user);
    renderfavorites(arr);
    console.log(arr);
});
// const favorite = JSON.parse(currFav);

// const favoriteSection = document.getElementById("favoritesLoad");

// console.log(favorite);

// const loadDestinations = (favorite) => {
//   const results = new SearchResults(favorite);
//   console.log(results);
//   results.render(favoriteSection);
// };

// loadDestinations(favorite);