const isMultipleOf = (number, test) => {
    return test % number === 0
}

export const getPrimes = (from, to) => {
    // On met 2 de base si from < 3
    const primes = from < 3 ? [2] : []

    // from = 3 ou l'impair supérieur
    from = Math.max(3, (from % 2 === 0 ? from + 1 : from))

    // On iterate de deux en deux (tous les impaires)
    for (let i = from; i < to; i += 2) {

        let isPrime = true
        for (let j = 2; j <= (i / j); j++) {
            // on parcourt tous les nombre entre 0 et i/ce nombre
            // on teste si i est divisible par ces nombres
            if (isMultipleOf(j, i)) {
                isPrime = false
                break
            }
        }
        if (isPrime) primes.push(i)
    }
    return primes
}

export const getPrimesFactors = (value) => {
    const primesFactors = []
    const packSize = 1000000
    let iteration = 0
    let factorsProduct = 1
    let valueToTest = value

    while (!primesFactors.length || factorsProduct != value) {

        if (iteration * packSize > valueToTest) break

        const primes = getPrimes(iteration * packSize, iteration * packSize + packSize)
        primes.forEach(p => {
            while (isMultipleOf(p, valueToTest)) {
                primesFactors.push(p)
                factorsProduct = primesFactors.reduce((a, b) => a * b)
                valueToTest = value / factorsProduct
            }
        })

        console.log('iteration = ', iteration, ' - factors found : ', primesFactors.length, ' - factorsProduct = ', factorsProduct, ' - value to test = ', valueToTest)
        iteration++
    }
    return primesFactors
}

export default () => {
    console.log(getPrimesFactors(600851475143))
    console.log(getPrimes(0, 600851475143).length)
}
