var res = window.document.getElementById('res')
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var gen = ''
        
        // Criando imagem
        var img = document.createElement('div')
        img.setAttribute('id', 'foto')
       
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.style.backgroundImage = 'url("imagens/bebe_masculino.jpg")'
            }
            else if (idade < 21) {
                // Jovem
                img.style.backgroundImage = 'url("imagens/jovem_masculino.jpg")'
            }
            else if (idade < 50) {
                // Adulto
                img.style.backgroundImage = 'url("imagens/adulto_masculino.jpg")'
            }
            else {
                // Idoso
                img.style.backgroundImage = 'url("imagens/idoso_masculino.jpg")'
            }

        } else {
            gen = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.style.backgroundImage = 'url("imagens/bebe_feminino.jpg")'
            }
            else if (idade < 21) {
                // Jovem
                img.style.backgroundImage = 'url("imagens/jovem_feminino.jpg")'
            }
            else if (idade < 50) {
                // Adulto
                img.style.backgroundImage = 'url("imagens/adulto_feminino.jpg")'
            }
            else {
                // Idoso
                img.style.backgroundImage = 'url("imagens/idoso_feminino.jpg")'
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos
        .`
        res.appendChild(img)
    }
}