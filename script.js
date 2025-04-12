// Función para mostrar el contador atras
function actualizarCuentaAtras() 
{
    const ahora = new Date();
    const hoy = ahora.getDate();
    const mes = ahora.getMonth();
    const añoActual = ahora.getFullYear();

    let objetivo;
    
    if ((mes === 8 && hoy > 28) || mes > 8) 
    {
      objetivo = new Date(añoActual + 1, 8, 27, 0, 0, 0);
    } else if (hoy <= 27)
    {
      objetivo = new Date(añoActual, 8, 27, 0, 0, 0);
    } else 
    {
      objetivo = new Date(añoActual, 8, 28, 0, 0, 0);
    }

    const diferencia = objetivo - ahora;

    //Este condicional da el aviso si llego el día del evento
    if (diferencia <= 0)
    {
      document.getElementById("cuenta_atras").innerText = "¡Es hoy!";
      return;
    }

    //Dimensiones de tiempo para días, horas, minutos y segundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    //Obtenemos el elemento HTML para poder darle los datos en formato texto y que los rederize 
    document.getElementById("cuenta_atras").innerText = 
      `${dias} días, ${horas} horas ${minutos} minutos ${segundos} segundos`;
  }

  //Cada segundo se actualiza la web para mostrar el contador en tiempo real
  setInterval(actualizarCuentaAtras, 1000);
  //Llamada a la función de cuenta atras
  actualizarCuentaAtras(); 