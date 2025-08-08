const submitButton = document.getElementById("submit");

let email = document.getElementById("emailAddress");
let emailBody = document.getElementById("emailBody");
let subject = document.getElementById("subjectLine");


function handleClick() {
    console.log("Button clicked");

    let formData = {
        email: email.value,
        subject: subject.value,
        body: emailBody.value
    }
    console.log(formData);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/"); 
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("Email sent successfully");
        } else {
            console.error("Error sending email: ", xhr.responseText);
        }
    };

    xhr.send(JSON.stringify(formData));
}

submitButton.addEventListener('click', handleClick);
