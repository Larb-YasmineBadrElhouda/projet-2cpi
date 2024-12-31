import './Firstinter.css'

function Firstinter(){
    return(
        <>
            <header>
                <img src="logoo.png" alt="logo" id="logoo"></img>
                <label for="toggle"><i class="fa fa-bars"></i></label>
                <input type="checkbox" id="toggle"/> 
                <ul class="headerlist">
                    <li id="li1">Acceuil</li>
                    <li>À propos</li>
                    <li>Services</li>
                    <li>Feedback</li>
                </ul>
                <button id="sign">S'inscrire</button>
                <button id="log">Connexion</button>
            </header>
            <div class="partie1">
                <img src="image1.png"></img>
                <h1>À la recherche d'un emploi? AFO est l'endroit qu'il vous faut!</h1>
                <section>
                    Avec tout ce qui concerne l'emploi, 
                    de la formation à la candidature, 
                    à l'embauche et à la publicité de vos projets, 
                    nous offrons d'excellents services pour vous faciliter la tâche. 
                </section> 
            </div> 
            <div class="partie2">
                <div id="image2"><img src="image2.png"></img></div>
                <h1>C'est qoui AFO?</h1>
                <section>
                AFO est un site Web, développé par un groupe d'étudiants,
                pour vous aider à trouver un emploi convenable et avoir 
                un contact avec de nombreux employeurs sans avoir à 
                parcourir de longues distances pour atteindre votre objectif. 
                Nous vous proposons également des formations et stages pour 
                booster votre expérience et vos chances d'être embauché. 
                AFO aide les entreprises à trouver des employés compétents, 
                des partenaires ambitieux et une publicité adaptée à leurs services.
                </section>
            </div>  
            <div class="partie3">
                <h1>On vous facilite la tâche!</h1>
                <section>
                    En vous mettant plus facilement en contact 
                    avec les entreprises et en facilitant le contact 
                    entre les deux parties
                </section>
                <video autoplay loop controls  src="afovideo.mp4" ></video>              
            </div>
            <div class="partie4">
                <img src="image3.png"></img>
                <h1>Nous nous assurons d'offrir le meilleur à nos utilisateurs</h1>
                <div class="feedback1">
                    <div>
                        <img src="nahla.png"></img>
                        <p><strong>john Smith</strong><br></br><span>Assistant manager at &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ABC company</span></p>
                    </div>
                    <p id="comment">" This&nbsp; website is amazing, &nbsp;it &nbsp;helped me find the job of my dreams! "</p>
                </div>
                <div class="feedback2">
                    <div>
                        <img src="nahla.png"></img>
                        <p><strong>john Smith</strong><br></br><span>Assistant manager at &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ABC company</span></p>
                    </div>
                    <p id="comment">" This&nbsp; website is amazing, &nbsp;it &nbsp;helped me find the job of my dreams! "</p>
                </div>
                <div class="feedback3">
                    <div>
                        <img src="nahla.png"></img>
                        <p><strong>john Smith</strong><br></br><span>Assistant manager at &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ABC company</span></p>
                    </div>
                    <p id="comment">" This&nbsp; website is amazing, &nbsp;it &nbsp;helped me find the job of my dreams! "</p>
                </div>
            </div>
            <h1 id="join">Rejoignez-nous maintenant!!</h1>
            <div class="partie5">
                <img src="image4.png" id="image4"></img>
                <div class="part1">
                    <button><h3>Chercheur d'emploi</h3></button>
                    <br></br><br></br>
                    <section>si vous êtes entrain de chercher un emploi</section>
                </div>
                <img src="image5.png" id="image5"></img>
                <div class="part2">
                    <button><h3>Entreprise</h3></button>
                    <br></br><br></br><br></br>
                    <section>si vous êtes entrain de chercher des compétents employés, des partenaires de projet ou de la publicité</section>
                </div>
                <img src="image6.png" id="image6"></img>
                <div class="part3">
                    <button><h3>Utilisateur normal</h3></button>
                    <br></br><br></br>
                    <section>si vous êtes à la recherche d'une formation ou souhaitez explorer notre site web</section>
                </div>
            </div>
            <footer>
                <div class="footerlist">
                    <ul>
                        <li>ESI SBA</li>
                    </ul>
                    <ul>
                        <li>À propos</li>
                        <li>Équipe</li>
                    </ul>
                    <ul>
                        <li>Confidentialité</li>
                        <li>Conditions d'utilisation</li>
                    </ul>
                    <ul>
                        <li>Paramètrer les cookies</li>
                        <li>Site map</li>
                    </ul>
                    <ul>
                        <li>Ressources</li>
                        <li>FAQs</li>
                    </ul>
                    <img src="logo.png" id="logo"></img>
                </div>
                <p id="copyright">
                    <small> &copy;copyright-2022.AFO &nbsp; &nbsp;</small>
                    Create with <i class="fa fa-heart"></i> by AFO &trade;
                </p>
            </footer> 
        </>
    );
}

export default Firstinter;