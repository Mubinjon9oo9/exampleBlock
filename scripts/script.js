function check(el){
    if (el.email.value.length<3){
        document.getElementById('error').style.display="inline";
        el.email.style.borderColor="red";
        el.email.style.color="red!";
        el.email.style.borderStyle="solid";
        return false;
    }
    window.alert("Мы отравили сообщение с подтверждением вам на почту!")
    return true;
}
