export const fizzBuzz = (...arr: number[]) => {
    let [x] = arr;
    return (Fizz: number) => {
        return (Buzz: number) => {
            return (x % Fizz === 0 && x % Buzz === 0)
                    ? console.log("Fizz Buzz")
                    : (x % Buzz === 0)
                    ? console.log("Buzz")
                    : console.log("Fizz");
        }
    }
}

const arr: number[] = Array.from({length: 100},(v,k) => k)

fizzBuzz(...arr)(3)(5)