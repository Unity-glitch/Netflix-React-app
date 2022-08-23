const fname=document.getElementById("details")
const email=document.getElementById("details1")
const password=document.getElementById("details2")
const submit=document.getElementById("button2")


function det() {
    if (fname.value.length<2 || fname.value.length >15) {
        alert("At least 3 characters");
        fname.focus();
        return false
    }
    if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      alert("Please enter a valid email!");
      email.focus();
      return false;
    }
    return true

}