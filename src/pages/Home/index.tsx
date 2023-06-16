import Navbar_ from '../../component/barraNavegacao';
import './styles.css'

function Home() {
    return (
        <section>
            <header>
                <Navbar_ />
            </header>
            <main>
                <div className="text">
                    <h1><strong>Bem-vindos ao Hotel e Parque aquatico Atlantis!</strong></h1>
                </div>
                <div className="text-box">
                    <strong>
                        Bem-vindo ao Atlantis Water Park, o seu refúgio perfeito para uma experiência única em gerenciamento de hotel.
                    </strong>
                </div>
                <div className="text-box">
                    <strong>
                    Combinando o luxo de um resort com a empolgação de um parque aquático, oferecemos quartos espaçosos, instalações de lazer emocionantes, restaurantes premiados e um spa rejuvenescedor. Estamos ansiosos para recebê-lo em nossa atmosfera serena e vibrante, onde cada detalhe é cuidadosamente planejado para garantir que sua estadia seja inesquecível.
                    </strong>
                </div>
            </main>
        </section>
    );
}
export default Home;