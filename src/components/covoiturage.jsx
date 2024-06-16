
 const CoVoiturage = () =>{
    return(
        <div>
            <section id="covoiturage" >
            <h2 className="title">Co-voiturage</h2>
            <div class="covoiturage">
                <TrajetForm/>  
                <div className="image voyage">
                    {/* <button className="cherche">JE CHERCHE UN COLOCATION</button> */}
                    <button  className="propose"> JE VEUX DECLARER UN TRAJET</button>
                </div>
            </div>   
        </section>

        </div>
    )
}
export default CoVoiturage;



export const TrajetForm = () =>{
    return(
        <div className="otherside">
            <form>
                <input type="text" placeholder="Ville de départ"/>
                <input type="text" placeholder="Ville d'arrivée"/>
                <div style={{display:"flex",justifyContent:"space-between",padding:"20px",}}>
                    <input type="date" placeholder="Date"/>
                    <input type="time" placeholder="Heure"/>
                    <input type="number" placeholder="Nombre de passagers"/>
                </div>
            </form>
            <p>Trouvez ou proposez un trajet pour partager votre voyage.</p>
            <button onclick="">Voir les trajets</button>
        </div>
    )
  }
  