// Get references to the form and display area
// we are making varriable through const 
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("download-pdf");
// handle form submission 
form.addEventListener("submit", function (event) {
    // addEventListener wait gor user to click button
    event.preventDefault(); //prevent pg reload
    //collect input values 
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //  save form data in local storage with the username as key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    //saving the data locally
    //Generate the resume content dynamic resume 
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name: </b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email: </b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone: </b><span contenteditable=\"true\">").concat(phone, "<span></p>\n\n            <h3>Education</h3>\n            <p><span contenteditable=\"true\">").concat(education, "</span></p>\n\n            <h3>Experience</h3>\n            <p><span contenteditable=\"true\">").concat(experience, "<span></p>\n\n            <h3>Skills</h3>\n            <p><span contenteditable=\"true\">").concat(skills, "</span></p>\n         ");
    //display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    //   Generate a shareable url link with username only
    var shareableURL = " $(window.location.origin)?username= ".concat(encodeURIComponent(username));
    //display the shareable link
    shareableLinkContainer.style.display = "block";
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
//Handle PDF Download
downloadPdfButton.addEventListener("click", function () {
    window.print(); //this will open the print dialog & allow the user to save as pdf
});
// Prefill form based on the username in URL
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");
});
if (username) {
    //Autofill form if data is found in storage
    var saveResumeData = localStorage.getItem("username");
    if (saveResumeData) {
        var resumeData = JSON.parse(saveResumeData);
        document.getElementById("username").value = resumeData.username;
        document.getElementById("name").value = resumeData.name;
        document.getElementById("email").value = resumeData.email;
        document.getElementById("phone").value = resumeData.phone;
        document.getElementById("education").value = resumeData.education;
        document.getElementById("experience").value = resumeData.experience;
        document.getElementById("skills").value = resumeData.skills;
    }
}
