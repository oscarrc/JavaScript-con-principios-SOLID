"use strict"

export class FormHandlerAbstraction {
    #form
    #elements
    #data

    constructor(form, elements) {
        if(this.constructor === "FormHandlerAbstraction"){
            throw new Error("FormHandlerAbstraction is an abstract class and cannot be instantiated directly.");
        }

        this.#form = form;
        this.#elements = elements;
    }

    //Getters para obtener funcionalidad de propiedades protected
    get form() {
        return this.#form;
    }

    get elements(){
        return this.#elements;
    }

    get data(){
        return this.#data;
    }

    set data(data){
        this.#data = data;
    }

    getValuesAsKeyValue(){
        throw new Error("Abstract method must be implemented on concrete class.");
    }
}