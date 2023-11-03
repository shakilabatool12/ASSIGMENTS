//36: T-Shirt: Write a function called make_shirt() that accepts a size and the text
// of a message that should be printed on the shirt. The function should print a sentence 
//summarizing the size of the shirt and the message printed on it. Call the function.

const make_shirt =(size:string, message:string):void=>
{
    console.log(`size:${size}, Message: '${message}'`);
    
}
let size : string = "medium";
let message: string = "typescript insight with kamran"

make_shirt(size,message);
 
make_shirt("large", "typescript insight");
