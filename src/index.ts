import { menuPral } from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'

const main = async () => {
    let n: number
    do {

        n = await menuPral()
        switch(n){
            case 1:
                console.log("Numeros pares")
                await pares()
                break
            case 2:
                console.log("Numeros primos")
                await primos()
                break
            case 3:
                console.log("Contador de dias")
                await contador()
                break
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
const pares = async () => {
    let n1: number
    n1 =  parseInt( await leerTeclado('Dame un número'))
    if (n1%2 == 0) {
        console.log(`${n1} Es un número par`)
     } else {
        console.log(`${n1} Es un número impar`)
     }
}  
const primos = async () => {
    let np1: number
    let i: number=2
    let primo=true
    np1 =  parseInt( await leerTeclado('Dame el numero que quieres comprobar'))
    do{
        if(np1%i==0) {
            primo=false
        }
        i++
    }while(i<np1)
    if (primo==true){
        console.log(`${np1} Es un número PRIMO`)
    } else {
        console.log(`${np1} Es un número NO PRIMO`)
    }
}
const contador = async () => {
    let hoy: Date= new Date()
    let dia:number
    let mes:number
    let año:number
    console.log(`La fecha de hoy es ${hoy}`)
    dia =  parseInt( await leerTeclado('Indica el numero de un dia')) 
    mes =  parseInt( await leerTeclado('Indica un mes'))
    año =  parseInt( await leerTeclado('Indica un año futuro'))
    let mesFinal=mes-1
    let destino= new Date(año,mesFinal,dia)
    const diffMiliseconds:number = destino.valueOf() - hoy.valueOf()
    const diffDays:number = diffMiliseconds / (1000 * 60 * 60 * 24)
    console.log(`Quedan: ${diffDays} dias`)
    
}
main()

    

