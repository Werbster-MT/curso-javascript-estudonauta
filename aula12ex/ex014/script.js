function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom Dia
        foto.style.backgroundImage = 'url("imagens/manha.jpg")'
        document.body.style.background = "#C8C39C"
    }

    else if (hora >= 12 && hora < 18) {
        // Boa Tarde
        foto.style.backgroundImage = 'url("imagens/tarde.jpg")'
        document.body.style.background = "#C6601D"
    }

    else {
        // Boa Noite
        foto.style.backgroundImage = 'url("imagens/noite.jpg")'
        document.body.style.background = "#1B2F3A"
    }
}