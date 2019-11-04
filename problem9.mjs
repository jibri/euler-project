
const listSquares = (maxValue) => {
    const squares = []
    let i = 1
    while (true) {
        const sq = Math.pow(i, 2)
        if (sq < maxValue) squares.push(sq)
        else return squares
        i++
    }
}

const findSumTerms = (result, listOfTerms) => {
    listOfLists = []

    for (let term1 of listOfTerms) {
        for (let term2 of listOfTerms) {
            if (term1 + term2 === result) {
                listOfLists.push([term1, term2])
            }
        }
    }
    return listOfLists
}

const getProductOfTriplet = sommeOfTriplet => {
    const reversedSquares = listSquares(1 + Math.pow(sommeOfTriplet, 2)).reverse()
    for (let sq of reversedSquares) {
        const sumTermsLists = findSumTerms(sq, reversedSquares)
        if (sumTermsLists) {
            for (let sumTerms of sumTermsLists) {
                sum = Math.sqrt(sq) + Math.sqrt(sumTerms[0]) + Math.sqrt(sumTerms[1])

                if (sum < 1100 && sum > 900) console.log('found Pythagorean squares : ', sq, sumTerms[0], sumTerms[1], 'sum = ', sum)
                if (sum === 1000) {
                    console.log('found : ', sq, sumTerms[0], sumTerms[1])
                    return Math.sqrt(sq) * Math.sqrt(sumTerms[0]) * Math.sqrt(sumTerms[1])
                }
            }
        }
    }
    return null
}

export default () => {
    console.log(getProductOfTriplet(1000))
}
