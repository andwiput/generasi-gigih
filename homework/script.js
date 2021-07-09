//access element button
let submitPlaylist = document.getElementById("btn-submit");

//alert pop-up when the button click
submitPlaylist.addEventListener("click", () => {
    alert("Your Playlist Have Been Saved");
});

fetch("https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json")
    .then(data => data.json())
    .then(response => {
        console.log("Title : " + response.name);
        console.log("Artist : " + response.artists[0].name);
        console.log("Album : " + response.album.name);

        document.getElementById("title").innerHTML = response.name;
        document.getElementById("artist").innerHTML = response.artists[0].name;
        document.getElementById("album").innerHTML = response.album.name;
        document.querySelector("img").src = response.album.images[0].url;
    })
    .catch((error) => alert(error))