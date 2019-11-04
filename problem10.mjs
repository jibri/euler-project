import { getPrimes } from './problem3'

export default () => {
    console.log(getPrimes(0, 2000000).reduce((a, b) => a + b))
}
