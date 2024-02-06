function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    

    msg.innerHTML = `Agora sâo ${hora} horas.`
    if(hora >= 6 && hora < 12){
        //Bom Dia 
        img.src = 'foto_manha.webp'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <= 18){
        // Boa Tarde
        img.src = 'foto_tarde.webp'
        document.body.style.background = '#b9846f'
    }else{
        //Boa noite
        img.src = 'foto_noite.webp'
        document.body.style.background = '#515154'
    }

}