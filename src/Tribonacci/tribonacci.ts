export default function Tribonacci(signature: number[], key: number) {
    let temp: number = 0;

    if (key <= 1) signature.splice(key, signature.length);

    for (let index = 0; index < (key - 3); index++) {
        temp = signature[index + 2] + signature[index + 1] + signature[index];
        signature.push(temp);
    }

    return signature;
}