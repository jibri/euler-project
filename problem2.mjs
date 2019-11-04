const isMultipleOf = (number, test) => {
    return test % number === 0
}

const getFibonacci = (maxValue) => {
    const terms = [1, 1]
    let i = 2
    while (true) {
        iTerm = terms[i - 2] + terms[i - 1]
        terms.push(iTerm)
        if (iTerm >= maxValue) return terms
        i++
    }
}

const listAndSum = (maxValue) => {

    const multiplesOf2 = getFibonacci(maxValue).filter(term => isMultipleOf(2, term))
    console.log(multiplesOf2.reduce((a, b) => a + b))
}

export default () => {
    listAndSum(4000000)
}
