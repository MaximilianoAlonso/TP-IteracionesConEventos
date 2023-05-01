window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let logo = document.querySelector("figure");
    logo.addEventListener("mouseover", function(){
        body.style.backgroundColor = 'black'
        
    })
    logo.addEventListener("mouseout", function(){
        body.style.backgroundColor = 'white'
    })
   body.classList.add('fondoMoviesList');         
        
    
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}