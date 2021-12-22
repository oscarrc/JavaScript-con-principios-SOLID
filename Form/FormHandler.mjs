"use strict"

import { FormHandlerAbstraction } from "./FormHandlerAbstraction.mjs"

class FormHandler extends FormHandlerAbstraction{
    getValuesAsKeyValue(){
        this.data = {};

        Array.from(this.form.elements).forEach(element => {
            if(this.elements.indexOf(element.name) < 0) return;
            if(!this.isActiveElement(element)) return;

            this.data[element.name] = element.value;
        });

        return this.data;
    }

    isActiveElement(element){
        switch (true) {
            case (["checkbox", "radio"].indexOf(element.type) > -1):
                return element.checked === true;
            case (["number", "text"].indexOf(element.type) > -1):
                return element.disabled === false;
        }
    }
}

export { FormHandler };