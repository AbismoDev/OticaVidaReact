import Image from 'next/image';
import Link from 'next/link';

import estilos from './Topo.module.css';

export default function Topo(){
    return(
        <header>
            <div className="container">
                <div className={estilos.container_flex}>
                    <Image src="/logo.png" width={157} height={50} />
                    <nav className={estilos.container_links}>
                        <Link className={estilos.links} href="/#produtos">PRODUTOS</Link>
                        <Link className={estilos.links} href="/#sobre">SOBRE</Link>
                        <Link className={estilos.links} href="/#contato">CONTATO</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}