import estilos from './Rodape.module.css';

export default function Rodape(){
    return(
        <footer className={estilos.rodape}>
            <div className='container'>

                <div className={estilos.creditos}>
                    <p>
                        &copy; 2025 Óticas Vida. - Todos os direitos reservados.
                    </p>
                </div>

            </div>
        </footer>
    )
}