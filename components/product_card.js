const displayProductCard = (mba,location) =>{
           
        mba.map( a=> {
            // console.log(a.productPg);
            let item = document.createElement("div");
            item.className = "card";
            item.innerHTML = `
            <div class="img" style="background-image: url(${a.productPg.imgUrl})"></div>
            <div class="imgContent">
                <div class="top">
                    <h2>${a.productPg.title}</h2>
                    <p>${a.productPg.des_a}</p>
                    <p>${a.productPg.des_b}</p>

                </div>
                <div class="bottom">
                        <div class="storry">
                            <div class="item">
                                <p>Starts On</p>
                                <h5>${a.productPg.StartsOn}<h5>
                            </div>
                            <div class="item">
                                <p>Eligibility</p>
                                <h5>${a.productPg.eligibility}<h5>
                            </div>
                        </div>
                        <div class="buttonbox">
                            <button class="dwnldBtn"> Download Brochure </button>
                           <a href="mba.html"> <button class="navigationBtn"> Learn More </button> </a>
                        </div>
                </div>

            </div>`;
            item.addEventListener("click", () => {
                console.log(a)
            })

            location.append(item)            
            
        })   
    }

export default displayProductCard;