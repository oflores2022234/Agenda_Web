let agregarToDo = document.getElementById('agregarToDo');
let toDoContenedor = document.getElementById('toDoContenedor');
let entrada = document.getElementById('entrada');

agregarToDo.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = entrada.value;
    toDoContenedor.appendChild(paragraph);
    entrada.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContenedor.removeChild(paragraph);
    })
})