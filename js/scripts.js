var adicionar = document.getElementById("lista")

function buttonHandler() {
    var texto = document.getElementById("textArea");
    var id = texto.value.replace(/\s/g, '');
    adicionar.innerHTML +=`<div><input type="checkbox" id=${id} class="check" name="${id}" ><label for="${id}">${texto.value}</label></div>`   
    var tarefas = document.querySelectorAll(".check")
    for(let i = 0; i < tarefas.length; i++) {
        tarefas[i].onclick = function() {
            this.parentNode.style.textDecoration = "line-through";
            this.setAttribute('checked', '')
        }
    }
}