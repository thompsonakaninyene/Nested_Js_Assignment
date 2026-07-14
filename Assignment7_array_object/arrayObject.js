let products = [
    {name:"SmartTv", price: 25000, category: "Electronics"},
    {name:"Pair of shoe", price: 2500, category: "Luxury"},
    {name:"Phone", price: 125000, category: "Electronics"},
    {name:"Fan", price: 35000, category: "Electrical"},
    {name:"Bluetooth", price: 15000, category: "Electronics"},
    {name:"Bible", price: 10000, category: "Spiritual"}
];
console.log(products)
let productUnder5000 = products.filter(product => product.price < 5000);
console.log("Product under 5000:", productUnder5000);

let electronics = products.filter(product => product.category === "Electronics");
console.log("Electronics:",electronics)
// sum
let sumPrice = products.reduce((sum,product) => sum + product.price, 0);
console.log("sumPrice:", sumPrice);
//Average price
let averagePrice = products.length > 0 ? sumPrice / products.length : 0;
console.log("Average:", averagePrice)