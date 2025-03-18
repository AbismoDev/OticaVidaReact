import Image from "next/image";

import estilos from './SecaoSobre.module.css';

export default function SecaoSobre(){
    return(
        <section className={estilos.secaoSobre}>
            <div className="container">

                <div className={estilos.container_texto}>
                    <h3>QUEM SOMOS NÓS?</h3>
                    <p>
                        Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento 
                        ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e 
                        preço baixo.
                    </p>
                </div>

                <div className={estilos.container_cards}>
                    <div className={estilos.card}>
                        <div className={estilos.card_image}>
                            <Image src='/loja.png' layout="fill" objectFit="cover"/>
                        </div>
                        <div className={estilos.card_texto}>
                            <h3>NOSSAS FILIAIS</h3>
                            <p>
                                Hoje temos mais de 20 filiais pelo Brasil e na Ámerica
                            </p>
                        </div>
                    </div>
                    <div className={estilos.card}>
                        <div className={estilos.card_texto}>
                            <h3>ATENDIMENTO <br />FLEXÍVEL</h3>
                            <p>
                                Nossa equipe possui é treinada para te atender
                            </p>
                        </div>
                        <div className={estilos.card_image}>
                            <Image src='/atendimento.png' layout="fill" objectFit="cover"/>
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
    )
}