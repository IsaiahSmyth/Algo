function palindrome(str){
    const reversed = str.split('').reversed().join('');
    return str === reversed;
}

module.exports = palindrome;


function palindrome(str){
    str.split('').every((char, i ) => {
        return char === str[str.length -i]
    })
}