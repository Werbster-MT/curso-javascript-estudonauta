function contar() {
    var txtIni = window.document.getElementById('txtini')
    var txtFim = window.document.getElementById('txtfim')
    var txtPas = window.document.getElementById('txtpas')
    var res = window.document.querySelector('div#res')
    
    if(txtIni.value.length == 0 || txtFim.value.length == 0) {     
        res.innerHTML = 'Impossível contar!' 
        window.alert('[ERRO] Faltam dados!')
    }
    
    else {
        if (txtPas.value.length == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            txtPas.value = 1
        }

        let inicio = Number(txtIni.value) 
        let fim = Number(txtFim.value)
        let passo = Number(txtPas.value)
        let msg = ''

        if(fim < inicio) {
            for (let i = inicio; i >= fim; i-=passo){
                msg += `${i} &#x1F449;`
            }
        }
        else {
            for (let i = inicio; i <= fim; i+=passo){
                msg += `${i} &#x1F449;`
            }
        }
        res.innerHTML = `Contando:<br/>${msg}&#x1F3C1;`
    }
}