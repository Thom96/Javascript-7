//NUMBER SMALLER/BIGGER THEN 100

const sum = function (number) {
    if (number > 100) {
        return true
    }
    else {
        return false
    }

}

//BRENDA THE BOUNCER BOT

const Canyougetin = function(maximum, current, age) {

        if (age < 18) {
            return "this is a club for adults"
        }
        else if (maximum <= current) {
            return "it's too busy now, come back later"
        }
        else 
            return "come in"
    };

    const tooyoung = Canyougetin(500,250,16);
    const toobusy = Canyougetin(500,500,18);
    const comein = Canyougetin(500,250,18);

console.log(tooyoung);
console.log(toobusy);
console.log(comein);

//CALCULATING THE AVERAGE

const Numbers = function (Number1, Number2, Number3, Number4, Number5) {
    const Sum = Number1 + Number2 + Number3 + Number4 + Number5;
    const Average = Sum / 5;
    return Average;
}

const result1 = Numbers(24, 11, 77, 29, 43);
const result2 = Numbers(5, 3, 9, 0, 32);
const result3 = Numbers(34678, 89778, 646, 444, 111);
console.log(Math.round(result1));
console.log(Math.round(result2));
console.log(Math.round(result3));