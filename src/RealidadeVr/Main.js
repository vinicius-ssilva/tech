import styles from "../RealidadeVr/Main.module.css"
import img from "../RealidadeVr/img/vr.jpeg"
import img1 from "../RealidadeVr/img/vrPersona.jpeg"
import img2 from "../RealidadeVr/img/novaLinhaGalaxyS23-Fe(1).jpeg"
import {animate, motion} from "framer-motion"

import img3 from "../RealidadeVr//img/samsung-galaxy-s23-fe.webp"
import { useEffect, useRef, useState } from "react"
const images=[img,img1];

export default function Main(){
    const carrossel=useRef();
    const [width,setWidth]=useState(0);

useEffect(()=>{
    setWidth(carrossel.current?.scrollWidth- carrossel.current?.offsetWidth);
},[]
)

    return(
        <div className={styles.contentMain}>
            <section className={styles.sessao1}>
                <aside className={styles.contentH1P}> 
                <h1>Realidade Virtual</h1>
                <p>Uma das maiores invenções tecnologicas</p>

                </aside>
                <article className={styles.contentCentralizador}>
                <aside className={styles.contentImagem}>
                    <motion.div ref={carrossel} className={styles.carrossel} whileTap={{cursor:"grabbing"}}>
                        <motion.div className={styles.inner} 
                        drag="x"
                        dragConstraints={{right:0,left:-width} }
                        initial={{x:100}}
                        animate={{x:0}}
                        >
                            
                            {images.map(img=>(
                                <motion.div className={styles.item} key={images}>
                                    <img src={img} alt ="Texto alt"></img>
                                </motion.div>

                            ))}

                        </motion.div>
                    </motion.div>
                       
                    </aside>
                    <aside className={styles.contentTexto}>
                        <p>Entre todas as transformações digitais  e inovações tecnologicas, 
                            de longe uma das que mais chama a  atenção hoje em dia  é a realidade virtual.</p>
                        <p>Imagina como é mingrar para uma realidade alternativa inteiramente virtual , 
                            desenvolvida por um computador. com essa tecnologia você pode viajar para qualquer lugar do mundo </p>
                    </aside>
                   
                </article>
            </section>



 

            </div>
    )
}