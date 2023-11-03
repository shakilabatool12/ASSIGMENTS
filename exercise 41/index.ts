//41:  Magicians: Make a array of magician’s names. Pass the array to a function called
// show_magicians(), which prints the name of each magician in the array.




const magicianNames: string[] = ["Harry potter","Malfoy","Hermione granger","Dumledore","Ron wasley"];


function show_magicians(magicians: string[]):void
{
    for(const items of magicians){
        console.log(items);
    }
}

show_magicians(magicianNames);