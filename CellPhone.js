class CellPhone {
    constructor(card) {
        this.card = card;
        this.talking = false;
        this.counter = 0;
        this.callHistory = [];
    }

    isTalking() {
        return this.talking;
    }

    // create empty array and push new numbers into it
    call(phoneNumber) {
        this.talking = true;
        // track person we are calling
        this.currentPhoneCall = phoneNumber
    }

    tick() {
        this.counter++;
        // charge calling card each time we tick
        this.card.useMinutes(1);
        // greater than 5?
        if(this.card.getRemainingMinutes() === 0) {
            this.endCall();
        }
    }

    endCall() {
        this.talking = false;
        // we need to take all the minutes
        let cutOffCall = this.card.getRemainingMinutes() === 0; // return true/false
        this.callHistory.push({ number: this.currentPhoneCall, minutes: this.counter, cutOff: cutOffCall });
        this.counter = 0;
    }

    getHistory() {
        return this.callHistory.map((callEntry) => {
            if(callEntry['minutes'] > 1) {
                if(callEntry['cutOff']) {
                    return `${callEntry['number']} (cut off at ${callEntry['minutes']} minutes)`
                } else {
                    return `${callEntry['number']} (${callEntry['minutes']} minutes)`

                }
            } else {
                if(callEntry['cutOff']) {
                    return `${callEntry['number']} (cut off at ${callEntry['minutes']} minute)`
                } else {
                    return `${callEntry['number']} (${callEntry['minutes']} minute)`
                }
            }
        }).join(', ')
        // return this.currentPhoneCall + ` (${this.counter} minutes)`;
    }
}

export default CellPhone;