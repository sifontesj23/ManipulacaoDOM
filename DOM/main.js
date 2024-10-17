function enviarFormulario (){
    let inputNome = document.querySelector("#name")
    console.log(inputNome.value)
    let inputEdade = document.querySelector("#edade")
    console.log(inputEdade.value)
    let inputEmail = document.querySelector("#email")
    console.log(inputEmail.value)

    let multiplica = inputEdade.value * 2
    console.log(multiplica) 

    document.querySelector('#resultado').innerHTML = 'Hola ' + inputNome.value + '  seu edade é: ' + inputEdade.value
    document.querySelector('#resultadoEdade').innerHTML = "Su Edade multiplicada por 2 =" + multiplica
}

