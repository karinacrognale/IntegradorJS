//Defino el valor de la entrada
const valorticket = 200;

//Defino porcentaje de descuentos segun tipo
let DescuentoEstudiante= 80 ;
let DescuentoTrainee= 50 ;
let DescuentoJunior= 15 ;

// Defino elementos en variables
let Nombre = document.getElementById("Nombre")
let Apellido = document.getElementById("Apellido")
let Email = document.getElementById("Email")
let Cantidad = document.getElementById("Cantidad")
let Categoria = document.getElementById("Categoria")






function calcular()
{
    let totalValorTicket= (Cantidad.value)*valorticket;
    //quitarClaseError();

    if(Nombre.value==="")
    {
        alert("Escribir nombre...");
        Nombre.classList.add("is-invalid");
        Nombre.focus();
        return ;
    }

    if(Apellido.value==="")
    {
        alert("Escribir apellido...");
        Apellido.classList.add("is-invalid");
        Apellido.focus();
        return ;
    }

    if(Email.value==="")
    {
        alert("Escribir apellido...");
        Email.classList.add("is-invalid");
        Email.focus();
        return ;
    }

     // Para determinar si el correo electrónico es válido o no
     const emailValido = Email => 
     {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email);
     }

     if(!emailValido(Email.value))
     {
        alert("Escribir bien el mail...");
        Email.classList.add("is-invalid");
        Email.focus();
        return ;
     }

    if( (Cantidad.value<=0) || (isNaN(Cantidad.value)))
    {
        alert("Escribir bien el mail...");
        Cantidad.classList.add("is-invalid");
        Cantidad.focus();
        return ;
    }

    if(Categoria.value==="")
    {
        alert("Escribir apellido...");
        Categoria.classList.add("is-invalid");
        Categoria.focus();
        return ;
    }

// Clasifico los casos segun categoria
console.log(Cantidad.value);

   if(Categoria.value==0)

    {
        totalValorTicket=totalValorTicket;
    }
if(Categoria.value==1)
   
    {
        totalValorTicket=totalValorTicket-((DescuentoEstudiante/100) *totalValorTicket);
    }

if(Categoria.value==2)
   
    {
        totalValorTicket=totalValorTicket-((DescuentoTrainee/100) *totalValorTicket);
    }

if(Categoria.value==3)
   
    {
        totalValorTicket=totalValorTicket-((DescuentoJunior/100) *totalValorTicket);
    }

    console.log("total");
    console.log(totalValorTicket);
// Inserto el valor 
totalPago.innerHTML=totalValorTicket;

}

function reset()
{
    // Funcion que limpie los controles

    // Funcion que limpie el valor del pago
   totalPago.innerHTML="";
}

// Evento de escucha del boton resumen
document.getElementById("btnResumen").addEventListener("click", calcular);

// Evento de escucha del boton borrar
btnBorrar.addEventListener("click",reset);

