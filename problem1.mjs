export const isMultipleOf = (number, test) => {
    return test % number === 0
}

const listAndSum = (max) => {

    const multipleOf3And5 = []
    for (let i = 0; i < max; i++) {
        if (isMultipleOf(3, i) || isMultipleOf(5, i)) {
            multipleOf3And5.push(i)
        }
    }
    console.log(multipleOf3And5.reduce((a, b) => a + b))
}

export default () => {
    listAndSum(10)
    listAndSum(1000)
}
