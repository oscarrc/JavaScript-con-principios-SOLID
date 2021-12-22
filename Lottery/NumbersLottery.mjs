"use strict"

import { RollerInterface } from "./Roller/RollerInterface.mjs"

class NumbersLottery{
    #roller

    constructor(roller){
        // Comprobamos que roller es una instancia de RollerInterface ya que JS es un lenguaje de tipado dinámico
        // Principio de inversión de dependencias
        if (false === roller instanceof RollerInterface) {
            throw new Error(`${this.constructor.name} class expect argument at position 0 to be RollerInterface type`)
        }

        this.#roller = roller
    }

    prepareLottery(){
        this.#roller.fillRollerWithValues(MIN_TICKET_NUMBER, MAX_TICKET_NUMBER, LOTTERY_NUMBER_STEPS)
    }

    startLottery(){
        this.#roller.turnRoller(3)
    }

    getPrizedNumber(){
        return this.#roller.extractAdward()
    }
}

export {NumbersLottery}