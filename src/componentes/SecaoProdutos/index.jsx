import Image from "next/image";

import estilos from './SecaoProdutos.module.css';

export default function SecaoProdutos(){
    return(
        <section className={estilos.secaoProdutos} id="produtos">
            <div className="container">
                <div className={estilos.container_titulo}>
                    <h2>Nossos produtos</h2>
                    <p>
                        Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.
                    </p>
                    <p>
                        Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
                    </p>
                </div>
                <div className={estilos.container_card}>
                    <div className={estilos.card}>
                        <h3>Óculos de grau</h3>
                        <Image src='/oculos01.png' width={250} height={100} />
                        <h4>R$ 500,00</h4>
                    </div>
                    <div className={estilos.card}>
                        <h3>Óculos transition</h3>
                        <Image src='/oculos02.png' width={250} height={100} />
                        <h4>R$ 750,00</h4>
                    </div>                    
                    <div className={estilos.card}>
                        <h3>Óculos de sol</h3>
                        <Image src='/oculos03.png' width={250} height={100} />
                        <h4>R$ 700,00</h4>
                    </div>                    
                    <div className={estilos.card}>
                        <h3>Óculos infantil</h3>
                        <Image src='/oculos04.png' width={250} height={100} />
                        <h4>R$ 500,00</h4>
                    </div>
                </div>
                <div className={estilos.container_lista}>
                    <h3>Todos os nossos produtos incluem:</h3>
                    <ul>
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}