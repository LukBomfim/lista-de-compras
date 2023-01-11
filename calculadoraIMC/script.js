function calcular(){
    var peso = Number((document.getElementById('pesotxt')).value)
    var alt = Number((document.getElementById('alttxt')).value)
    var result = document.getElementById('result')

    if (peso == 0 || alt == 0) { // CASO NÃO TENHA COLOCADO UMA DAS INFORMAÇÕES
        alert('Verifique os dados e tente novamente')
    } else{
        var imc = peso/alt**2

            // CONDIÇÕES DO RESULTADO
        if (imc < 17){
            var msg = 'muito abaixo do peso!'
        } else if (imc < 18.5){
            var msg = 'abaixo do peso.'
        } else if (imc < 24.9){
            var msg = 'no peso ideal.'
        } else if (imc < 29.9){
            var msg = 'levemente acima do peso.'
        } else if (imc < 34.9){
            var msg = 'com obesidade nível I'
        } else if (imc < 39.9){
            var msg = 'com obesidade nível II'
        } else {
            var msg = 'com obesidade grau III (Mórbida)'
        }
        
        result.innerHTML = `IMC: ${imc.toFixed(2).replace('.', ',')} <br>
                            Você está <u>${msg}</u>`
    }
}