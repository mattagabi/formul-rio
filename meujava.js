function submitForm() {
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var genero = document.querySelector('input[name="genero"]:checked').value;
    var atividades = [];
    var checkboxes = document.querySelectorAll('input[name="atividades"]:checked');
    checkboxes.forEach(function (checkbox) {
        atividades.push(checkbox.value);
    });

    var imc = calcularIMC(peso, altura);

    var corDeFundo = '#f8f9fa';  
    var corTexto = '#495057';   
    var mensagemSaude = '';

    if (nome.toLowerCase() === "maria" && idade > 10 && atividades.length === 5) {
        corDeFundo = '#ffcccb';  
        corTexto = '#721c24';   
    }

    if (imc < 18.5) {
        mensagemSaude = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        mensagemSaude = 'Peso saudável';
    } else if (imc >= 25 && imc < 29.9) {
        mensagemSaude = 'Sobrepeso';
    } else {
        mensagemSaude = 'Obesidade';
    }

    document.body.style.backgroundColor = corDeFundo;
    document.body.style.color = corTexto;

    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<h4>Seleções do Usuário:</h4>
                              <p><strong>Nome:</strong> ${nome}</p>
                              <p><strong>Idade:</strong> ${idade}</p>
                              <p><strong>Gênero:</strong> ${genero}</p>
                              <p><strong>Atividades:</strong> ${atividades.join(', ')}</p>
                              <h4>Resultado:</h4>
                              <p><strong>IMC:</strong> ${imc.toFixed(2)}</p>
                              <p><strong>Saúde:</strong> ${mensagemSaude}</p>`;
}

function calcularIMC(peso, altura) {
    altura = altura / 100; 
    return peso / (altura * altura);
}
