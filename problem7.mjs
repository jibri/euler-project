import { getPrimes } from './problem3'

const getPrimesByBatch = (maxSize) => {
    const packSize = 10000
    let iteration = 0
    const primes = []

    while (primes.length < maxSize) {
        console.log("size = ", primes.length, "iteration = ", iteration)
        primes.push(...getPrimes(iteration * packSize, iteration * packSize + packSize))
        iteration++
    }
    return primes
}

export default () => {
    const primes = getPrimesByBatch(10001)
    console.log(primes[10000])
}