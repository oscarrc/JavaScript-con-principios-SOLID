"use strict"

//Cumple con OPEN/CLOSED PRINCIPLE ya que el podemos crear múltiples rollers con diferentes comportamientos
//Cumple con LISKOV PRINCIPLE ya que distintas instancias son intercambiables
class RollerInterface{

    constructor(){
        if (this.constructor == 'RollerInterface'){
            throw new Error("Abstract class cannot be instantiated")
        }
    }

    fillRollerWithValues(min, max, step){ throw new Error("Abstract method must be implements on concrete") }
    turnRoller(turnsNumber){ throw new Error("Abstract method must be implements on concrete") }
    extractAdward(){ throw new Error("Abstract method must be implements on concrete") }
}

export {RollerInterface}