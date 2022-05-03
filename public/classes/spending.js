const monthlySpent = {
    amount: (Math.pow(128, 2)),
    spent(amount) {
        console.log(amount);
    }
};
let bigArr = [];
bigArr.push(monthlySpent);
// using inerfaces with classes
class YearlySpending {
    constructor(amount /* has to have amount property */, limit, remark) {
        this.amount = amount;
        this.limit = limit;
        this.remark = remark;
    }
    spent(amount) {
        console.log(this.amount);
    }
    // has to have "spent method to match what is defined on the hasSpending interface"
    nextRate() {
        return (this.amount / this.limit);
    }
}
// class inheritance
class YearlyNetSpending extends YearlySpending {
    constructor(amount, limit, remark, accumulator) {
        super(amount, limit, remark);
        this.amount = amount;
        this.limit = limit;
        this.remark = remark;
        this.accumulator = accumulator;
    }
    /**
     * yearly_accumulator
     */
    yearly_accumulator() {
        console.log(this.nextRate() * this.accumulator);
    }
}
export {};
