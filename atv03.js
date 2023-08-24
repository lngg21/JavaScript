

const str1 = "RiR"
const str2 = "PACAJUS"

const cleantext1 = str1.toLowerCase().replace(/[^a-z]/g, '');
const cleantext2 = str2.toLowerCase().replace(/[^a-z]/g, '');

// método split() divide uma String em uma lista ordenada de substrings
const reverso = cleantext1.split('').reverse().join(''); 
const reverso2 = cleantext2.split('').reverse().join(''); 
// a variavel reverse() faz com que os elementos da string sejam revertidos
// O join() método é usado para unir os elementos de um array em uma string

if(cleantext1 === reverso) 
{ 
    console.log(`A string ${cleantext1} é um palíndromo!`);
}
else 
{
    console.log(`A string ${cleantext1} não é um palíndromo!`);
}

    if(cleantext2 === reverso2)
    {
        console.log(`A string ${cleantext2} é um palíndromo!`);
    }
    else
    {
        console.log(`A string ${cleantext2} não é um palíndromo!`);
    }