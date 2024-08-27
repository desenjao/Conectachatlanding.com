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


  document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o redirecionamento padrão do formulário

  const form = event.target;
  const data = new FormData(form);

  fetch("https://sheetdb.io/api/v1/9y5q1swxhx571", {
    method: "POST",
    body: data,
  })
  .then(response => {
    if (response.ok) {
      // Redireciona para a página desejada após o envio bem-sucedido
      window.location.href = "https://chat.conectasolucoesinteligentes.com/signup";
    } else {
      alert("Houve um problema ao enviar os dados. Por favor, tente novamente.");
    }
  })
  .catch(error => {
    console.error("Erro:", error);
    alert("Erro ao enviar os dados.");
  });
});


  
  
