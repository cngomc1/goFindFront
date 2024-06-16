const StolenDevice = () =>{
    return(
        <div>
        
            <section id="identifier" >
            <h2 className="title">Identifier un Objet Volé</h2>
                <div class="stolen-device">
                    <div  className="image objet" >
                        {/* <button className="cherche">VERIFIER SI L'APPAREIL EST VOLE</button> */}
                        <button  className="propose"> JE VEUX DECLARER UN VOL</button>
                    </div>
                    <ObjetForm/>
                </div>
                
        </section>
        </div>
    )
}
export default StolenDevice;


export const ObjetForm = () =>{
    return(
        <div className="otherside">
             <p>Recherchez dans notre base de données pour savoir si un objet a été déclaré volé.</p>
            <form>
                <input type="text" placeholder="Entrez le numéro de série de l'objet"/>
                <button type="submit">Rechercher</button>
            </form>
        </div>
    )
  }