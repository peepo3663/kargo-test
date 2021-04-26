#!/usr/bin/env node

/**
 * Author: Wasupol Tungsakultong
 * Description: This project is for Kargo Test in NodeJS
 * Date: Apr 26, 2021
 */

/**
 * This dictionary for mapping the digit number to the formatted string.
 */
let numberMap = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine'
}

/**
 * Check arguments are valid and not empty.
 */
let args = process.argv.slice(2)
if (args.length <= 0) {
    process.exit(1)
}
results = []

for (let number of args) {
    /**
     * Argument can not be processed
     */
    if (typeof number != 'string') {
        console.error('We process on strings.')
        process.exit(1)
    }
    /**
     * Argument can not be processed, it is not string of number
     */
    if (isNaN(number) && isNaN(parseInt(number))) {
        console.error('The input argument is not string of number.')
        process.exit(1)
    }
    /**
     * length is invalid.
     */
    if (number.length <= 0) {
        continue
    }
    let answer = ''
    for(let i = 0, len = number.length; i < len; i++) {
        let digit = parseInt(number.charAt(i))
        let digitString = numberMap[digit]
        answer += digitString
    }
    results.push(answer)
}

/**
 * Print the output
 */
console.log(results.join(','))
