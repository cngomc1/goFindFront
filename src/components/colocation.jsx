const CoLocation = () =>{
    return(
        <div>
            <section id="colocation" >
                <h2 className="title">Co-location</h2>
                <div class="colocation">
                    <div className="image location">
                        {/* <button className="cherche">JE CHERCHE UNE COLOCATION</button> */}
                        <button  className="propose"> JE PROPOSE UNE COLOCATION</button>
                    </div>
                    <LocationForm/>
                </div>
            </section>
        </div>
    )
}
export default CoLocation;

export const LocationForm = () =>{
    return(
        <div className="otherside">
            <p>Louez ou proposez des chambres ou maisons pour de courtes durées.</p>
            <form>
                <input type="text" placeholder="Quelle ville?"/>
                <input type="text" placeholder="Quelle pièce?"/>
                <button type="submit" onclick="location.href='colocation.html'">Voir les locations</button>
            </form>
        </div>
    )
  }
