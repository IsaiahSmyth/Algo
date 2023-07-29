function reverse(str) {
    return str.split('').reverse('').join('')
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}

module.export = reverse


function reverse(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

module.export = reverse



function reverse(str) {
    
}

module.export = reverse