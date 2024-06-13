



const uele = document.getElementById("character-list");



const paginaAnterior = document.getElementById('prev-page');
const paginaSiguiente = document.getElementById('next-page');






fetch ("https://rickandmortyapi.com/api/character/?page=1")

    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud.`);
      }
      return response.json();
    })
    .then((data) => {
        console.log(data.results);
        let assets = data.results;
        console.log(assets);

        for (let i = 0; i < assets.length; i++) {
            let contenedor = document.createElement("div");
            contenedor.classList.add("contenedor");
            let newElemento = document.createElement("li");
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



    


   
        paginaSiguiente.addEventListener("click", () => {
            fetch ("https://rickandmortyapi.com/api/character/?page=2")

    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud.`);
      }
      return response.json();
    })
    .then((data) => {
        console.log(data.results);
        let assets = data.results;
        console.log(assets);

        for (let i = 0; i < assets.length; i++) {
            let contenedor = document.createElement("div");
            contenedor.classList.add("contenedor2");
            let newElemento = document.createElement("li");
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
            
    })
        paginaAnterior.addEventListener("click", () => {
            fetch ("https://rickandmortyapi.com/api/character/?page=3")

    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud.`);
      }
      return response.json();
    })
    .then((data) => {
        console.log(data.results);
        let assets = data.results;
        console.log(assets);

        for (let i = 0; i < assets.length; i++) {
            let contenedor = document.createElement("div");
            contenedor.classList.add("contenedor");
            let newElemento = document.createElement("li");
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
            
    })
    