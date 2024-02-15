function calculateAge(birthDate) {
    var today = new Date();
    var dob = new Date(birthDate);
    var age = today.getFullYear() - dob.getFullYear();
    if (today < new Date(today.getFullYear(), dob.getMonth(), dob.getDate())) {
        age--;
    }
    return age;
}

window.onload = function() {
    var birthDate = "2003-06-12";
    document.getElementById("bio").innerHTML = document.getElementById("bio").innerHTML.replace(/\[age\]/, calculateAge(birthDate));
}
