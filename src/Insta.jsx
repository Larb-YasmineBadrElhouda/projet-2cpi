import insta from "./insta.module.css"

function Sinsta({openinstaa}){
    return(
        <div>  
            <form className={insta.form}>
                <button onClick={()=>{openinstaa(false)}} className={insta.fermer}><i class="bx bx-x"></i></button>
                <u><h2 className={insta.h }>Se connecter avec <i class="fab fa-instagram"></i></h2></u>
                <span className={insta.s}>Compte Instagram</span><br></br>
                <input type="text" className={insta.info}></input><br></br>
                <span className={insta.s}>Mote de passe</span><br></br>
                <input type="password" className={insta.info}></input><br></br>
                <button className={insta.env}>Se connecter</button>
            </form>
            <div className={insta.per}></div>
        </div>
    );
}

export default Sinsta;