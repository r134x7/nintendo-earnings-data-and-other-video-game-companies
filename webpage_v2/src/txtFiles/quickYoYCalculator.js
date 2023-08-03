const getNumerator = Number(process.argv[2]);
const getDivisor = Number(process.argv[3]);
const decimalLength = Number(process.argv[4]);

function quickYoYCalculateJS(numerator, divisor, fixedLength) {

    return (divisor < 0)
        ? Number((((
                    (numerator / divisor) -1)* -1) * 100).toFixed(fixedLength))
        : Number(((
                    (numerator / divisor) -1) * 100).toFixed(fixedLength))
}

const calc = quickYoYCalculateJS(getNumerator, getDivisor, decimalLength)

console.log(calc);