// Get references to the form and display area
// we are making varriable through const 
const form = document.getElementById("resume-form")as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;
const shareableLinkContainer = document.getElementById(  "shareable-link-container") as HTMLDivElement;
const shareableLinkElement = document.getElementById("shareable-link") as HTMLAnchorElement;
const downloadPdfButton = document.getElementById("download-pdf") as HTMLButtonElement;

// handle form submission 
form.addEventListener("submit",(event:Event)=>{
// addEventListener wait gor user to click button


    event.preventDefault(); //prevent pg reload
    //collect input values 
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const name = (document.getElementById("name")as HTMLInputElement).value;
    const email = (document.getElementById("email")as HTMLInputElement).value;
    const phone = (document.getElementById("phone")as HTMLInputElement).value;
    const education = (document.getElementById("education")as HTMLInputElement).value;
    const experience = (document.getElementById("experience")as HTMLInputElement).value;
    const skills = (document.getElementById("skills")as HTMLInputElement).value;

   //  save form data in local storage with the username as key
   const resumeData= {
      name,
      email,
      phone,
      education,
      experience,
      skills
   };
   localStorage.setItem(username, JSON.stringify(resumeData));
   //saving the data locally

    //Generate the resume content dynamic resume 

    const resumeHTML =  `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name: </b><span contenteditable="true">${name}</span></p>
    <p><b>Email: </b><span contenteditable="true">${email}</span></p>
    <p><b>Phone: </b><span contenteditable="true">${phone}<span></p>

            <h3>Education</h3>
            <p><span contenteditable="true">${education}</span></p>

            <h3>Experience</h3>
            <p><span contenteditable="true">${experience}<span></p>

            <h3>Skills</h3>
            <p><span contenteditable="true">${skills}</span></p>
         `;
         //display the generated resume
            resumeDisplayElement.innerHTML=resumeHTML;

          //   Generate a shareable url link with username only
          const shareableURL=
   ` $(window.location.origin)?username= ${encodeURIComponent(username)}`
   
   //display the shareable link
   shareableLinkContainer.style.display="block";
   shareableLinkElement.href=shareableURL;
   shareableLinkElement.textContent= shareableURL; 
});
//Handle PDF Download
downloadPdfButton.addEventListener("click",()=>{
   window.print();//this will open the print dialog & allow the user to save as pdf
});
// Prefill form based on the username in URL
window.addEventListener("DOMContentLoaded",()=>{
   const urlParams = new URLSearchParams(window.location.search);
   const username= urlParams.get("username");
});

if (username) {
   //Autofill form if data is found in storage
   
   const saveResumeData = localStorage.getItem("username");
   if(saveResumeData) {
      const resumeData = JSON.parse(saveResumeData);
      (document.getElementById("username") as HTMLInputElement).value = resumeData.username;
      (document.getElementById("name")as HTMLInputElement).value = resumeData.name;
      (document.getElementById("email")as HTMLInputElement).value = resumeData.email;
      (document.getElementById("phone")as HTMLInputElement).value = resumeData.phone;
      (document.getElementById("education")as HTMLInputElement).value = resumeData.education;
      (document.getElementById("experience")as HTMLInputElement).value = resumeData.experience;
      (document.getElementById("skills")as HTMLInputElement).value = resumeData.skills;


   }
}
