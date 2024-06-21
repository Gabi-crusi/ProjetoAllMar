document.getElementById('reservaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let data = document.getElementById('data').value;
    let hora = document.getElementById('hora').value;
    let quantidade = document.getElementById('quantidade').value;

    let tabela = document.getElementById('tabelaReservas').getElementsByTagName('tbody')[0];
    let novaLinha = tabela.insertRow();

    let celulaNome = novaLinha.insertCell(0);
    let celulaTelefone = novaLinha.insertCell(1);
    let celulaData = novaLinha.insertCell(2);
    let celulaHora = novaLinha.insertCell(3);
    let celulaQuantidade = novaLinha.insertCell(4);

    celulaNome.textContent = nome;
    celulaTelefone.textContent = telefone;
    celulaData.textContent = data;
    celulaHora.textContent = hora;
    celulaQuantidade.textContent = quantidade;

    document.getElementById('reservaForm').reset();
});

function imprimirReservas() {
    window.print();
}
