function hora(){
    //relogio receba a data atual
    let tempo = new Date();
   let relogio = Document.getElementByid('relogio')
   let horas = tempo.getHours();
   let minutos = tempo.getMinutos();
   let segundos = tempo.getSeconds();

   relogio.innerHTML

  }
  
  hora();