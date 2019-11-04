const sum = terms => {
    return terms.reduce((a, b) => a + b)
}

const square = term => {
    return Math.pow(term, 2)
}

const sumOfSquares = terms => {
    return sum(terms.map(square))
}

const squareOfSum = terms => {
    return square(sum(terms))
}

export default () => {
    const terms = [...Array(101).keys()]
    console.log(sumOfSquares(terms) - squareOfSum(terms))
}
