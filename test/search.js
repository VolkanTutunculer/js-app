function searchForProduct(str){
    if (str.trim().length === 0) console.log('product name is not provided')
    console.log(`${str} is searched !`)
}

searchForProduct('Book');
searchForProduct('');
searchForProduct('  ');