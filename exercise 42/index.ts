//42:Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by
// adding the phrase the Great to each magician’s name. Call show_magicians()
// to see that the list has actually been modified.







const magicianNames: string[] = ["Harry potter","Malfoy","Hermione granger","Dumledore","Ron wasley"];


function show_magicians(magicians: string[]):void
{
    for(const magician of magicians){
        console.log(magician);
    }
}

show_magicians(magicianNames);

function make_great(magicians: string[]): string[]
{
    const greatMagicians: string[]= magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}

const greatMagicianNames:string[]= make_great(magicianNames);
console.log(" Original Magicians:");
show_magicians(greatMagicianNames);

console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames);