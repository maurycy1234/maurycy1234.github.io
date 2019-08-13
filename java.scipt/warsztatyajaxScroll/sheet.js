function getdata() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response =>response.json())
        .then(response=>{
            console.log(response);
            for(let i=0; i<response.length; i++) {
                console.log(response[i].id)
            let div = document.getElementById("div");
            let create = document.createElement("p");
            create.innerHTML = response[i].id + " " + response[i].name + " " + response[i].website
           // let inside = (response[i].id + " " + response[i].name + " " + response[i].website)
            let classArt = document.createAttribute("class");
            classArt.value = "create";
            div.appendChild(create)
            }
        });
    }
getdata();
getdata();

window.onscroll = function () {
let d = document.documentElement;
let offset = d.scrollTop + window.innerHeight;
let height = d.offsetHeight;
console.log(offset, height)
if (offset === height ){getdata()}
}

