$(document).ready(function(){
    $.ajax({
    method: "GET",
    url:'https://www.reddit.com/r/darksouls3/.json'
    })
    .then(function(success){
        console.log(success)
    for (var i=0; i < 10; i++){
    var MYdata = success.data.children[i].data.title
    var Title = document.createElement('h2')
    document.body.append(Title)
    var MYposts = success.data.children[i].data.selftext
    var Postdiv = document.createElement('div')
    document.body.append(Postdiv)
    Postdiv.append(MYposts)
    var a = document.createElement('a')
    a.text = success.data.children[i].data.title
    a.href = 'single.html?url=' + success.data.children[i].data.permalink
    Title.append(a)
    }
    })
});