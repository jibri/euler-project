const isMultipleOf = (number, test) => {
    return test % number === 0
}

const findFirstDivisibleByAll = divisors => {
    console.log(divisors)
    let number = 1
    while (true) {

        let isAllDivisor = true
        for (let d of divisors) {
            isAllDivisor &= isMultipleOf(d, number)
            if (!isAllDivisor) break
        }

        if (isAllDivisor) return number
        number++
    }
}

export default () => {
    console.log(findFirstDivisibleByAll([...Array(20).keys()].map(i => i + 1)))
}
