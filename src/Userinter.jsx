import { useState ,useRef} from "react"
import './Userinter.css'
import Connexion from "./Connexion"
import Inscription from "./InscriptionEntreprise"
import Normal from "./Normale"

function Userinter(){
    const rejoindre=useRef(null)
    const scrolltorej = () => {
        window.scrollTo({top : rejoindre.current.offsetTop, behavior:"smooth"})
    }
    const desc=useRef(null);
    const scrolltocont = () => {
        window.scrollTo({top : desc.current.offsetTop, behavior:"smooth"})
    }

    const [openform, setopenform] = useState(false)
    const[openinsc ,setopeninsc] = useState(false)
    const[opennor , setopennor] =useState(false)

    return(
        <div>
            <header>
                <h2 class="h2">All For One One For All</h2>
                <div>
                    <label for="toggle"><i class="fa fa-bars"></i></label>
                    <input type="checkbox" id="toggle"/>
                    <ul className="headerlist">
                        <li><button id="h" onClick={scrolltocont}>C'est quoi AFO?</button></li>
                        <li><button id="h">AFO équipe</button></li>
                        <li><button id="h">Guide</button></li>
                        <li id="ls"><button  onClick={()=>{setopenform(true)}}>Connexion</button></li>
                        <li id="ls" ><button  onClick={scrolltorej}>S'inscrire</button></li>
                    </ul>
                </div>   
                <div id="butt">
                    <button id="log" onClick={()=>{setopenform(true)}}>Connexion</button>
                    <button id="sign"  onClick={scrolltorej}>S'inscrire</button>
                </div>
            </header>
            {openform && <Connexion setformopen={setopenform}/>}       
            <video autoplay loop controls muted src="afo.mp4" ></video>
            <div id="desc" ref={desc}></div>
            <fieldset >
                <legend><u><h3>Qu'est que c'est  AFO ?</h3></u></legend>
                <p >
                    AFO est un site web développé par un groupe de cinq (5) étudiantes algériennes développeures .
                    Le but est d'aider les jeunes algériens à trouver un travail, stages, formations,
                    projets, et des évennements qui se déroulent en  <strong>Algérie</strong> .
                </p>
            </fieldset>
            <table>
                <tr>
                    <td>
                        <a href="#"><i class="fab fa-facebook" ></i></a><br></br><br></br>
                        <strong>Suivez nous sur notre page Facebook pour plus de détails 
                        et resteren parallèle avec nos nouveatés . </strong>
                    </td>
                    <td>
                        <a><i class="fa fa-at"></i></a><br></br><br></br>
                        <strong>Une entreprise ?un porteur de projets ?intéressé de 
                        rejoindre AFO ?Contacter nous sur email .</strong>
                    </td>    
                    <td>
                        <a><i class="fab fa-github"></i></a><br></br><br></br>
                        <strong>Pour les développeurs qui sont intéressés de voir la 
                        source code de notre site web sur github .</strong>
                    </td>
                </tr>
            </table>
            <article >
                <h2 >Rejoignez la communauté AFO</h2>
                <button id="entreprise" onClick={() => {setopeninsc(true)}}><strong>En tant qu'une Entreprise</strong></button>
                <br></br>
                <button id="utilisateur" onClick={()=>{setopennor(true)}} ><strong>En tant qu'un Utilisateur</strong></button>
                <br></br>
                <button id="emploi"><strong>Chercher un emploi</strong></button>
            </article>
            {openinsc && <Inscription setinscopen={setopeninsc}/>} 
            {opennor &&<Normal setnoropen={setopennor}/>}
            <div ref={rejoindre} id="scroll"></div>
            <footer>
                <h1>AFO</h1>
                <ul class="footerlist">
                    <a href="#"><li>Contacter AFO</li></a>
                    <a href="#"><li id="contact">
                        <i class="fab fa-facebook-square"></i>&nbsp;&nbsp; 
                        <i class="fa fa-at"></i>&nbsp;&nbsp;
                        <i class="fab fa-github"></i>
                    </li></a>
                    <a href="#"><li><i class="fa fa-map-pin">&nbsp;6958+WP4, Sidi Bel Abbès 22000</i></li></a>
                </ul>
                <div id="love">
                    <p id="heart">
                        <small> &copy;copyright-2022.AFO &nbsp; &nbsp;</small>
                        Create with <i class="fa fa-heart"></i> by AFO &trade;
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Userinter;