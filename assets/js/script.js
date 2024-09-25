// Obtém o formulário pelo ID
const form = document.getElementById('form');

// Adiciona um listener para o evento de envio do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevê o comportamento padrão do formulário (recarregar a página)

    // Obtém os valores de peso e altura dos campos de entrada
    const weight = document.getElementById('weight').value; // Peso em kg
    const height = document.getElementById('height').value; // Altura em metros

    // Calcula o IMC (Índice de Massa Corporal) e fixa a precisão em 2 casas decimais
    const bmi = (weight / (height * height)).toFixed(2);

    // Obtém o elemento onde o valor do IMC será exibido
    const value = document.getElementById('value');
    let description = ''; // Variável para armazenar a descrição do IMC

    // Adiciona a classe 'attention' para indicar que o valor do IMC deve chamar a atenção
    value.classList.add('attention');

    // Remove a classe 'hidden' para exibir a seção de informações
    document.getElementById('infos').classList.remove('hidden');

    // Condicionais para determinar a descrição com base no valor do IMC
    if (bmi < 18.5) {
        description = 'Você está Abaixo do Peso!';
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Você está no Peso Ideal!';
        value.classList.remove('attention'); // Remove a classe de atenção
        value.classList.add('normal'); // Adiciona a classe normal para o peso ideal
    } else if (bmi > 25 && bmi <= 30) {
        description = 'Você está Acima do Peso!';
    } else if (bmi > 30 && bmi <= 35) {
        description = 'Você está Com Obesidade Moderada!';
    } else if (bmi > 35 && bmi <= 40) {
        description = 'Você está Com Obesidade Severa!';
    } else {
        description = 'Você está Com Obesidade Morbida!';
    }

    // Substitui o ponto por vírgula para exibir o IMC no formato brasileiro
    value.textContent = bmi.replace('.', ',');
    // Atualiza o conteúdo da descrição do IMC
    document.getElementById('description').textContent = description;
});
