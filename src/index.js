module.exports = function reverse (n) {
    let result;
    let arr = n.toString().split('');
    if(arr[0] === '-') {
        result = arr.slice(1,arr.length).reverse().join('');
    } else {
        result = arr.reverse().join('')
    }
    return result;
}
