let imiona = ['Monika', 'Krysiek', 'Rysiek'];

imiona[3] = 'Tania';
imiona[2] = ['a','c', '34'];

imiona.push('Geralt');

console.log('imiona', imiona)

imiona.pop();
imiona.pop();

console.log()






console.log(imiona.unshift('Robert'));

console.log(imiona.shift())
console.log(imiona.length)

for (let i=0; i<imiona.length; i++) {
    console.log(i+1 + " "+ imiona[i])
}

console.log(imiona.join('cos'));

imiona.reverse();
console.log(imiona)


let tab = [33,3,45,64,345]

console.log(tab.sort())

console.log(imiona.sort())