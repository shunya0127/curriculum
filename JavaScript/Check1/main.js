let numbers = [2, 5, 12, 13, 15, 18, 22];
for  (let i = 0; i < 7; i++){
    if(i % 2 == 0)
}
function isEven() {
    console.log(num + 'は偶数です');
}

class Car {
    constructor(gas,num) {
        this.gas = gas;
        this.num = num;
    }
    getNumGas() {
        console.log(`ガソリンは${this.gas}です。ナンバーは${this.num}です`)
    }
}
let kuruma = new Car('〇〇','△△');
kuruma.getNumGas();