export {}
// export const fizzBuzz = (list: [string, number][]) => {
//     return (integer: number): string => {

//     let output: string = "";

//     function helper(tuple: [string, number]) {
//         let [str, num] = tuple;
        
//         if (integer % num === 0) {
//             return output += str;
//         } else { 
//             return 
//         };
//     };

//         list.map(elem => helper(elem));
//         // toString() avoids implicit type conversion: string + number
//         return (!output) ? integer.toString() : output;
//     };
// };

test("fizz...", () => {
    let tupleList: [string, number][] = [
        ["Fizz", 3],
        ["Buzz", 5],
        ["Bazz", 7],
    ];

    const fizzBuzz = (list: [string, number][]) => {
        return (integer: number): string => {
        if (integer === 0) { return "" } // end recursion
    
        let output: string = "";
    
        function helper(tuple: [string, number]) {
            let [str, num] = tuple;
            
            if (integer % num === 0) {
                return output += str;
            } else { 
                return 
            };
        };
    
            list.map(elem => helper(elem));

            return (!output) ? `${integer.toString()}\n` + maxValue(integer-1) : `${output}\n` + maxValue(integer-1);
        };
    };
    // function currying
    const maxValue= fizzBuzz(tupleList);

    const result = maxValue(15);
    console.log(result);
    
    // Array.length 100, 
    // let result = Array.from({length: 100},(v,i) => 
    //               inputValue(i+1))
    //              .reduce((acc, next) => acc + "\n" + next);

})

test("buzz...", () => {
    let tupleList: [string, number][] = [
        ["Fizz", 3],
        ["Buzz", 5],
        ["Bazz", 7],
    ];

    const fizzBuzz = (list: [string, number][]) => {
        let total: string = "";
        let minValue: number = 1;
        return (integer: number): string => {
        if (integer < minValue) { 
            return total
        } // end recursion
    
        let output: string = "";
    
        function helper(tuple: [string, number]) {
            let [str, num] = tuple;
            
            if (minValue % num === 0) {
                return output += str;
            } else { 
                return 
            };
        };
            
            list.map(elem => helper(elem));
        
            (!output) ? total += minValue.toString() + "\n" : total += output + "\n";

            minValue++
            return maxValue(integer)
        };
    };
    // function currying
    const maxValue= fizzBuzz(tupleList);

    const result = maxValue(15);
    console.log(result);

})