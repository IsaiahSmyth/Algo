function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse().join('')
    if (n < 0){
        return parseInt(reversed) * -1;
    }
    return parsedInt(reversed);

}


function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse().join('')

    return parsedInt(reversed) * Math.sign(n);

}