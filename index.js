function checkIsPalindrome(str) {const reduce = (first) => (acc, l, i, arr) => {if (first ? i < (arr.length - 1) / 2 : i > (arr.length - 1) / 2) acc.has(l) ? acc.set(l, acc.get(l).concat(l)) : acc.set(l, [l]);return acc;};return JSON.stringify(Object.fromEntries(str.split('').reduce(reduce(true), new Map())))===JSON.stringify(Object.fromEntries(str.split('').reduceRight(reduce(false), new Map())))}
