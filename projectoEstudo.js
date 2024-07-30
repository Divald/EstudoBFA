let listaDeCard = [{
    "nome": "Lamborghini",
    "img": "./imgs/1920x1080_px_car_Lamborghini-648618.jpg",
    "descricao": "Conhecida por seus supercarros de design arrojado e performance extrema."
},
{
    "nome": "Ferrari",
    "img": "./imgs/2kf3qormjrp81.webp",
    "descricao": "Famosa por seus carros esportivos de alto desempenho e exclusividade."
},
{
    "nome": "Porsche",
    "img": "./imgs/e272f6-70586135_2352786718319603_8588253215382831104_o.jpg",
    "descriacao": "Reputada por seus carros esportivos de alta performance e engenharia precisa."
},
{
    "nome": "Mercedes-Benz",
    "img": "./imgs/maxresdefault.jpg",
    "descriacao": "Conhecida por seus veículos de luxo e inovações tecnológicas."
},
{
    "nome": "BMW",
    "img": "./imgs/Nissan-GTR-R36-21.jpg",
    "descriacao": "Famosa por seu desempenho esportivo e luxo."
},
{
    "nome": "OIP",
    "img": "./imgs/OIP.jpg",
    "descriacao": "desempenho esportivo e luxo."
}

]

listaDeCard.map((carro, posicao)=>{
   let listaCard = document.getElementById("cards")
   listaCard.innerHTML += `
          <div class="col-md-4">
            <div class="card m-2">
                <img src=${carro.img} 
                class="card-img-top" alt="carro nome BMW">
                <div class="card-body">
                  <h5 class="card-title">${carro.nome}</h5>
                  <a href="#" class="btn btn-secondary" onclick = "zooModal('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                </div>
              </div>
           </div>
   `
})

function zooModal(posicao){

    let selecionarPosicao = listaDeCard[posicao];
    document.getElementById("nomeCarro").innerHTML = selecionarPosicao.nome;
    document.getElementById("descricao").innerHTML = selecionarPosicao.descricao;
    document.getElementById("imgCarro").src = selecionarPosicao.img;

    new bootstrap.Modal('#modalzoom').show();
}

function alteraTema(){
    let tema = document.querySelector("html").getAttribute ="data-bs-theme";
    
    if(tema === "dark"){

     document.querySelector("html").setAttribute("data-bs-theme", "light");
     document.querySelector("#alteraT").innerHTML =`<i class ="bi bi-moon-high-fill"></i>`;

    }else{

     document.querySelector("html").setAttribute("data-bs-theme", "dark");
     document.querySelector("#alteraT").innerHTML =`<i class ="bi bi-brightness-high-fill"></i>`;

    }
}