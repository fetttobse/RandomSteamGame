document.getElementById("randomBtn").addEventListener("click", function () {
    //On Click get random Steam Game
    console.log("Button clicked");

    //Create an instance of XMLHttpRequest
    var request = new XMLHttpRequest();
    console.log("request instance created");

    request.open("GET", "http://api.steampowered.com/ISteamApps/GetAppList/v0001/");
    console.log("request opened");
    request.setRequestHeader("Origin","");
    console.log("request Header set");
    request.send();
    console.log("request sent");

    console.log(request.responseText);
});