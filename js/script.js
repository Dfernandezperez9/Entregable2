


const uele = document.getElementById("character-list");



    const paginaAnterior = document.getElementById('prev-page');
    const paginaSiguiente = document.getElementById('next-page');
    
    let pagina = 1;
    let url = "https://rickandmortyapi.com/api/character/?page=1"
    
    
    
    
    
  function fetchData (url) {
    
    
    fetch (url)
    
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error en la solicitud.`);
          }
          return response.json();
        })
        .then((data) => {
            let assets = data.results;
            
    
            for (let i = 0; i < assets.length; i++) {
                let contenedor = document.createElement("div");
                contenedor.classList.add("contenedor");
                let newElemento = document.createElement("button");
                let imagen = document.createElement("img");
                imagen.src = assets[i].image;
                imagen.alt = `${assets[i].name}`
                let huecoNombre = document.createElement("p");
                let nombre = `<span class='titulos'>Nombre: </span>${assets[i].name}.`
                huecoNombre.innerHTML = nombre;
    
                let huecoEspecie = document.createElement("p");
                let especie = `<span class='titulos'>Especie: </span>${assets[i].species}.`
                huecoEspecie.innerHTML = especie;
    
                newElemento.appendChild(contenedor);
                contenedor.appendChild(imagen);
                contenedor.appendChild(huecoNombre);
                contenedor.appendChild(huecoEspecie);
    
    
                uele.appendChild(newElemento)
                
                
            }
        })
        .catch((error) => {
          console.log(`Error en el envio.`);
        });
        
    }

    fetchData(url)

    paginaSiguiente.addEventListener("click", () => {
      uele.innerHTML = "";
      pagina++
      url = `https://rickandmortyapi.com/api/character/?page=${pagina}`
      fetchData(url);
    })

    paginaAnterior.addEventListener("click", () => {
      uele.innerHTML = "";
      if(pagina === 1) {
        fetchData(url)
      }else{
        pagina--
        url = `https://rickandmortyapi.com/api/character/?page=${pagina}`
      fetchData(url);}
    })

    
   




   
        
     
    
    
    
    
    
    
    
    