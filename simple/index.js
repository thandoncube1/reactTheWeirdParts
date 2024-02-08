function getInformation() {
    let firstName = document.getElementById("first").value
    let lastName = document.getElementById("last").value
    let age = document.getElementById("age").value
    let gender = document.getElementById("gender").value || "male"
    let image = document.getElementById("image").value

    alert({firstName, lastName, age, gender, image});
}