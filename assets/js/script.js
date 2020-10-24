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
/*tentativa de fazer um loop pra mostrar os dados dos botões de like*/
$(function(){/*
    var i = 1
    for(i; i < 15; i++){
        var idLike = "like"
        var idDislike = "dislike"
        idLikeNovo = idLike + i
        idDislikeNovo = idDislike + i
        let like = $("#" + idLikeNovo).data("like")
        let dislike = $("#" + idDislikeNovo).data("dislike")
    
        $("#" + idLikeNovo).addClass("badge bagde-secondary")
        $("#" + idDislikeNovo).addClass("badge bagde-secondary")
    
        $("#"+idLikeNovo).text(like)
        $("#" + idDislikeNovo).text(dislike)
        
    }*/
    $("i.fa-thumbs-up").each(function(index){
        let id = $(this).parent().children("span:eq(0)").attr('id')
  
        let text = $("#"+id).data("like")
        $("#"+id).text(text)
     })
     $("i.fa-thumbs-down").each(function(index){
        let id = $(this).parent().children("span:eq(0)").attr('id')
  
        let text = $("#"+id).data("dislike")
        $("#"+id).text(text)
     })
})
$("i.fa-thumbs-up, i.fa-thumbs-down").click(function(){
    if($(this).hasClass("fa-thumbs-up")){

       if($(this).hasClass("far")){
       
          $(this).removeClass("far ").addClass("fas")
          let idLike = $(this).parent().children("span:eq(0)").attr('id')
          let like = $("#"+idLike).data("like")
          $("#"+idLike).text(like+1)

          $(this).parent().parent().children("div:eq(1)").children("i:eq(0)").removeClass("fas ").addClass("far ")
          let idDislike = $(this).parent().parent().children("div:eq(1)").children("span:eq(0)").attr('id')
          
          let dislike = $("#"+idDislike).data("dislike")
          $("#"+idDislike).text(dislike)
       
       }else{

          $(this).removeClass("fas").addClass("far")
          let idLike = $(this).parent().children("span:eq(0)").attr('id')
          let like = $("#"+idLike).data("like")
          $("#"+idLike).text(like)

       }

    }else if($(this).hasClass("fa-thumbs-down")){

       if($(this).hasClass("far")){

          $(this).removeClass("far ").addClass("fas")

          let idDislike = $(this).parent().children("span:eq(0)").attr('id')
          let dislike = $("#"+idDislike).data("dislike")
          $("#"+idDislike).text(dislike+1)

          $(this).parent().parent().children("div:eq(0)").children("i:eq(0)").removeClass("fas ").addClass("far ")
          let idLike = $(this).parent().parent().children("div:eq(0)").children("span:eq(0)").attr('id')
          console.log(idLike)
          let like = $("#"+idLike).data("like")
          $("#"+idLike).text(like)

       }else{

          $(this).removeClass("fas").addClass("far")
          let idDislike = $(this).parent().children("span:eq(0)").attr('id')
          let dislike = $("#"+idDislike).data("dislike")
          $("#"+idDislike).text(dislike)

       }

    }
 })
/*
$(function () {

    /* botão de like
    let like1 = $("#like1").data("like")
    let dislike1 = $("#dislike1").data("dislike")

    $("#like1").addClass("badge bagde-secondary")
    $("#dislike1").addClass("badge bagde-secondary")

    $("#like1").text(like1)
    $("#dislike1").text(dislike1)
    
    $("#button-like1").click(function(){
        $("#like1").text(like1 + 1)
    })

    /* botão de like1
    let like2 = $("#like2").data("like")
    let dislike2 = $("#dislike2").data("dislike")

    $("#like2").addClass("badge bagde-secondary")
    $("#dislike2").addClass("badge bagde-secondary")

    $("#like2").text(like2)
    $("#dislike2").text(dislike2)

    /* botão de like
    let like3 = $("#like3").data("like")
    let dislike3 = $("#dislike3").data("dislike")

    $("#like3").addClass("badge bagde-secondary")
    $("#dislike3").addClass("badge bagde-secondary")

    $("#like3").text(like3)
    $("#dislike3").text(dislike3)

    /* botão de like
    let like4 = $("#like4").data("like")
    let dislike4 = $("#dislike4").data("dislike")

    $("#like4").addClass("badge bagde-secondary")
    $("#dislike4").addClass("badge bagde-secondary")

    $("#like4").text(like4)
    $("#dislike4").text(dislike4)
    
    /* botão de like
    let like5 = $("#like5").data("like")
    let dislike5 = $("#dislike5").data("dislike")

    $("#like5").addClass("badge bagde-secondary")
    $("#dislike5").addClass("badge bagde-secondary")

    $("#like5").text(like5)
    $("#dislike5").text(dislike5)

    
    /* botão de like
    let like6 = $("#like6").data("like")
    let dislike6 = $("#dislike6").data("dislike")

    $("#like6").addClass("badge bagde-secondary")
    $("#dislike6").addClass("badge bagde-secondary")

    $("#like6").text(like6)
    $("#dislike6").text(dislike6)

    
    /* botão de like
    let like7 = $("#like7").data("like")
    let dislike7 = $("#dislike7").data("dislike")

    $("#like7").addClass("badge bagde-secondary")
    $("#dislike7").addClass("badge bagde-secondary")

    $("#like7").text(like7)
    $("#dislike7").text(dislike7)

    
    /* botão de like
    let like8 = $("#like8").data("like")
    let dislike8 = $("#dislike8").data("dislike")

    $("#like8").addClass("badge bagde-secondary")
    $("#dislike8").addClass("badge bagde-secondary")

    $("#like8").text(like8)
    $("#dislike8").text(dislike8)

    
    /* botão de like
    let like9 = $("#like9").data("like")
    let dislike9 = $("#dislike9").data("dislike")

    $("#like9").addClass("badge bagde-secondary")
    $("#dislike9").addClass("badge bagde-secondary")

    $("#like9").text(like9)
    $("#dislike9").text(dislike9)

    
    /* botão de like
    let like10 = $("#like10").data("like")
    let dislike10 = $("#dislike10").data("dislike")

    $("#like10").addClass("badge bagde-secondary")
    $("#dislike10").addClass("badge bagde-secondary")

    $("#like10").text(like10)
    $("#dislike10").text(dislike10)

    /* botão de like
    let like11 = $("#like11").data("like")
    let dislike11 = $("#dislike11").data("dislike")

    $("#like11").addClass("badge bagde-secondary")
    $("#dislike11").addClass("badge bagde-secondary")

    $("#like11").text(like11)
    $("#dislike11").text(dislike11)
    

})*/

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
    } else {
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
