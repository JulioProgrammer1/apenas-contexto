//Mudando o título do <caption> dos comentários
var titulocaption = document.querySelector("#comentarios");
titulocaption.textContent = "Comentários";

var botao = document.querySelector("#botao-add");
//Add um escutador de eventos, click
botao.addEventListener("click", function(event) {
    event.preventDefault();
    //Trabalhando o <form> que adiciona comentário
    var formComentario = document.querySelector("#fromComentarios");
    var nome = formComentario.nome.value;
    var comentario = formComentario.comentario.value;

    //Creando uma table rows <tr>
    var comentarioTr = document.createElement("tr");
    //Creando duas table data <td>
    var nomeTd = document.createElement("td");
    var comentarioTd = document.createElement("td");
    //Pondo os valores dos <input>(s) nas tags criadas
    nomeTd.textContent = nome;
    comentarioTd.textContent = comentario;

    //Colocando todas as table data(s) como filhas da table rows.
    comentarioTr.appendChild(nomeTd);
    comentarioTr.appendChild(comentarioTd);
    //Colocando a table rows como filha da table
    var tabelaComentarios = document.querySelector("#lista-comentarios");
    tabelaComentarios.appendChild(comentarioTr);

    //Lipando os <input>(s)
    formComentario.nome.value = '';
    formComentario.comentario.value = '';
});

//Muda fotos do painel
function mudaImagemNatureza() {
    document.getElementById("lista-acoes-fotos").src = "img/natureza5.jpg";
}

function mudaImagemMente() {
    document.getElementById("lista-acoes-fotos").src = "img/mente.jpeg";
}

function mudaImagemCorpo() {
    document.getElementById("lista-acoes-fotos").src = "img/corpo.jpeg";
}

function mudaImagemEstudo() {
    document.getElementById("lista-acoes-fotos").src = "img/estudos.jpeg";
}

function mudaImagemSocial() {
    document.getElementById("lista-acoes-fotos").src = "img/social.jpeg";
}

function mudaImagemSaude() {
    document.getElementById("lista-acoes-fotos").src = "img/saude.jpeg";
}

function mudaImagemMomento() {
    document.getElementById("lista-acoes-fotos").src = "img/seumomento.jpeg";
}

//Natureza
var natureza = document.querySelector("#natureza");
natureza.addEventListener("click", mudaImagemNatureza);
natureza.addEventListener("mousemove", mudaImagemNatureza);

//Mente
var mente = document.querySelector("#mente");
mente.addEventListener("click", mudaImagemMente);
mente.addEventListener("mousemove", mudaImagemMente);

//Corpo
var corpo = document.querySelector("#corpo");
corpo.addEventListener("click", mudaImagemCorpo);
corpo.addEventListener("mousemove", mudaImagemCorpo);

//Estudos
var estudos = document.querySelector("#estudos");
estudos.addEventListener("click", mudaImagemEstudo);
estudos.addEventListener("mousemove", mudaImagemEstudo);

//Vida-social
var social = document.querySelector("#vida-social");
social.addEventListener("click", mudaImagemSocial);
social.addEventListener("mousemove", mudaImagemSocial);

//Saude
var saude = document.querySelector("#saude");
saude.addEventListener("click", mudaImagemSaude);
saude.addEventListener("mousemove", mudaImagemSaude);

//Momento
var momento = document.querySelector("#momento");
momento.addEventListener("click", mudaImagemMomento);
momento.addEventListener("mousemove", mudaImagemMomento);

//Mudando a foto do local
function mudaFotoLocalTel() {
    document.getElementById("local-foto-casa").src = "img/contato.png";
}

function mudaFotoLocalCasa() {
    document.getElementById("local-foto-casa").src = "img/home.png";
}

//index.html
var contato = document.querySelector(".contato");
contato.addEventListener("click", mudaFotoLocalTel);
contato.addEventListener("mousemove", mudaFotoLocalTel);

var home = document.querySelector(".home");
home.addEventListener("mousemove", mudaFotoLocalCasa);

var mainindex = document.querySelector("#main-index");
mainindex.addEventListener("click", mudaFotoLocalCasa);
mainindex.addEventListener("mousemove", mudaFotoLocalCasa);