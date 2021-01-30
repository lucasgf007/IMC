// INDICE DE MASSA CORPORAL

function caracteres(){


    
    var nome = document.getElementById('name').value
    var altura = document.getElementById('alt').value
    var peso = document.getElementById('kg').value
    
    // verificação
    console.log(nome)
    console.log(altura)
    console.log(peso)




// ----------------------------- lógica
    altura = parseFloat(altura)
    peso = parseFloat(peso)

    altura = altura / 100


    var massa = peso / (altura * altura)

    var classi = ''
    if(massa < 16) {
        classi = ' Baixo peso, muito grave'
    } else if(massa >= 16 && massa <= 16.99) {
        classi = ' Baixo peso, grave'
    } else if(massa >= 17 && massa <= 18.49) {
        classi = ' Baixo peso'
    } else if(massa >= 18.50 && massa <= 24.99) {
        classi = ' Peso normal'
    } else if(massa >= 25 && massa <= 29.99) {
        classi = ' Sobrepeso'
    } else if(massa >= 30 && massa <= 34.9) {
        classi = ' Obesidade grau |'
    } else if(massa >= 35 && massa <= 39.99) {
        classi = ' Obesidade grau ||'
    } else if(massa >= 40) {
        classi = ' Obesidade grau |||'
    }

// ------------------ fim da lógica

// ------- joando pra CAIXA DE RESPOSTA
    var x = nome + ' possui indice de massa corporal igual a ' + massa + ', sendo classificado como: ' + classi + '.'

    document.getElementById('mensagem').value = x
    
    document.getElementById('name').value = ''
    document.getElementById('alt').value = ''
    document.getElementById('kg').value = ''

}






