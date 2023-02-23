import React from "react";
const Contact = () => {
    return (
        <div class="contact-page">
            <div class="contact-box1">

            <h1>Contato</h1>

            <h3>FALE COM A GENTE !</h3>
            
            <h4>Reservas</h4>

            <p>Reservas
As reservas pelo telefone: <h3> 41 3053-3268</h3> ou pelo nosso WhatsApp: <h3>41 98824-4635</h3></p>

<h4>Nos sigam nas redes sociais para ficarem por dentro de todas as novidades!</h4>
            
<a href="https://www.instagram.com/assadoscombate/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
         <a href="https://www.facebook.com/combateassados" target="_blank"><i class="fa-brands fa-facebook"></i></a>
           
             </div>

             <div class="box-feedback">

                <h3>Deixe Aqui o seu feedback para que possamos cada vez mais atende-lo melhor!</h3>

                <form action="">

                    Nome:<p><input id="txt" type="text" name=""/></p>
                    telefone:<p><input type="text" name="" id="txt" /></p>
	            <p>Mensagem: <br /><textarea id="txt" name="msg" rows="7" cols="50"></textarea></p>
                <input id="bnt" type="button" value="Enviar" />
                </form>
             </div>
        </div>
    )
}

export default Contact