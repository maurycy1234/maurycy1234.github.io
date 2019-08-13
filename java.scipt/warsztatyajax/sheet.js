$('#guzik').click(function (){
   
    
        fetch(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(response =>response.json())
        .then(response=>{
            console.log(response);
            $("#par").text(response.id + " " + response.name + " " + response.website)
        });

    })