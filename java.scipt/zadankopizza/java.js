const order = {
    imie: "",
    nazwisko: "",
    pizza: "",
    sosy: [],
    zgoda: Boolean
}

let przycisk = $('#a');
    
    
        $('#a').on("click", function()
        {    
    let zgoda = $('[wybor]'[0].checked);
    let imie = $('[imie]'[0].val());
    let nazwisko = $('[nazwisko]'[0].val());
    let ulica = $('[ulica]'[0].value)
    let nrdomu = $('[nrdomu]'[0].value)
    let kod = $('[kod]'[0].value)
    let miasto = $('[miasto]'[0].value)
    let sospo = $('[sospo]'[0].checked)
    let soscz = $('[soscz]'[0].checked)
    let pizza = $('#pizza'[0].value)
    console.log(imie)
        if (zgoda == false){ 
        e.preventDefault();
         alert( 'zaznacz zgode na rodo!' );}
        
     else {
        if (imie == ""){
            $( "#div1" ).html( "<span>nie wpisałeś imienia!</span>!" );
            }
        else {
            
            if (nazwisko == ""){
                $( "#div2" ).html( "<span>nie wpisałeś nazwiska!</span>!" );  
            } 
           else {
           
            if (ulica == ""){
                $( "#div3" ).html( "<span>nie wpisałeś ulicy!</span>!" );
            }
                else {
                 
            if (nrdomu == "") {
                $( "#div4" ).html( "<span>nie wpisałeś numeru domu/mieszkania!</span>!" );
            } 
                else {
            if (kod == "") {
                $( "#div5" ).html( "<span>nie wpisałeś kodu pocztowego!</span>!" );
            }
                else {
            if (miasto == "") {
                $( "#div6" ).html( "<span>nie wpisałeś miasta!</span>!" );
            }   
                else {
            if (sospo == false && soscz == false) {
                $( "#div7" ).html( "<span>nie wybrales sosu!</span>!" );

            }
            else {
            if (pizza == "") {
                $("#pizza").html("<span>nie wybrales pizzy!</span>")
            }
            }
                }    
                }
                }            

                }
           } 
        }
      }
});


