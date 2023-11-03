//43:Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’
// names. Because the original array will be unchanged, return the new array and
// store it in a separate array. Call show_magicians() with each array to show that
// you have one array of the original names and one array with the Great added to each 
//magician’s name.





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