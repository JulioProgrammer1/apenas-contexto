//Mudando o título do <caption> dos comentários
var titulocaption = document.querySelector("#comentarios");
titulocaption.textContent = "Comentários";

var botao = document.querySelector("#botao-add");
//Add um escutador de eventos, click
botao.addEventListener("click", function ( event ) {
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
