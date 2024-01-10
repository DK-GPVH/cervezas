var code = '<article class="card"><figure class="card__figure"><img src="./imagenes/camba.jpg" class="card__img"></figure><h2 class="card__title"> Cassels Milk Stou</h2><p class="card__paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit mollitia animi, fuga, natus perferendis dolores nesciunt doloremque cum, illum blanditiis eveniet quos! Atque maxime illum harum quibusdam dicta rem neque.</p><span class="card__price"><span class="card__symbol">$</span>75.000</span><a href="#" class="btn__add">AGREGAR</a></article>';

const contain = document.querySelector(".beers");

fetch("./datos/cervezas.json").then(
    (res)=> res.json()
).then(
    (res) => 
    res.forEach(element => {
        const article = document.createElement("article");
        article.className = "card";
        const figure = document.createElement("figure");
        figure.className = "card__figure";
        const img = document.createElement("img");
        img.src =  `${element.img}`;
        img.className = "card__img";
        const h2 = document.createElement("h2");
        h2.className = "card__title";
        h2.appendChild(document.createTextNode(`${element.nombre}`));
        const p = document.createElement("p");
        p.className = "card__paragraph"
        p.appendChild(document.createTextNode(`${element.descripcion}`));
        const span = document.createElement("span");
        span.appendChild(document.createTextNode(`$ ${parseFloat(element.precio).toFixed(3)}`))
        span.className = "card__price";
        const a = document.createElement("a");
        a.href = "#"
        a.className = "btn__add"
        a.appendChild(document.createTextNode("AGREGAR"))
        

        figure.appendChild(img);
        article.appendChild(figure);
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(span);
        article.appendChild(a);

        contain.appendChild(article);
    })
).catch((err) => console.error(err));

const filtrar = document.getElementById("btn__filtrar");

filtrar.addEventListener("click",()=>{
        const hijos = contain.querySelectorAll(".card");
        hijos.forEach(hijo => {
            contain.removeChild(hijo);
        })

    if(document.querySelector("#input__rubia").checked || document.querySelector("#input__morena").checked || document.querySelector("#input__roja").checked){
        fetch("./datos/cervezas.json").then(
            (res)=> res.json()
        ).then(
            (res) => 
            res.forEach(element => {
                if((document.querySelector("#input__rubia").checked && document.querySelector("#input__rubia").value == element.tipo) || (document.querySelector("#input__morena").checked && document.querySelector("#input__morena").value == element.tipo) || (document.querySelector("#input__roja").checked && document.querySelector("#input__roja").value == element.tipo)){
                    dibujar(element);
                }
            })
        ).catch((err) => console.error(err));
    };
})

const dibujar = (element)=>{
    const article = document.createElement("article");
                article.className = "card";
                const figure = document.createElement("figure");
                figure.className = "card__figure";
                const img = document.createElement("img");
                img.src =  `${element.img}`;
                img.className = "card__img";
                const h2 = document.createElement("h2");
                h2.className = "card__title";
                h2.appendChild(document.createTextNode(`${element.nombre}`));
                const p = document.createElement("p");
                p.className = "card__paragraph"
                p.appendChild(document.createTextNode(`${element.descripcion}`));
                const span = document.createElement("span");
                span.appendChild(document.createTextNode(`$ ${parseFloat(element.precio).toFixed(3)}`))
                span.className = "card__price";
                const a = document.createElement("a");
                a.href = "#"
                a.className = "btn__add"
                a.appendChild(document.createTextNode("AGREGAR"))
                
        
                figure.appendChild(img);
                article.appendChild(figure);
                article.appendChild(h2);
                article.appendChild(p);
                article.appendChild(span);
                article.appendChild(a);
        
                contain.appendChild(article);
}

const buttonOpenModal = document.querySelector(".filter__btn");
const buttonCloseModal = document.querySelector(".modal__close");

const dialog = document.querySelector(".modal");

buttonOpenModal.addEventListener("click",() => {
    dialog.showModal();
});

buttonCloseModal.addEventListener("click", () =>{
    dialog.setAttribute("close","");
    
    dialog.addEventListener("animationend", ()=>{
        dialog.removeAttribute("close");
        dialog.close();
    },{once: true});
});

