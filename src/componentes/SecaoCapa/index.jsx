import estilos from './SecaoCapa.module.css';

export default function SecaoCapa(){
    return(
        <section className={estilos.banner}>
            <div className='container'>
                <div className={estilos.container_textos}>
                    <p>Preços baixos em</p>
                    <h1>ÓCULOS DE <br />GRAU E DE SOL</h1>
                    <p>Você só encontra aqui</p>
                </div>
            </div>
        </section>
    )
}