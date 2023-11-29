import styles from "./Header.module.css"
import logo from "../imagens/Logotipo.png"
import iconeL from "../imagens/lupa1.png"

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.content1}>
            <img className={styles.iconeInput} src={iconeL} alt="Ícone" />
            <input placeholder="Pesquizar" className={styles.pesquisar} type="text"></input>
           <img className={styles.logo} src={logo}></img>
            </div>
            <div className={styles.content2}>
                <p>Em alta</p>
                <p>Streaming</p>
                <p>Aplicativos</p>
                <p>Software</p>
                <p>Lançamentos</p>
            </div>
           
        </header>
    )


}