let saldoCuenta = 0;
let valorRetiro = 0;
let repetir =true
while (repetir) {
let menu = prompt("selecciona la operacion que desea realizar  \n1-Consultar saldo \n2- Retirar Dinero \n3- Consignar Dinero \n4- Transeferir \n5- salir")

switch (parseInt(menu)) {
    case 1:
        console.log("Su saldo es: ", saldoCuenta)
        break;
    case 2:
        valorRetiro = Number(prompt("Ingrese el valor a retirar: "))
        if(valorRetiro > saldoCuenta){
            alert("Es saldo en su cuenta es menor al saldo a retirar")
        }
        else{
            alert("Retiro exitoso. Su nuevo saldo es: " + (saldoCuenta = saldoCuenta - valorRetiro))
        }
        break;
    case 3:
        valorRetiro = prompt("Ingrese el valor a consignar: ")
        saldoCuenta += valorRetiro;
        alert ("El nuevo saldo de la cuenta es: " + saldoCuenta)
        break;
    case 4:
        valorRetiro = prompt("Ingrese el valor a tranferir: ")
        if(valorRetiro > saldoCuenta){
            alert("Es saldo en su cuenta es menor al saldo a transferir")
        }
        else{
            alert("Retiro exitoso. Su nuevo saldo es: " + (saldoCuenta = saldoCuenta - valorRetiro))
        }
        break;
    case 5:
        repetir = false
        break;
        
    default:
        console.log("Error en la opcion escogida")
        break;
}
}