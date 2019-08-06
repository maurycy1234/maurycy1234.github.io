
let przycisk = document.getElementById("a");
    
    
        przycisk.addEventListener("click", function(e)
        {    
    let zgoda = document.getElementsByName("zgoda")[0].checked
    let imie = document.getElementsByName("fname")[0].value 
    let nazwisko = document.getElementsByName("lname")[0].value
    let email = document.getElementsByName("email")[0].value
        if (zgoda == false){ 
        e.preventDefault();
         alert( 'zaznacz kwadrat!' );}
        
     else {
    let div1 = document.getElementById("div1");
    let create = document.createElement("span");
    let text = document.createTextNode("nie wypełnione pole");
    let classArt = document.createAttribute("class");
    classArt.value = "create";
        if (imie == ""){
            e.preventDefault();
            document.body.appendChild(create);
            create.appendChild(text);
            div1.appendChild(create);
            }
        else {
            let div2 = document.getElementById("div2");
            let create = document.createElement("span");
            let text = document.createTextNode("nie wypełnione pole");
            let classArt = document.createAttribute("class");
            classArt.value = "create";
            if (nazwisko == ""){
                e.preventDefault();
                document.body.appendChild(create);
                create.appendChild(text);
                div2.appendChild(create);  
            } 
           else {
            let div3 = document.getElementById("div3");
            let create = document.createElement("span");
            let text = document.createTextNode("nie wypełnione pole");
            let classArt = document.createAttribute("class");
            classArt.value = "create";
            if (email == ""){
                e.preventDefault();
                document.body.appendChild(create);
                create.appendChild(text);
                div3.appendChild(create);
            }
                else {}
           } 
        }
      }
});