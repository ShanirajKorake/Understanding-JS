const reqURL = "https://api.github.com/users/theprogrammerlucie"
const xhr = new XMLHttpRequest();
xhr.open('GET', reqURL)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText);
        document.getElementById("name").innerHTML = data.name
        document.getElementById("login").innerHTML = `@${data.login.toLocaleLowerCase()}`
        document.getElementById("fcount").innerHTML = data.followers
        document.getElementById("pfimg").setAttribute("src", data.avatar_url)
        document.querySelector("#link").setAttribute("href", data.html_url)
    }
}
xhr.send();
