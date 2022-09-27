export const fizzBuzz = (index: number) => {
    let output: string = "";

    function helper(tuple: [string, number]) {
        let [str, num] = tuple;
        
        if (index % num === 0) {
            return output += str;
        } else { 
            return 
        };
    };

    return (array: [string, number][]) => {
        array.map(elem => helper(elem));

        return (!output) ? index : output;
    };
};

test("fizz...", () => {
    let y: [string, number][] = [
        ["Fizz", 3],
        ["Buzz", 5],
        ["Bazz", 7],
    ];

    let x = Array.from({length: 100},(v,index) => fizzBuzz(index+1)(y)
        ).reduce((acc, next) => acc + "\n" + next);
    console.log(x);
    
})