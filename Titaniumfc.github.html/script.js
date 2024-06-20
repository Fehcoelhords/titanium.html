// Adiciona funcionalidade ao formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    // Aqui você pode adicionar funcionalidade para enviar a mensagem via AJAX ou outro método
});



// Define a data e hora do jogo
var gameDate = new Date("June 20, 2024 16:00:00").getTime();
console.log("Data do jogo definida para: " + new Date(gameDate).toString());

// Atualize o contador a cada segundo
var countdown = setInterval(function() {
    var now = new Date().getTime();
    var timeLeft = gameDate - now;
    console.log("Tempo restante (ms): " + timeLeft);

    // Calcula o tempo restante
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Exibir o resultado no elemento com id="timer"
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

    // Exibir mensagem quando o tempo acabar
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "O jogo já começou!";
    }
}, 1000);

// carrosel de imagens 1, 2 ,3

let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    const newTransformValue = -currentIndex * 100 + '%';
    slides.style.transform = `translateX(${newTransformValue})`;
}

setInterval(showNextSlide, 3000); // 3 segundos

// final carrosel de imagens 1, 2 ,3


// Texto automatico
const typingTextElement = document.getElementById('typing-text');
const text = "Texto que deseja que seja digitado letra por letra.";

let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Ajuste o tempo ENTRE AS LETRAS
    }
}

// Chama a função para iniciar a animaçãooo
typeWriter();
// final Texto automatico