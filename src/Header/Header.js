import styles from "./Header.module.css"
import logo from "../imagens/Logotipo.png"
import iconeL from "../icones/iconeSearch.svg"

export default function Header(){
    return(
        <header className={styles.header}>
           <img className={styles.logo} src={logo}></img>

            <div className={styles.content1}>

                <div className={styles.content1p1}>
                    <img className={styles.lupa} src={iconeL}></img>
                <input  placeholder="Pesquizar" className={styles.pesquisar} type="text"></input>

                </div>
          
            </div>
            <div className={styles.content2}>
                <div className={styles.content2p1}>
                <p>Em alta</p>
                <p>Streaming</p>
                <p>Aplicativos</p>
                <p>Software</p>
                <p>Hardware</p>
                <p>Lançamentos</p>
                <p>Livros</p>


                </div>
                
            </div>
           
        </header>
    )


}