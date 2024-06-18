interface item{
    name: string;
    price:number;
    
}
//create two objects

const book:item={

    name: "english"
    price: 200
}
const apple:item={
    name: "apple"
    price: 250

}
console.log(`bookname: ${book.name}, price :$${book.price}`);
console.log(`applename: ${apple.name}, price :$${apple.price}`);