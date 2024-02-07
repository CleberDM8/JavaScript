function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados novamente')
    } else{
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var img = document.createElement('img')
        img.getAttribute('id', 'foto')
        var gen = ``
        if(fSex[0].checked){
            gen = 'Homem'
            img.setAttribute('src','imagens/masculino.png')
        } else if(fSex[1].checked){
            gen = 'Mulher'
            img.src = 'imagens/feminino.png'

        }
        res.style.textAlign = 'center'
        res.innerHTML = `voce tem ${idade} anos e se identifica como ${gen}`
        res.appendChild(img)
    }
}
