//35: Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the
// name of each animal. • Modify your program to print a statement about each animal, 
//such as A dog would make a great pet. • Add a line at the end of your program stating
// what these animals have in common. You could print a sentence such as Any of these 
//animals would make a great pet!

const animals: string[] = ['parrot','cat','goat','hen'];

console.log("list of animals:");
for( const animal of animals)
{
     console.log(animal);
}
console.log("\nStatements about each animal:");
for(const animal of animals)
{
    if(animal === 'cat')
    {
        console.log(`A ${animal} is a good pet.`);
    }
    else if(animal === 'parrot')
    {
        console.log(`A ${animal} is a nice pet.`)
    }
    else if(animal === 'goat')
    {
        console.log(`A ${animal} give us milk.`)
    }
}

