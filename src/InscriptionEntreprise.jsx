import './InscriptionEntre.css'

function inscription({setinscopen}){
    return(
        <form action="a">
            <div class="form">
                <div class="inscrire">
                    <h2>Bienvenue dans AFO!</h2>
                    <button id="ferme" onClick={() => setinscopen(false)}><i class="bx bx-x"></i></button>
                </div>
                <div id="username">
                    <span>Nom de l'entreprise :</span><br></br>
                    <input type="text" required></input>
                </div>
                <div id="domaine">
                    <span>Domaine : </span><br></br>
                    <input type="text" required></input>
                </div>
                <div id="adresse">
                    <span>Adresse : </span><br></br>
                    <input type="adress" required></input>
                </div>
                <div id="email">
                    <span>Email :</span><br></br>
                    <input type="email"  required></input>
                </div>
                <div id="password">
                    <span>Mot de passe : </span><br></br>
                    <input type="password" required></input>
                </div>
                <br></br><br></br>
                <button>Envoyer</button>
            </div>
            <div className="pere"></div>
        </form>
    );
}

export default inscription;