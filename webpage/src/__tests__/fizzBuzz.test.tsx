export const fizzBuzz = (index: number) => {
    let output: string = "";
    return (Fizz: number) => {
        if (index % Fizz === 0) { output += "Fizz" };
        return (Buzz: number) => {
            if (index % Buzz === 0) { output += "Buzz" };
            return (Bazz: number) => {
                if (index % Bazz === 0) { output += "Bazz"};
                return output || index;
            }
        };
    };
};
test("fizz...", () => {
    let x = Array.from({length: 100},(v,index) => fizzBuzz(index+1)(3)(5)(7));
    console.log(x);
    
})
