//37: Large Shirts: Modify the make_shirt() function so that shirts are large by
// default with a message that reads I love TypeScript. Make a large shirt and a 
//medium shirt with the default message, and a shirt of any size with a different function

function makeShirt(size: string ="Large",message: string =" I love typescript"):void
{
 return console.log(`Size ${size}, Message: '${message}'`);
}
makeShirt()

makeShirt("Medium")

makeShirt("Small","subscribe typecript channel");