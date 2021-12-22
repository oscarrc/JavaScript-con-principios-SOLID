//Emulamos on document ready
(() => {
    "use strict"

    let section_custom = document.querySelector("#lottery_ticket_form .custom_lottery");
    let option = document.querySelectorAll("[name=card_type]");

    option.forEach( radio => {
        radio.addEventListener("onChange", (event) => {
            if (radio.value === "custom"){
                section_custom.classList.remove("disabled-component");
                section_custom.querySelector("input").disabled = false;
            }else{
                section_custom.classList.add("disabled-component");
                section_custom.querySelector("input").disabled = true;
            }
        })
    })

    document.querySelector("#lottery_ticket_form > form").addEventListener("submit", (event) => {
        event.preventDefault();

        //Lazy load modules
        import("../Form/FormHandler.mjs").then(({ module }) => {
            let form = new module.FormHandler(event.target, ["lottery_number", "card_type"]);
            let dataInput = form.getValuesAsKeyValue();
            let numberBet = null;

            if( dataInput.card_type === "auto"){
                numberBet = numberGenerator.generateRandom(MIN_TICKET_NUMBER, MAX_TICKET_NUMBER);
            }else{
                numberBet = dataInput.lottery_number;
            }

            import("../Lottery/Ticket/SimpleTicketNumber.mjs").then(({ module }) => {
                window.ticket = new module.SimpleTicketNumber(numberBet, numberFormatter);

                let ticketHTML = document.createElement("span");
                ticketHTML.innerHTML = ticket.ticketNumber;
                document.querySelector("#lottery_ticket #ticket_number").innerHTML = ticketHTML.outerHTML;
            })
        })
    })

    document.querySelector("#lottery_ticket > form").addEventListener("submit", (event) => {
        event.preventDefault();
        lottery.startLottery();

        let prizedNumber = lottery.getPrizedNumber();

        import("../Lottery/Prized/FullNumberTicketPrized.mjs").then(({ module }) => {
            window.numberPrized = new module.FullNumberTicketPrized(ticket, prizedNumber);

            let result = numberPrized.isTicketsPrized();
            let prizedHTML = document.createElement("span");

            prizedHTML = prizedNumber + (result ? " - GANADOR" : " - NO GANADOR");
            prizedHTML.style = ( result ? "color: green" : "color: black");
            
            document.querySelector("#llottery_result").innerHTML = prizedHTML.outerHTML;
        })
    })
})();