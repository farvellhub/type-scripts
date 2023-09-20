// export default function Mumbling(phrase: string): string {
//     let inc: number = 1, solution: string = "";
//     for (let char = 0; char < (phrase.length - 1); char++) {
//         for (let index = 0; index < inc; index++) {
//             if (index === 0) { solution += phrase[char].toUpperCase(); }
//             else { solution += phrase[char].toLowerCase(); }
//             if ((index === (inc - 1)) && (char != (phrase.length - 1))) solution += "-";
//         }
//     }
//     return solution;
// }