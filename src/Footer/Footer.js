import styles from "../Footer/Footer.module.css"
import iconeInstagram from "../icones/icons8-instagram-150.png"
export default function Footer(){
    return(
        <div className={styles.contentFooter}>
            <div className={styles.contentQuadros}>
                <div className={styles.quadro}>
                <h1 className={styles.titulo}>Redes</h1>
                <div className={styles.contentImgP}>
                    <img src={iconeInstagram}></img>
                    <p>Multech</p>
                </div>
                <div className={styles.contentImgP}>
                    <img src={iconeInstagram}></img>
                    <p>Vinicius_silva18</p>
                </div>
                </div>
                <div className={styles.quadro}>
                <h1 className={styles.titulo}>Mais Visitados</h1>
                <div className={styles.contentImgP}>
                    <p>Em alta</p>
                </div>
                <div className={styles.contentImgP}>
                    <p>Streaming</p>
                </div>
                <div className={styles.contentImgP}>
                    <p>aplicativo</p>
                </div>
                </div>
                <div className={styles.quadro}>
                <h1 className={styles.titulo}>Aplicativos</h1>
                <div className={styles.contentImgP}>
                    <p>watsapp</p>
                </div>
                <div className={styles.contentImgP}>
                    <p>Instagram</p>
                </div>
                <div className={styles.contentImgP}>
                    <p>Multech</p>
                </div>
                </div>
                <div className={styles.quadro}>
                <h1 className={styles.titulo}>Linguagens</h1>
                <div className={styles.contentImgP}>
                    <p>java</p>
                </div>
                <div className={styles.contentImgP}>
                    <p>Python</p>
                </div>
                <div className={styles.contentImgP}>
                    <p>Java script</p>
                </div>
                </div>
                
              




            </div>
        </div>
    )
}