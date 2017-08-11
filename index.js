
document.addEventListener("DOMContentLoaded", function(event) { 
    var name = ["Eve", "Richard", "漢字"];
    var name = name[Math.floor(Math.random() * name.length)];
    setAvatar(name);
});



function setAvatar(name) {
    var colors = ['#a3a948', '#edb92e', '#f85931', '#ce1836', '#009989'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    var getName = "<span id='letter-avatar' class='textavatar round'>" + name.toUpperCase().charAt(0) + "<span>";
    var div = document.getElementById('avatar');

    div.innerHTML = '';
    div.innerHTML += getName;
    document.getElementById('letter-avatar').style.backgroundColor = random_color;
}