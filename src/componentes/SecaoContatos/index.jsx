import Image from "next/image";

import estilos from './SecaoContatos.module.css';

export default function SecaoContatos(){
    return(
        <section className={estilos.secaoContatos} id="contato">
            <div className="container">

                <div className={estilos.container_texto}>
                    <h3>FALE CONOSCO</h3>
                    <p>
                        Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da 
                        central de atendimento.
                    </p>
                </div>

                <div className={estilos.container_contatos}>
                    <div className={estilos.container_contato}>
                        <h4>Nossos Contatos</h4>
                        <div className={estilos.contato}>
                            <div className={estilos.itemContato}>
                                <Image src="/local.png" width={15} height={15} />
                                <p>Nova Iguaçu, RJ</p>
                            </div>
                            <div className={estilos.itemContato}>
                                <Image src="/telefone.png" width={15} height={15} />
                                <p>(21) 9999-9999</p>
                            </div>
                            <div className={estilos.itemContato}>
                                <Image src="/email.png" width={15} height={15} />
                                <p>contato@oticavida.com</p>
                            </div>
                        </div>
                    </div>

                    <div className={estilos.container_contato}>
                        <h4>Nossas Redes Sociais</h4>
                        <div className={estilos.contato}>
                            <div className={estilos.itemContato}>
                                <Image src='/fb.png' width={15} height={15} />
                                <p>/OticaVida</p>
                            </div>
                            <div className={estilos.itemContato}>
                                <Image src='/ig.png' width={15} height={15} />
                                <p>@oticavidarj</p>
                            </div>
                            <div className={estilos.itemContato}>
                                <Image src='/tt.png' width={15} height={15} />
                                <p>@oticavidarj</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}