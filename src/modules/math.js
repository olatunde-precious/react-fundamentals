export const addTwo = (a, b) => a + b
export const multiply = (a, b) => a * b
export const substract = (a, b) => a - b
export const divide = (a, b) => a / b
export const multiple = (a, b) => a ^ b
export default (function doSomeMath() {
    return {
        addTwo,
        multiply,
        substract,
        divide,
        multiple
    }
})()