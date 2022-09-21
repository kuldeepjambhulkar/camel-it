function camelIt (string) {
    const preString = string.split(' ').map( item => item.charAt(0).toUpperCase() + item.slice(1)).join('')
    return(preString.charAt(0).toLocaleLowerCase() + preString.slice(1))
}

module.exports = camelIt;