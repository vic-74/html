unction atualizarRelogio() {
    const relogio = document.getElementById('relogio')
    //Aqui eu vou mexer no elemento com ID 'relógio' no HTML
    const agora = new Date();
    agora.setHours(agora.getHours()-3)
    //Essa linha serve para definir para o fuso horário correto
    const horas = String(agora.getHours()).padStart(2,'0');
    const minutos = String(agora.getMinutes()).padStart(2,'0');
    const segundos = String(agora.getSeconds()).padStart(2,'0');
    relogioElement.textContent = `${horas}:${minutos}:${segundos} `
}
