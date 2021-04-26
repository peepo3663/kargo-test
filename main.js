#!/usr/bin/env node

/**
 * Author: Wasupol Tungsakultong
 * Description: This project is for Kargo Test in NodeJS
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

let args = process.argv.slice(2)
if (args.length <= 0) {
    process.exit(1)
}
results = []

for (let number of args) {
    if (number.length <= 0) {
        continue
    }
    let answer = ''
    for(let i = 0, len = number.length; i < len; i++) {
        let digit = parseInt(number.charAt(i))
        let digitString = numberMap[digit]
        answer += digitString
    }
}

/**
 * Print the output
 */
console.log(results)
