import React from "react";



const Home = () => {
    return (
        
       <div class="home-page">

        
        <h1>ASSADOS COMBATE</h1>
        
        {/* CONTAINER DESTAQUE */}

        <h2>Destaques</h2>

        <div class="container-destaque">

        </div>

        {/* CONTAINER SOMENTE IMAGENS */}

        <div class="container-dois">
            
            <div className="col-1">

        <img src="entrega.png" alt="" />
        <h3> ENTREGAS</h3>
        <p>O frango mais famoso do Brasil na sua casa, realizamos entregas com motoboys próprios para melhor atende-los!</p>
        </div>

        <div className="col-2">
        
        <img src="retirada.jpg" alt="" srcset="" />
        <h3>RETIRADA NO BALCAO</h3>
        <p>Faça sua reserva e retire no balcao de atendimento!</p>

   </div>
   <div className="col-3">
        
        <img src="almoco.jpg" alt="" srcset="" />
        <h3>ALMOÇO</h3>
        <p>Venha conhecer o nosso restaurante, almoço servido no local!</p>

   </div>
   
        </div>

                {/* CONTAINER REPORTAGENS */}

            <h2>Veja algumas de nossas reportagens</h2>

        <div class="container-tres">
    
            <div className="col-1">

        <a href="https://www.youtube.com/watch?v=w9BqYtPRpag"><img src="tribuna.jpg" alt="" /></a>
            <h2>TRIBUNA</h2>
        </div>

        <div className="col-2">

        <a href="https://globoplay.globo.com/v/9951656/" target="_blank"><img src="rpc.png" alt="" /></a>
            <h2>RPC</h2>
        </div>

        <div className="col-3">

        <a href="https://www.gazetadopovo.com.br/bomgourmet/frango-assado-milanesa-combate-barreirinha/" target="_blank"><img src="gazeta.png" alt="" /></a> 
            <h2>GAZETA DO POVO</h2>
        </div>
        </div>
            
       </div>

       
        
        
    )
}

export default Home