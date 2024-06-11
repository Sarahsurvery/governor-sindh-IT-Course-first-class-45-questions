interface item {
    name : string
    price : number
};
//create three objects
const book: item ={
name: 'essential typescript',
price: 500
};
const apple: item ={
    name: 'apple',
    price: 200
};
const juice: item ={
    name: 'juice',
    price: 150
};
console.log(`book name : ${book.name}, price: $${book.price}`);
console.log(`apple name : ${apple.name}, price: $${apple.price}`);
console.log(`juice name : ${juice.name}, price: $${juice.price}`);