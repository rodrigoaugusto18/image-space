import styles from './Cabecalho.module.scss'
import logo from './logo.png'
import search from './search.png'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo do SpaceImage" />
                <h1>Space Image</h1>
                </div>
    <div className={styles.cabecalho__container}>
    <input
        className={styles.cabecalho__input} 
        type="search" 
        placeholder="O que você procura?"
    />
    <img src={search} alt="Ícone de lupa" />
    </div>
        </header>
    )
}