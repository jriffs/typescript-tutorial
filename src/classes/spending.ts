import { hasSpending } from '../interfaces/has-spending.js'

const monthlySpent: hasSpending = {
    amount: (128 ** 2),
    spent(amount) {
        console.log(amount)
    }
}

let bigArr: hasSpending[] = []

bigArr.push(monthlySpent)

// using inerfaces with classes
class YearlySpending implements hasSpending {
    constructor(public amount: number /* has to have amount property */, readonly limit: number, public remark: string) { }

    spent(amount: number): void {
        console.log(this.amount)
    }
    // has to have "spent method to match what is defined on the hasSpending interface"

    public nextRate(): number {
        return (this.amount / this.limit)
    }          
}


// class inheritance
class YearlyNetSpending extends YearlySpending implements hasSpending {
    constructor(public amount: number, readonly limit: number, public remark: string, private accumulator: number) {
        super(amount, limit, remark)
    }

    /**
     * yearly_accumulator
     */
    yearly_accumulator(): void {
        console.log(this.nextRate()*this.accumulator)    
    }
}