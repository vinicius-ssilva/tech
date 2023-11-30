import styles from "../Nav/Nav.module.css"
import iconeMenu from "../icones/icons8-cardápio.svg"
import iconeOculosVr from "../icones/iconeVr.png"
import iconeNetflix from "../icones/icons8-netflix-96.png"
import iconeReac from "../icones/re.jpeg"
import iconeAndroid from "../icones/iconeAndroid-96.png"

export default function Nav(){
    return(
        <div className={styles.contentNav}>
<img className={styles.iconeMenu } src={iconeMenu}></img>
<div className={styles.contentNavMenu}>
<div>
    <img className={styles.logoOculos} src={iconeOculosVr}></img>
    <p className={styles.pTexto}>Vr</p>
</div>
<div>
    <img className={styles.logoReact} src={iconeReac}></img>
    <p className={styles.pTexto}>React</p>

</div>
<div >
    <img className={styles.logoNetflix} src={iconeNetflix}></img>
    <p className={styles.pTexto}>Netflix</p>
</div>
<div >
    <img className={styles.logoAndroid} src={iconeAndroid}></img>
    <p className={styles.pTexto}>Android</p>
</div>
</div>
        </div>
    )
}