"use strict"

class TicketNumberAbstraction{
    // El símbolo # es una convención para indicar que el atributo es privado
    #number

    constructor(number){ 
        //Simulamos una abstracción impidiendo instanciar si la instancia tiene el mismo nombre que el constructor
        if (this.constructor == 'TicketNumberAbstraction'){
            throw new Error("Abstract class cannot be instantiate")
        }

        this.#number = number
    }

    get number(){
        return this.#number
    }

    validateNumber(number){ throw new Error("Abstract method must be implements on concrete") }
    get ticketNumber(){ throw new Error("Abstract method must be implements on concrete") }
}

export { TicketNumberAbstraction }