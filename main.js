// script.js
let time = 5 * 60 * 60 + 6 * 60 + 4; // 5 horas, 6 minutos e 4 segundos

const countdown = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    // Atualiza o display com dois dígitos
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

    // Reduz 1 segundo
    time--;

    // Parar quando o tempo acabar
    if (time < 0) {
        clearInterval(interval);
        // Adicione qualquer ação necessária quando a contagem terminar
    }
};

// Atualiza a cada segundo
const interval = setInterval(countdown, 1000);


  
  
  