const urlJSON = 'https://jsonserver-8.gustavovilarino.repl.co/album';
 var output1 = '';
 var output2 = '';

var xhr = new XMLHttpRequest();  
xhr.open( 'GET', urlJSON, true );  
xhr.onload = function() {
  var album1 = JSON.parse(xhr.responseText);
  if(xhr.readyState == 4 && xhr.status == 200) 
  { 
    for(var i = 0; i < 4; i++) 
      {

        output1 += ` <div class="col-md-3 col-sm-12">
                   <a href="album${i+1}.html"><div class="card" style="width: 100%;">
                        <img src="${album1[i].url}" class="card-img-top">
                        <div class="card-body" data-id = ${album1[i].id}>
                          <p class="card-text text-center"><strong> ${album1[i].titulo}</strong></p>
                          <p class="card-text">${album1[i].descricao} 
                          </p>
                        </div>
                      </div></a>
                </div>`
      }

    document.getElementById('primeiraLinha').innerHTML = output1;

  
  }
  else 
  {
    console.log("Erro ao buscar o album");
  }  
}
xhr.send(null);



var xhr2 = new XMLHttpRequest();  
xhr2.open('GET', urlJSON, true );  
xhr2.send(null);
xhr2.onload = function() {
  var album2 = JSON.parse(xhr2.responseText);
  if(xhr2.readyState == 4 && xhr2.status == 200) 
  { 
    for(var i = 4; i < album2.length; i++) 
      {

        output2 += ` <div class="col-md-3 col-sm-12">
                   <a href="album${i+1}.html"><div class="card" style="width: 100%;">
                        <img src="${album2[i].url}" class="card-img-top" alt="Praia Ponta dos Castelhanos - BA">
                        <div class="card-body" data-id = ${album2[i].id} >
                          <p class="card-text text-center"><strong> ${album2[i].titulo}</strong></p>
                          <p class="card-text">${album2[i].descricao} 
                          </p>
                        </div>
                      </div></a>
                </div>`
      }

    document.getElementById('segundaLinha').innerHTML = output2;


  }
  else 
  {
    console.log("Erro ao buscar o album");
  }  
}


const urlDestaques = 'https://jsonserver-8.gustavovilarino.repl.co/destaques';
var outputDestaques = '';
var  quantSlides = ' ';
var respostaAlbumDestaques = ' ';
var palavra = ' active';
var xhr4 = new XMLHttpRequest();  
  xhr4.open('GET', urlJSON , true);
xhr4.send(null);
xhr4.onload = function() {
   respostaAlbumDestaques = JSON.parse(xhr4.responseText);  
  var xhr3 = new XMLHttpRequest();  
  xhr3.open('GET', urlDestaques, true);
  xhr3.send(null);
  xhr3.onload = function() {
    var destaques = JSON.parse(xhr3.responseText);
    if(xhr3.readyState == 4 && xhr3.status == 200) 
    { 
      for(var i = 0; i < destaques.length; i++) 
        { 
          var id_album = destaques[i].id_album - 1; 
        
            if(i == 0)  {
              
           outputDestaques += 
             ` <div class="carousel-item ${palavra}"  >
          
                            <img src="${respostaAlbumDestaques[id_album].url}" class="d-block w-100" alt="Praia da Costa Brava" style="object-fit: cover;">
                            <div class="carousel-caption d-none d-md-block">
                              <h5>${respostaAlbumDestaques[id_album].titulo} </h5>
                              <p>${destaques[i].texto} </p>
                            </div>
                          </div> 
                          `
            }
          else
            {
              outputDestaques += 
                 ` <div class="carousel-item"  >

                                <img src="${respostaAlbumDestaques[id_album].url}" class="d-block w-100" alt="Praia da Costa Brava" style="object-fit: cover;">
                                <div class="carousel-caption d-none d-md-block">
                                  <h5>${respostaAlbumDestaques[id_album].titulo} </h5>
                                  <p>${destaques[i].texto} </p>
                                </div>
                              </div> 
                              `
            }
           
          
        }
        document.getElementById('conteudoDestaques').innerHTML = outputDestaques;



        for(let i = 0; i < destaques.length; i++)
        {
          quantSlides += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}"
          aria-label="Slide ${i+1}"></button>`
        }

        document.getElementById('quantSlides').innerHTML = quantSlides;
       
    }
    else 
     {
       console.log('Erro ao carregar destaques');
     }
  }
}




      

                



   


