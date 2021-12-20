displayCredit(); 
// cards section starts here
document.getElementById("creditCard").addEventListener("click", () => {
  document.getElementById("optionSelect").innerHTML = "";
  document.getElementById("creditCard").style.color = "black";
  document.getElementById("creditCard").style.borderLeft =
    "3px solid red";
  document.getElementById("debitCard").style.color = "grey";
  document.getElementById("debitCard").style.borderLeft = "0";
  document.getElementById("cash").style.color = "grey";
  document.getElementById("cash").style.borderLeft = "0";
  document.getElementById("upi").style.color = "grey";
  document.getElementById("upi").style.borderLeft = "0";
  displayCredit();
});

function success() {
location.href="thankyou.html"
}
document.getElementById("debitCard").addEventListener("click", () => {
  document.getElementById("optionSelect").innerHTML = "";
  document.getElementById("debitCard").style.color = "red";
  document.getElementById("debitCard").style.borderLeft =
    "8px solid red";
  document.getElementById("creditCard").style.color = "grey";
  document.getElementById("creditCard").style.borderLeft = "0";
  document.getElementById("cash").style.color = "grey";
  document.getElementById("cash").style.borderLeft = "0";
  document.getElementById("upi").style.color = "grey";
  document.getElementById("upi").style.borderLeft = "0";
  document.getElementById(
    "optionSelect"
  ).innerHTML = ` <div id="displayPayment">
  <div style="display: flex; height: 150px; width: 600px ;justify-content: space-evenly; margin-right:-50px;  " id="firstPayment">
      <div style="height:  110px; width: 200px; border: 1px solid rgb(223,225,230); border-radius: 15px;" id="credit"><h4>STANDARD CREDIT CARD EMI</h4>
      <p>(Zero Down Payment)</p>
      </div>
      <div style="height: 110px; width: 200px; border: 1px solid rgb(223,225,230);border-radius: 15px; "  id="emicredit">
          <h4>STANDARD CARDLESS EMI</h4>
          <p>(min. INR-15,000 Down Payment)</p>
      
      </div>
  </div>
  <div id="bankDetails"></div>
</div>`;
});


function displayCredit() {
  document.getElementById("creditCard").style.color = "red";
  document.getElementById("creditCard").style.borderLeft =
    "8px solid red";

  document.getElementById(
    "optionSelect"
  ).innerHTML = `  <div id="displayPayment">
  <div  style="display: flex; height: 150px; width: 600px ;justify-content: space-evenly;  " id="firstPayment">
      <div id="firstPay" style="height:  110px; width: 200px; border: 1px solid rgb(223,225,230); border-radius: 15px;" id="credit"><h4>NO COST CREDIT CARD EMI</h4>
      <p>(Zero Down Payment)</p>
      </div>
      <div id="secondPay" style="height: 110px; width: 200px; border: 1px solid rgb(223,225,230);border-radius: 15px; "  id="emicredit">
          <h4>NO COST CARDLESS EMI</h4>
          <p>(min. INR-15,000 Down Payment)</p>
      
      </div>
  </div>
  <div id="bankDetails"></div>
</div>`;
}
// card section finishes here

// cash section starts here
document.getElementById("cash").addEventListener("click", () => {
  document.getElementById("optionSelect").innerHTML = "";
  document.getElementById("cash").style.color = "red";
  document.getElementById("upi").style.color = "grey";
  document.getElementById("upi").style.borderLeft = "0";document.getElementById("cash").style.borderLeft =
    "8px solid red";
  document.getElementById("creditCard").style.color = "grey";
  document.getElementById("creditCard").style.borderLeft = "0";
  document.getElementById("debitCard").style.color = "grey";
  document.getElementById("debitCard").style.borderLeft = "0";
  document.getElementById("upi").style.color = "grey";
  document.getElementById("upi").style.borderLeft = "0";
  document.getElementById(
    "optionSelect"
  ).innerHTML = `<div id="payUsing"><p id="heading">Pay using UPI</p></div>
  <hr>
  <table>
    <tr>
      <td><input type="email" id="upi_val" placeholder="Enter VPA.Ex.90152xxxx@oksbi"></td>
      <td><button id="varify"  onclick="changecolor()">Varify</button></td>
    </tr>
  </table>
  <button id="btn-upi">PAY NOW</button>

<p id="trust-upi">TrustPay: 100% Payment Protection, Easy Returns Policy</p>
<h6>By placing the order, I have read and agreed to snapdeal.com's  <a href="#">Terms of Use</a>   |   <a href="#">Terms of sale</a></h6>`;
});
// upi section starts here
document.getElementById("upi").addEventListener("click", () => {
  document.getElementById("optionSelect").innerHTML = "";
  document.getElementById("upi").style.color = "red";
  document.getElementById("upi").style.borderLeft =
    "8px solid red";
    
  document.getElementById("creditCard").style.color = "grey";
  document.getElementById("creditCard").style.borderLeft = "0";
  document.getElementById("debitCard").style.color = "grey";
  document.getElementById("debitCard").style.borderLeft = "0";
  document.getElementById("cash").style.color = "grey";
  document.getElementById("cash").style.borderLeft = "0";
  document.getElementById(
    "optionSelect"
  ).innerHTML = `<div id="displayPayment">
  <div style="display: flex; height: 150px; width: 600px ;justify-content: space-evenly;  " id="firstPayment">
      <div style="height:  110px; width: 200px; border: 1px solid rgb(223,225,230); border-radius: 15px;" id="credit"><h4>Credit / Debit Card</h4>
      <p>(Zero Down Payment)</p>
      </div>
      <div style="height: 110px; width: 200px; border: 1px solid rgb(223,225,230);border-radius: 15px; "  id="emicredit">
          <h4>	Net Banking</h4>
          <p>(min. INR-15,000 Down Payment)</p>
      
      </div>
  </div>
  <div id="bankDetails"></div>
</div>`;
});
function changecolor(){
  document.getElementById("btn-upi").style.backgroundColor="rgb(238,44,60)"
  document.getElementById("btn-upi").setAttribute("onclick","success()")
}

document.getElementById("firstPay").addEventListener("click",()=>{
    console.log("ypho")
    document.getElementById("firstPay").style.border="2px solid rgb(2,169,113)"
    document.getElementById("firstPay").style.borderBottom="10px solid rgb(2,169,113)"

})

document.getElementById("secondPay").addEventListener("click",()=>{
    console.log("ypho")
    document.getElementById("secondPay").style.border="2px solid rgb(2,169,113)"
    document.getElementById("secondPay").style.borderBottom="10px solid rgb(2,169,113)"

})


const nav = document.getElementById('navDiv');
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {    
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');    
  }
}

window.addEventListener('scroll', fixedNav);

var secondPmnt = document.getElementById("firstPay")



var nameshow =  JSON.parse(localStorage.getItem("userFinal"))
namesee()
function namesee(){
 
    var username = document.getElementById("username")
    username.innerHTML=nameshow.name

}

function gotohme(){
  location.href="index.html"
}

