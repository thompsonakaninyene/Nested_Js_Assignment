class shoppingChart {
    constructor() {
        this.items = [];
    }
    //add item to thje chart
    addItem(id, name, price, quality) {
        let existingItem = this.items.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quality += quality;
        }
        else{
            this.items.push({id, name, price, quality});
        }
    }
    //remove item from the chart
    removeItem(id, qualityToRemove = 1) {
        let itemIndex = this.items.findIndex(item => item.id === id);

        if (itemIndex !== -1) {
            this.items[itemIndex].quality -= qualityToRemove;
            if (this.items[itemIndex].quality <= 0) {
                this.items.splice(itemIndex, 1);
            }
        }
    }
    // calculate total discount
    calculateSubtotal(){
        return this.items.reduce((total, item) => total + (item.price * item.quality), 0)
    }
    // percentage discount
    calculateTotal(discountPercent = 0) {
        let subtotal = this.calculateSubtotal();
        let discountAmount = subtotal * (discountPercent / 100);
        return subtotal - discountAmount;
    }
}
//Testing
let myCart = new shoppingChart();
myCart.addItem(201, "Bluetooth pack", 58.00, 1);
myCart.addItem(202, "Wireless Mouse", 20.00, 2)

let subtotal = myCart.calculateSubtotal();
let finalTotal = myCart.calculateTotal();
console.log(`subtotal: ${subtotal}`);
console.log(`Total after 10% discount: ${finalTotal}`)