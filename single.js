var search = location.search.substring(1);
var query = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')

$(document).ready(function(){
    $.ajax({
    method: "GET",
    url:'https://www.reddit.com' + query.url + '.json'
    })
    .then(function(success){
        console.log(success)
        var Title = document.createElement('h2')
        var Postdiv = document.createElement('div')
        var Image = document.createElement('div')
        Image.src = success[0].data.children[0].data.thumbnail;
        var innerposts = success[0].data.children[0].data.selftext
        var innerdata = success[0].data.children[0].data.title
        document.body.append(Title)
        document.body.append(Postdiv)
        Postdiv.append(innerposts)
        Title.append(innerdata)

    })
})