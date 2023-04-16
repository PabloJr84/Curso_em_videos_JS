var nome = window.prompt('Qual é seu nome ?')
document.write(`Seu nome tem ${nome.length} letras.<br/>`)/*quando caracteres a string tem*/ 
document.write(`Seu nome em letra maiúsculas é ${nome.toUpperCase()} <br/>`) /*muda tudo para maiúsculas*/
document.write(`Seu nom em minúsculas é ${nome.toLocaleLowerCase()}`) /*muda todas as letras para minusculas*/


