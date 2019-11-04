const isPalindrome = (number) => {
    const nbStr = '' + number
    const size = nbStr.length
    for (let i = 0; i < size; i++) {
        if (nbStr.charAt(i) !== nbStr.charAt(size - (i + 1))) return false
    }
    return true
}

const getPalindromes = (from, to) => {
    const palindromes = []

    for (let i = from; i < to; i++) {
        if (isPalindrome(i)) palindromes.push(i)
    }
    return palindromes
}

const has2FactorsOfNDigits = (number, nbFactorsDigit) => {

    let min = Math.pow(10, nbFactorsDigit - 1)
    let max = 10 * min
    for (let firstFactor = min; firstFactor < max; firstFactor++) {
        const secondFactor = number / firstFactor
        if (Number.isInteger(secondFactor) && min <= secondFactor && secondFactor < max) {
            return true
        }
    }
    return false
}

const getBiggest = () => {
    const palindromes = getPalindromes(10000, 1000000).reverse()
    palindromes.forEach(p => {
        if (has2FactorsOfNDigits(p, 3)) {
            console.log(p)
        }
    })
}

export default () => {
    getBiggest()
}
