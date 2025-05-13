let servicos = [];

function adicionarServico() {
    const nome = document.getElementById("nomeServico").value.trim();
    const descricao = document.getElementById("descricaoServico").value.trim();

    if (!nome || !descricao) {
        alert("Preencha todos os campos!");
        return;
    }

    servicos.push({ nome, descricao });
    document.getElementById("nomeServico").value = "";
    document.getElementById("descricaoServico").value = "";

    atualizarTabela();
}

function excluirServico(index) {
    if (confirm("Tem certeza que deseja excluir este serviço?")) {
        servicos.splice(index, 1);
        atualizarTabela();
    }
}

function atualizarTabela() {
    const corpoTabela = document.getElementById("listaServicos");
    corpoTabela.innerHTML = "";

    servicos.forEach((servico, index) => {
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${servico.nome}</td>
            <td>${servico.descricao}</td>
            <td>
                <button onclick="excluirServico(${index})">Excluir</button>
            </td>
        `;

        corpoTabela.appendChild(linha);
    });
}
function toggleSubmenu() {
    const submenu = document.getElementById("submenu");
    const seta = document.getElementById("seta");

    if (submenu.style.display === "block") {
        submenu.style.display = "none";
        seta.innerHTML = "▼";
    } else {
        submenu.style.display = "block";
        seta.innerHTML = "▲";
    }
}