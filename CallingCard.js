class CallingCard {
    constructor(centsPerMinute) {
        this.centsPerMinute = centsPerMinute;
        this.balance = 0;
    }

    addDollars(dollars) {
        this.balance += Math.floor((dollars * 100) / this.centsPerMinute);
    }

    getRemainingMinutes() {
        return this.balance;
    }

    useMinutes(minutesUsed) {
        this.balance -= minutesUsed;
        if(this.balance < 0) {
            this.balance = 0;
        }
    }
}

export default CallingCard;