module.exports = function reverse(n) {
    let stringNumber = String(n);
    let i = 0;
    let result = "";

    if (n < 0) {
        while (i < stringNumber.length - 1) {
            result = result + stringNumber[stringNumber.length - 1 - i];
            i++;
            console.log(result)
        }
    } else {
        while (i < stringNumber.length) {
            result = result + stringNumber[stringNumber.length - 1 - i];
            i++;
        }
    }



    result = Number(result);
    return result;
};
