
        $('#a').on("click", function()
        {    
    let zgoda = $('#rodo');
    let imie = $('#imie');
    let nazwisko = $('#nazwisko');
    let ulica = $('#ulica')
    let nrdomu = $('#nrdomu')
    let kod = $('#kod')
    let miasto = $('#miasto')
    let sospo = $('#sospo')
    let soscz = $('#soscz')
    let pizza = $('#pizza')
    let price = $('#price')
    console.log(imie)
        if (zgoda.is(":checked") == false){ 
         alert( 'zaznacz zgode na rodo!' );}
        
     else {
        if (imie.val() == ""){
            $( "#div1" ).html( "<span>nie wpisałeś imienia!</span>!" );
            }
        else {
            
            if (nazwisko.val() == ""){
                $( "#div2" ).html( "<span>nie wpisałeś nazwiska!</span>!" );  
            } 
           else {
           
            if (ulica.val() == ""){
                $( "#div3" ).html( "<span>nie wpisałeś ulicy!</span>!" );
            }
                else {
                 
            if (nrdomu.val() == "") {
                $( "#div4" ).html( "<span>nie wpisałeś numeru domu/mieszkania!</span>!" );
            } 
                else {
            if (kod.val() == "") {
                $( "#div5" ).html( "<span>nie wpisałeś kodu pocztowego!</span>!" );
            }
                else {
            if (miasto.val() == "") {
                $( "#div6" ).html( "<span>nie wpisałeś miasta!</span>!" );
            }   
                else {
            if (sospo.is(":checked") == false && soscz.is(":checked") == false) {
                $( "#div7" ).html( "<span>nie wybrales sosu!</span>!" );

            }
            else {
            if (pizza.val() == "-- wybierz pizze --") {
                $("#pizza").html("<span>nie wybrales pizzy!</span>")
            }
            else{}
            }
                }    
                }
                }            

                }
           } 
        }
      }


let priceTable = [
    {
    id:0,
    price:45
    },
    {
    id:1,
    price:34
    },
    {
    id:2,
    price:46
    },
    {
    id:3,
    price:53
    },
    {
    id:4,
    price:43
    }
];

pizza.change(function(){
    let pizzaPrice = 0;
    let pizzaType = $(this).val();
    console.log("wybrana pizza",pizzaType)

    if (pizzaType == 11) {
     price.text("0 PLN");
     return;
    }

    priceTable.forEach(function(element) {
    if (element.id == pizzaType) {
        pizzaPrice = element.price;

        price.text(pizzaPrice + "PLN")

        return false;
    }
    let orderObject = {
        imie: $.trim(imie.val()),
        nazwisko: $.trim(nazwisko.val()),
        ulica: $.trim(ulica.val()),
        nrdomu: $.trim(nrdomu.val()),
        kod: $.trim(kod.val()),
        miasto: $.trim(miasto.val()),
        pizza: pizza.val(),
        sosy: [sospo.is(":checked"), soscz.is(":checked")]
    };

    
   

     return false;
    });

    console.log(orderObject);
});
});
