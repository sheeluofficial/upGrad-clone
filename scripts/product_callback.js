

    const checkCallback = () => {

        const first_name = document.getElementById("first_name");
        const l_name = document.getElementById("l_name");
        const email_add = document.getElementById("email_add");
        const ph_no = document.getElementById("ph_no");
        

        if (first_name.value.length == 0) {
            first_name.value = "";
            first_name.style.borderColor = "red";
            first_name.style.borderWidth = "1px ";
        }
        if (l_name.value.length == 0) {
            l_name.value = "";
            l_name.style.borderColor = "red";
            l_name.style.borderWidth = "1px ";
        }
        if (email_add.value.length == 0) {
            email_add.value = "";
            email_add.style.borderColor = "red";
            email_add.style.borderWidth = "1px ";
        }
        if (ph_no.value.length <10) {
            ph_no.value = "";
            ph_no.style.borderColor = "red";
            ph_no.style.borderWidth = "1px ";
        }
        if(first_name.value.length !== 0 && l_name.value.length !== 0 && email_add.value.length !== 0 && ph_no.value.length >= 10 ){
            alert("we will give you a callback !!");
             first_name.value = "";
              l_name.value = "";
               email_add.value = "";
                ph_no.value = "";

                first_name.style.borderWidth = "0px ";
                l_name.style.borderWidth = "0px ";
                email_add.style.borderWidth = "0px ";
                ph_no.style.borderWidth = "0px ";

        }
    }
export default checkCallback;