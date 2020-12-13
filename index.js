function loopyThing(x) {
    if (x > 10) {
        console.log("Hey! That's a large number!");
    } else if (x < 10) {
        console.log("Hey! That's a small number!");
    } else {
        for (let step = 0; step <5; step++){
        console.log("Hey! That's not a number!");}
    }
};

loopyThing(12);
console.log("===========================");
loopyThing('5');