import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Numeros Pares')
    console.log('2.- Numeros Primos')
    console.log('3.- Contador de dias')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}