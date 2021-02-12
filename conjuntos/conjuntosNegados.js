const texto = '1,2,3,4,a.b c!d?e[f'

console.log(texto.match(/[^\d!\?\[\s,\.]/g))