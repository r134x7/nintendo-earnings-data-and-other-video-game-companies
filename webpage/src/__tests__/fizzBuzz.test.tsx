export const fizzBuzz = (index: number) => {
    return (Fizz: number) => {
        return (Buzz: number) => {
            return (index % Fizz === 0 && index % Buzz === 0)
                    ? console.log("Fizz Buzz")
                    : (index % Buzz === 0)
                    ? console.log("Buzz")
                    : (index % Fizz === 0)
                    ? console.log("Fizz")
                    : console.log(index);
        }
    }
}

Array.from({length: 100},(v,k) => fizzBuzz(k+1)(3)(5))
