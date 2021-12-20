function footer() {
    return `     <div>
    <div class="footer-h-div">
        <div>
            <div class="nav-logo"> up<span class="nav-logo-span">G</span>rad</div>
            <h3>Building Careers of Tomorrow</h3>
            <div class="social-handle">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-youtube"></i>
            </div>
        </div>
        <div>
            <h3>UPGRAD</h3>
            <a href="#">About</a href="#">
            <a href="#">Careers</a href="#">
            <a href="#">Placement Support</a href="#">
            <a href="#">upGrad Blog</a href="#">
            <a href="#">Success Stories</a href="#">
            <a href="#">For Team</a href="#">
            <a href="#">For Business</a href="#">
            <a href="#">upGrad In Media</a href="#">
        </div>
        <div class="small-info-footer">
            <div>
                <h3>
                    ONEUPGRAD
                </h3>
                <a href="#">upGrad Rekrut</a href="#">
                <a href="#"> upGrad Jeet</a href="#">
                <a href="#">upGrad Campus</a href="#">
            </div>
            <div>
                <h3>SUPPORT</h3>
                <a href="#">Contact</a href="#">
                <a href="#">Terms & Condition</a href="#">
                <a href="#">Privacy Policy</a href="#">
            </div>
        </div>
        <div>
            <button class="social-handle">
                <i class="fab fa-android"></i>
                <h3> Get the android app</h3>
            </button>
            <button class="social-handle">
                <i class="fab fa-apple"></i>
                <h3> Get the IOS app</h3>
            </button>
        </div>
    </div>
</div>
<hr>

<div>
<div id="product-data" class="footer-h-div">
    <div>
        <h3>MBA</h3>
    </div>
    <div>
        <h3>DATA SCIENCE</h3>
    </div>
    <div>
        <h3>AI | ML</h3>
    </div>
    <div>
        <h3>TECHNOLOGY & BLOCKCHAIN</h3>
    </div>
 
</div>
</div>`
}


function footer_js(mba_DB,ds_DB,ml_DB,bc_DB,footer) {
    document.getElementById("footer").innerHTML = footer();
    let product_data = document.querySelectorAll("#product-data>div");
      
    footerData(mba_DB,product_data[0])
    footerData(ds_DB,product_data[1])
    footerData(ml_DB,product_data[2])
    footerData(bc_DB,product_data[3])

    function footerData(data,div) {
data = JSON.parse(data());
data.forEach(element => {
    let a  = document.createElement("a");
    a.href = "#";
    a.innerText = element.homePg.title;
    div.append(a);
});
    }
}

export {footer,footer_js}