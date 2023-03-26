const regex = /^[a-z ]{2,30}$/i;


function seterror(id, error) {
    element = document.getElementById(id)
    element.getElementsByClassName("formerror")[0].innerHTML = error
}

function clean(){
   errors = document.getElementsByClassName("formerror")
   for(let iteam of errors){
    iteam.innerHTML= "";
   }
}

function validation() {
    let returnval = true;
    clean()
    let name = document.forms["myform"]["fname"].value


    // if (name.length < 25) {
    //     seterror("name", "length is too short ")
    //     returnval = false
    // }
     if(!regex.test(name)){
        seterror("name","should contain only string");
        returnval = false;
    }
//     return returnval
// }

    let number = document.forms["myform"]["fnumber"].value
           if (number.length < 10) {
        seterror("number", "please check your number")
        returnval = false
    }
    // let password
    let email = document.forms["myform"]["femail"].value
           if (email.length > 35) {
        seterror("email", "please check your email")
        returnval = false
    }
    let pass =document.forms["myform"]["fpass"].value
    let cpass =document.forms["myform"]["fcpass"].value
    if(pass!=cpass){
      seterror("pass","please check your password")
      returnval= false
    }

        return returnval
        
    }

