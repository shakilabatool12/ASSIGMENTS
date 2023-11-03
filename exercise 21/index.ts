//They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.

interface Item {
    name: string;
    quantity: number;
  }
  
  const item1: Item = {
    name: "Book",
    quantity: 10
  };
  
  const item2: Item = {
    name: "Pen",
    quantity: 50
  };
  
  const item3: Item = {
    name: "Notebook",
    quantity: 20
  };
  
  const itemObjects: Item[] = [item1, item2, item3];
  
  console.log("Objects containing items:");
  itemObjects.forEach((item, index) => {
    console.log(`Object ${index + 1}:`, item);
  });
  