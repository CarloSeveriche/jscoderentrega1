
let  montoDinero = 0;

let divisa 



function conversor() {
    alert("Bienvenido a tu conversor de moneda local a dolares")

    divisa = parseInt(prompt("--Menú-- \n Selecciona una divisa usando el numero de cada opción. \nEl valor de 1 dolar en cada divisa el dia de hoy aparece al lado  \n 1.Pesos Colombianos (1USD = 4848COP) \n 2.Pesos Argentinos (1USD = 197.57 AR) \n 3.Pesos Mexicanos (1USD = 18.14 MX) \n 4.salir" ));

    if( divisa != 4){
        montoDinero= parseFloat(prompt("Ingresa la suma")); 

        switch (divisa){
            case 1:  
                let cop = montoDinero / 4848;
                alert(cop.toFixed(2));
                break;

            case 2:
                let ar = montoDinero / 197.57;
                alert(ar.toFixed(2));
                break;

            case 3:
                let mx = montoDinero / 10.14;
                alert(mx.toFixed(2));
                break;
            }
        }

    else{
        alert("Nos vemos!")
    }

    
}
    
        conversor()
   
    while(divisa != 4){
         conversor()
    }
