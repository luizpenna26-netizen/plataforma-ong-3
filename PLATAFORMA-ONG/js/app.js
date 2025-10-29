document.getElementById('titulo').innerText = "Bem-vindo à ONG Esperança!";
async function carregarPagina(pagina) {
  const resposta = await fetch(pagina);
  const html = await resposta.text();
  document.getElementById('conteudo').innerHTML = html;
}

// Exemplo de uso:
document.querySelector('a[href="projetos.html"]').addEventListener('click', e => {
  e.preventDefault();
  carregarPagina('projetos.html');
});
// Formulario
document.getElementById('formCadastro').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  if (nome === "" || email === "") {
    alert("Por favor, preencha todos os campos obrigatórios.");
  } else {
    alert("Cadastro realizado com sucesso!");
  }
});

//cards
const projetos = [
  { titulo: "Educação para Todos", descricao: "Aulas gratuitas para crianças." },
  { titulo: "Alimentar com Amor", descricao: "Doações semanais de alimentos." }
];

const container = document.getElementById("listaProjetos");

projetos.forEach(projeto => {
  const card = `
    <div class="card">
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
    </div>
  `;
  container.innerHTML += card;
});

