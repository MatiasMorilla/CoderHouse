const p1 = new Productos(1, "Imperial", 50, 5000, "../images/descarga.png");

p1.innerHTML = `<div class="card">
                    <h3 class="title">`+ p1.nombre +`</h3>
                    <img src="`+ p1.img +`" alt="Imagen Mate" class="info">
                    <div class="footer-card">
                        <button class="btn-card">Agregar</button>
                        <span class="price-card">$`+ p1.precio +`</span>
                    </div>
                </div>`;
const container = document.getElementById('p');
let p = document.createElement("div");
p.innerHTML = p1.innerHTML;
container.appendChild(p);


