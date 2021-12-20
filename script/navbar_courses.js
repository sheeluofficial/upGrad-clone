function courseByCateg(mba_DB,ds_DB,ml_DB,bc_DB,course_btn) {
    let container = document.createElement("div");
    container.setAttribute("id","crslist-box");



    let arrow = document.createElement("i");
    arrow.setAttribute("class","fas");
    arrow.classList.add("fa-angle-right")
 
    let mba = document.createElement("div");
    mba.setAttribute("class","single-course-box");
    mba.value = "mba";
    let mba_title = document.createElement("h3");
    mba_title.innerText = `MBA (${(JSON.parse(mba_DB()).length)})`;


    mba.append(mba_title,arrow);

    let ds = document.createElement("div");
    ds.setAttribute("class","single-course-box");
    ds.value = "ds";
    let ds_title = document.createElement("h3");
    ds_title.innerText = `Data Science (${(JSON.parse(ds_DB()).length)})`;

    let arrow1 = document.createElement("i");
    arrow1.setAttribute("class","fas");
    arrow1.classList.add("fa-angle-right")
  
    ds.append(ds_title,arrow1);

    let ml = document.createElement("div");
    ml.setAttribute("class","single-course-box");
    ml.value = "ml";
    let ml_title = document.createElement("h3");
    ml_title.innerText = `AI | ML (${(JSON.parse(ml_DB()).length)})`;

    let arrow2 = document.createElement("i");
    arrow2.setAttribute("class","fas");
    arrow2.classList.add("fa-angle-right")
 
    ml.append(ml_title,arrow2);
   

    let bc = document.createElement("div");
    bc.setAttribute("class","single-course-box");
    bc.value = "bc";
    let bc_title = document.createElement("h3");
    bc_title.innerText = `Technology & Blockchain (${(JSON.parse(bc_DB()).length)})`;

    let arrow3 = document.createElement("i");
    arrow3.setAttribute("class","fas");
    arrow3.classList.add("fa-angle-right")

    bc.append(bc_title,arrow3);

    let hr1 = document.createElement("hr");
    let hr2 = document.createElement("hr");
    let hr3 = document.createElement("hr");
 //    let hr4 = document.createElement("hr");
  
 let di = document.createElement("div");
     di.setAttribute("id","dc-container")

    container.append(mba,hr1,ds,hr2,ml,hr3,bc);
    
    course_btn.append(container,di);   
}



function showHowerCourse(course_btn,data) {
    let course_container = document.getElementById("dc-container");
    
    course_container.innerHTML = "";
    
    
    data.forEach(element => {
        
        let course_card = document.createElement("div");
        course_card.setAttribute("class","course-card");
    
        let img_div = document.createElement("div");
        let img = document.createElement("img");
        img.src = element.homePg.logoimg;
        img_div.append(img);
    
        let course_detail = document.createElement("div");
         course_detail.setAttribute("class","course-detail-in-card");
         let h3 = document.createElement("h3");
         h3.innerText = element.homePg.title;
    
         let p = document.createElement("p");
         p.innerText = element.homePg.institute;
    
         let duration = document.createElement("h4");
         duration.innerText = element.homePg?.duration;
    
         course_detail.append(h3,p,duration);
    
         let arrow_div = document.createElement("div");
         let arrowRight = document.createElement("i");
    
         arrowRight.setAttribute("class","fas");
         arrowRight.classList.add("fa-arrow-right");
    
         arrow_div.append(arrowRight);
    
         course_card.append(img_div,course_detail,arrow_div);
    
         course_container.append(course_card);
    
    
    
    });
    course_btn.append(course_container);
    }

    function single_course_box_event(mba_DB,ds_DB,ml_DB,bc_DB,course_btn) {
        let courseBoxArr = document.getElementsByClassName("single-course-box");

for(let i=0; i<courseBoxArr.length; i++) {
    courseBoxArr[i].addEventListener("mouseenter",()=>{
     
        let value = courseBoxArr[i].value;
       if(value=="mba") {
          let data = JSON.parse(mba_DB());
          showHowerCourse(course_btn,data);
       } else if(value=="ds") {
        let data = JSON.parse(ds_DB());
          showHowerCourse(course_btn,data);
       } else if(value=="ml") {
        let data = JSON.parse(ml_DB());
          showHowerCourse(course_btn,data);
       } else if(value=="bc") {
        let data = JSON.parse(bc_DB());
          showHowerCourse(course_btn,data);
       }
        
    })

}

    }


    export {courseByCateg,showHowerCourse,single_course_box_event}