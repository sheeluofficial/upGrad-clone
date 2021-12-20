function navbar(){
    return `  <div class="space-bet-flex navbar">
    <div class="space-bet-flex left-nav ">
       <div class="nav-logo"> up<span class="nav-logo-span">G</span>rad</div>
       <div class=" space-bet-flex btn-style courses-btn" id="courses-btn">Courses<i class="fas fa-angle-down arrow"></i>           
       </div>
   </div>


   <div class="space-bet-flex right-nav">
      <div class="space-bet-flex text-btn-container">
         <div class="nav-text-btn">HIRE FROM UPGRAD</div>
         <div class="nav-text-btn">STUDY ABROAD</div>
         <div class="nav-text-btn">FOR BUSINESS</div>
         <div class="nav-text-btn ">
             MORE
             <i class="fas fa-angle-down arrow">
                 
             </i>
             <div class="more">
                 <h3 class="more-dropdown-text">Mentorship</h3>
                 <h3 class="more-dropdown-text">Short Videos</h3>
                 <h3 class="more-dropdown-text">Live MasterClass</h3>
                 <h3 class="more-dropdown-text">Master Class</h3>
                 <h3 class="more-dropdown-text">Refer and Earn</h3>
                 <h3 class="more-dropdown-text">Blog</h3>
                 <h3 class="more-dropdown-text">Become A Business Associate</h3>
             </div>
           </div>
      </div>
     <div data-modal-target="#modal"  class="btn-style space-bet-flex" id="sign-up-btn">Sign Up</div>
   </div>
</div>
<div class="modal" id="modal">
   <div id="imgg">
       <img src="https://media.istockphoto.com/vectors/various-people-with-smart-gadgetsbooks-on-backgroundeducation-and-vector-id1161994875"/>
   </div>
    
   
       <div  class="modal-body">
           
           <div id="details">
               <h2 id="h2">Enter Your Mobile Number To Start Learning</h2>
               <div id="dis"></div>
               <div id="num">
                   <img src="https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png"/>
                   <h3>+91</h3>
                   <input id="number" type="number" placeholder="99999 99999" />
               </div>
               <button id="continue">CONTINUE -></button>
   
               <a href=""><h5>Proceed With Email</h5></a>
   
   
           </div>
           
           
       </div>
       <button data-close-button class="close-button">&times;</button>
   </div>
   
 
 <div id="overlay"></div>
 `
}

export  {navbar}