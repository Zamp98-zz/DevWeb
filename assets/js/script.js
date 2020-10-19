/// <reference path="../../typings/globals/jquery/index.d.ts"/>
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toogle="popover"]').popover();

    $("#botaoEnviar").click(function () {
        /* validando o nome*/
        let nome_valido = validaCampoFunction("#nomeRegistro")
        let emailValido = validaCampoFunction("#emailRegistro")
        let cpfValido = validaCampoFunction("#cpf")
        let cepValido = validaCampoFunction("#cep")
        let telefoneValido = validaCampoFunction("#telefone")
        let respostaValida = validaRespostaFunction()
        let sexoValido = validaSexoFunction()
        let objetivoValido = validaObjetivoFunction()
        let soubeValido = validaSoubeFunction()
        let termosValido = validaTermosFunction()


        if (nome_valido && emailValido && cpfValido && cepValido && telefoneValido && sexoValido && respostaValida && objetivoValido && soubeValido && termosValido) {
            alert("deu certo")
            $('#registroModal').modal('hide')

        } else {
            alert("Campo(s) errado(s). Verifique o seu formulário.")
            alert(soubeValido)
        }
    })
    $("#botaoLogin").click(function () {
        let loginValido = validaCampoFunction("#userEmail")
        let senhaValida = validaCampoFunction("#senhaLogin")
        if (loginValido && senhaValida) {
            $('#loginModal').modal('hide')
        } else if (senhaValida == false && loginValido == false) {
            alert("E-mail e Senha inválidos")
        } else if (loginValido == false && senhaValida) {
            alert("login invalido")
        } else {
            alert("senha inválida")
        }
    })
})

function validaObjetivoFunction() {
    let objetivo = $("#objetivo")

    if (objetivo.val() === '') {
        objetivo.addClass("is-invalid")
        objetivo.removeClass("is-valid")
        return false
    }
    else {
        objetivo.removeClass("is-invalid")
        objetivo.addClass("is-valid")
        return true
    }
}

function validaCampoFunction(id) {
    let campo = $(id)
    if (campo.val() == '') {
        campo.addClass("is-invalid")
        campo.removeClass("is-valid")
        return false
    } else {
        campo.removeClass("is-invalid")
        campo.addClass("is-valid")
        return true
    }
}
function validaSexoFunction() {
    let sexo_masc = $("#sexo-masc")
    let sexo_fem = $("#sexo-fem")

    let botoes = $("input[name='sexo']:checked")
    if (botoes.length === 0) {
        sexo_masc.addClass("is-invalid")
        sexo_masc.removeClass("is-valid")
        sexo_fem.addClass("is-invalid")
        sexo_fem.removeClass("is-valid")
        $("#sexo-feedback").addClass("d-block")
        return false
    }
    else {
        sexo_masc.removeClass("is-invalid")
        sexo_masc.addClass("is-valid")
        sexo_fem.removeClass("is-invalid")
        sexo_fem.addClass("is-valid")
        $("#sexo-feedback").removeClass("d-block")
        return true
    }
}
function validaRespostaFunction() {
    let simInfo = $("#sim")
    let naoInfo = $("#nao")

    let botoes = $("input[name='resposta']:checked")
    if (botoes.length === 0) {
        simInfo.addClass("is-invalid")
        simInfo.removeClass("is-valid")
        naoInfo.addClass("is-invalid")
        naoInfo.removeClass("is-valid")
        $("#resposta-feedback").addClass("d-block")
        return false
    }
    else {
        simInfo.removeClass("is-invalid")
        simInfo.addClass("is-valid")
        naoInfo.removeClass("is-invalid")
        naoInfo.addClass("is-valid")
        $("#resposta-feedback").removeClass("d-block")
        return true
    }
}
function validaTermosFunction() {
    let termos = $("#termosCheck")
    let botoes = $("input.termos:checked")
    if (botoes.length === 0) {
        termos.addClass("is-invalid")
        termos.removeClass("is-valid")
        return false
    }else{
        termos.removeClass("is-invalid")
        termos.addClass("is-valid")
        return true
    }

}
function validaSoubeFunction() {

    let facebook = $("#facebookCheck")
    let twitter = $("#twitterCheck")
    let youtube = $("#youtubeCheck")
    let email = $("#emailCheck")
    let recomendado = $("#recomendadoCheck")
    let outros = $("#outrosCheck")

    let soube_feedback = $("#soube-feedback")

    let botoes = $("input.soube:checked")
    if (botoes.length === 0) {

        facebook.addClass("is-invalid")
        facebook.removeClass("is-valid")

        twitter.addClass("is-invalid")
        twitter.removeClass("is-valid")

        youtube.addClass("is-invalid")
        youtube.removeClass("is-valid")

        email.addClass("is-invalid")
        email.removeClass("is-valid")

        recomendado.addClass("is-invalid")
        recomendado.removeClass("is-valid")

        outros.addClass("is-invalid")
        outros.removeClass("is-valid")

        soube_feedback.addClass("d-block")
        return false
    }
    else {

        facebook.removeClass("is-invalid")
        facebook.addClass("is-valid")

        twitter.removeClass("is-invalid")
        twitter.addClass("is-valid")

        youtube.removeClass("is-invalid")
        youtube.addClass("is-valid")

        email.removeClass("is-invalid")
        email.addClass("is-valid")

        recomendado.removeClass("is-invalid")
        recomendado.addClass("is-valid")

        outros.removeClass("is-invalid")
        outros.addClass("is-valid")

        soube_feedback.removeClass("d-block")
        return true
    }
}
