$(document).ready(function(){
    $.ajax({
    method: "GET",
    url:'https://www.reddit.com/r/darksouls3/.json'
    })
    .then(function(success){
        console.log(success)
        
    })
})