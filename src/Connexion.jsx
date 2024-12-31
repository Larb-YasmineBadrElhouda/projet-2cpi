import Connexion from './Connexion.module.css'

function conx({setformopen}){
    return(
        <div>    
            <form action="a" className={Connexion.form}>
                <div className={Connexion.inscrire}>
                    <button className={Connexion.fermer}><i class="bx bx-x" onClick={()=>{setformopen(false)}}></i></button>
                    <h2>Bon retour à AFO!</h2>
                </div>
                <div className={Connexion.info}>
                    <span className={Connexion.email}>Adresse Email :</span><br></br><br></br>
                    <input type="email"  required></input>
                </div>
                <div className={Connexion.info}>
                    <span className={Connexion.password}>Mot de passe : </span><br></br><br></br>
                    <input type="password" required></input>
                </div>
                <br></br><br></br>
                <a href="#"  className={Connexion.a}>Mot de passe oublié?</a>
                <br></br><br></br>
                <button className={Connexion.envoyer}>Envoyer</button> 
            </form>
            <div className={Connexion.formpere}></div>
        </div>
    );
}

export default conx;