import face from "./face.module.css"

function Sface({openfacee}){
    return(
        <div>  
            <form className={face.forme}>
                <button onClick={()=>{openfacee(false)}} className={face.fermer}><i class="bx bx-x"></i></button>
                <u><h2 className={face.h }>Se connecter avec <i class="fab fa-facebook"></i></h2></u>
                <span className={face.s}>Compte Facebook</span><br></br>
                <input type="text" className={face.infoo}></input><br></br>
                <span className={face.s}>Mote de passe</span><br></br>
                <input type="password" className={face.infoo}></input><br></br>
                <button className={face.env}>Se connecter</button>
            </form>
            <div className={face.peree}></div>
        </div>
    );
}

export default Sface;