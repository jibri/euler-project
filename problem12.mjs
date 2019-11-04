import { isMultipleOf } from "./problem1";

const triangularNumber = (nth) => {
    return (1 + nth) * nth / 2
}

const getFactors = number => {
    let totalFactors = 0
    let factor
    let inc = (number % 2 === 0) ? 1 : 2
    for (factor = 1; factor < Math.sqrt(number); factor += inc) {
        if (isMultipleOf(factor, number)) {
            totalFactors += 2
        }
    }
    if (factor * factor === number) totalFactors++
    return totalFactors
}

export default () => {
    let maxFactors = 0
    let inc = 1
    let triangular
    while (maxFactors < 500) {
        triangular = triangularNumber(inc)
        maxFactors = getFactors(triangular)
        inc++
    }
    console.log(`Max factors ${maxFactors} reached for the triangular number ${triangular}`)
}
