window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    let boton = document.querySelector(".botonAgregar")
    boton.addEventListener("mouseover", function(){
        boton.style.backgroundColor = 'orange' 
    })
    boton.addEventListener("mouseout", function(){
        boton.style.backgroundColor = 'green' 
    })


   //palabra secreta
let input = document.querySelector(".secret");
let palabra =[]
let fondoNegro = document.querySelector("body")
let palabraSecreta = ["s","e","c","r","e","t","o"]

    input.addEventListener('keyup', (event) => {
for (let contador = 0; contador < palabraSecreta.length; contador++) {
        event.key == palabraSecreta[contador] ?  palabra.push(event.key): "";
 }
 if (palabra.join("") ==="seecreeto") {
    Swal.fire("SECRETO MAGICO")
    fondoNegro.style.backgroundColor="black"
 }
})
}
