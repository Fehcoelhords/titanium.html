// Adiciona funcionalidade ao formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    // Aqui você pode adicionar funcionalidade para enviar a mensagem via AJAX ou outro método
});



let n1 = parseInt(window.prompt('Digite um número'))
let n2 = parseInt(prompt('Digite um número'))
let r = n1 + n2 

alert('A soma dos valores é  '+ r)