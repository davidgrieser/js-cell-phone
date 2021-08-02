import CallingCard from './CallingCard.js'
import CellPhone from './CellPhone.js'

{
    let card = new CallingCard(10);

    card.addDollars(1); // add 100 cents @ 10 cents/minute = 10 minutes added

    let phone = new CellPhone(card);
    phone.isTalking();  // => returns false
    console.log(`false should be ${phone.isTalking()}`);  // => returns false

    phone.call("555-1212");
    phone.isTalking();  // => returns true
    if(phone.isTalking()) {
        console.log("Call sets isTalking to true");
    } else {
        console.log("FAIL")
    }

    phone.tick();       // simulate a minute going by
    phone.tick();       // simulate another minute going by

    phone.endCall();
    phone.isTalking();  // => returns false (because the call is over)
    if(phone.isTalking() === false) {
        console.log("EndCall sets isTalking to false");
    } else {
        console.log("FAIL")
    }
    phone.getHistory(); // => returns "555-1212 (2 minutes)"
    if(phone.getHistory() === '555-1212 (2 minutes)') {
        console.log("GetHistory is working!")
    } else {
        console.log("FAIL")
        console.log(`GetHistory returned "${phone.getHistory()}"`)
    }

    card.getRemainingMinutes() // => return 8, because the call lasted 2 minutes;
    if(card.getRemainingMinutes() === 8) {
        console.log("CallingCard properly charged");
    } else {
        console.log("FAIL")
        console.log(`Calling Card should have 8 minutes - currently has ${card.getRemainingMinutes()}`)
    }
}

{
    let card = new CallingCard(10);
    card.addDollars(1); // add 100 cents @ 10 cents/minute = 10 minutes added

    let phone = new CellPhone(card);
    phone.call("555-1111");
    phone.tick();       // simulate a minute going by
    phone.endCall();

    phone.call("555-2222");
    phone.tick();       // simulate a minute going by
    phone.tick();       // simulate a minute going by
    phone.endCall();

    phone.getHistory(); // => returns "555-1111 (1 minute), 555-2222 (2 minutes)"
    if(phone.getHistory() === "555-1111 (1 minute), 555-2222 (2 minutes)") {
        console.log("GetHistory is working!")
    } else {
        console.log("FAIL")
        console.log(`GetHistory returned "${phone.getHistory()}"`)
    }

    card.getRemainingMinutes() // => return 7, because the phone used 3 minutes
    if(card.getRemainingMinutes() === 7) {
        console.log("CallingCard properly charged");
    } else {
        console.log("FAIL")
        console.log(`Calling Card should have 7 minutes - currently has ${card.getRemainingMinutes()}`);
    }
}

{
    let card = new CallingCard(20);
    card.addDollars(1); // add 100 cents @ 20 cents/minute = 5 minutes added

    let phone = new CellPhone(card);
    phone.call("555-1111");
    phone.tick();       // 1 minute elapsed
    phone.tick();       // 2 minutes elapsed
    phone.endCall();

    phone.call("555-3333");
    phone.tick();       // 3 minutes elapsed
    phone.tick();       // 4 minutes elapsed
    phone.tick();       // this is the end of the 5th minute, so the call is ended

    phone.getHistory(); // => returns "555-1111 (2 minutes), 555-3333 (cut off at 3 minutes)"
    if(phone.getHistory() === "555-1111 (2 minutes), 555-3333 (cut off at 3 minutes)") {
        console.log("GetHistory is working!")
    } else {
        console.log("FAIL")
        console.log(`GetHistory returned "${phone.getHistory()}"`)
    }

    card.getRemainingMinutes() // => returns 0, because all 5 minutes have been used up

}

{
    let card = new CallingCard(20);
    card.addDollars(1); // add 100 cents @ 20 cents/minute = 5 minutes added

    let phone = new CellPhone(card);
    phone.call("555-1111");
    phone.tick();       // 1 minute elapsed
    phone.tick();       // 2 minutes elapsed
    phone.endCall();

    phone.call("555-3333");
    phone.tick();       // 3 minutes elapsed
    phone.endCall();

    phone.call("555-4444");
    phone.tick();       // 4 minutes elapsed
    phone.tick();       // this is the end of the 5th minute, so the call is ended

    phone.getHistory(); // => returns "555-1111 (2 minutes), 555-3333 (cut off at 3 minutes)"
    console.log(phone);
    console.log(phone.getHistory());
    if(phone.getHistory() === "555-1111 (2 minutes), 555-3333 (1 minute), 555-4444 (cut off at 2 minutes)") {
        console.log("GetHistory is working!")
    } else {
        console.log("FAIL")
        console.log(`GetHistory returned "${phone.getHistory()}"`)
    }

    card.getRemainingMinutes() // => returns 0, because all 5 minutes have been used up

}