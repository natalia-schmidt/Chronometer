
class Timer {
    constructor(change) {
        this.number = 0;
        this.myTimer = null;
        this.active = false;
        this.change = change;
    }

    start() {
        if (this.active) {return}

        this.active = true; 
        this.myTimer = setInterval(()=> {
            this.number++;
            this.change(this.number);
        },10);
    }    

    stop() {
        clearInterval(this.myTimer);
        this.active = false
    }

    reset() {
        this.stop();
        this.number = 0;
        this.change(this.number);
        this.active = false
    }
}

const changeNumber = (n) => {
    const hours = ("0" + Math.floor(n/360000)).slice(-2)
    let reminder = n%360000;
    const minutes = ("0" + Math.floor(reminder/6000)).slice(-2);
    reminder %= 6000;
    const seconds = ("0" + Math.floor(reminder/100)).slice(-2);
    reminder %= 100;
    const milisec = ("0" + reminder).slice(-2);

    document.getElementById("number1").innerHTML = `${hours}:`;
    document.getElementById("number2").innerHTML = `${minutes}:`;
    document.getElementById("number3").innerHTML = `${seconds}`;
    document.getElementById("milisec").innerHTML = `${milisec}`;
}

const timer = new Timer(changeNumber);
