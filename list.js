$(document).ready(function(){
    $.ajax({
    method: "GET",
    url:'https://www.reddit.com/r/darksouls3/.json'
    })
    .then(function(success){
        console.log(success)
    for (var i=1; i < 5; i++){
    var MYdata = success.data.children[i].data.title
    var Titlediv = document.createElement('h2')
    document.body.append(Titlediv)
    Titlediv.append(MYdata)
    var MYposts = success.data.children[i].data.selftext
    var Postdiv = document.createElement('div')
    document.body.append(Postdiv)
    Postdiv.append(MYposts)
    }
    })
});