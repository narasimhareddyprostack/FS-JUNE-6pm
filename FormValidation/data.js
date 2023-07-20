let validateForm = () => {
    let name = document.getElementById('userName').value
    let password = document.getElementById('password').value

    if (name == "" ) {
        //alert("Pls Enter Name")
        document.getElementById('userMessage').innerHTML = "Please User Name"
    }
    if(password ==""){
        document.getElementById('passwordMessage').innerHTML = "Pls Enter Password"
    }
    return false
}