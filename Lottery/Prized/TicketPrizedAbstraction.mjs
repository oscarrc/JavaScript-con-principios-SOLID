'use strict'

// Cumple OPEN/CLOSE, Liskov y SRP ya que hemos implementado dos tipos de premios que son intercambiables.
export class TicketPrizedAbstraction{
    #ticket
    #prizedNumber

    constructor (ticket, prizedNumber){
        if (this.constructor == 'PrizedAbstraction'){
            throw new Error("Abstract class cannot be instantiated")
        }

        this.#ticket = ticket
        this.#prizedNumber = prizedNumber
    }

    get ticket(){
        return this.#ticket
    }

    get prizedNumber(){
        return this.#prizedNumber
    }

    isTicketPrized(){
        throw new Error("Abstract method must be implements on concrete")
    }
}