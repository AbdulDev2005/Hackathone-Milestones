 const  toggleButton = document.getElementById("toggle-skills")as HTMLButtonElement
 const  skills = document.getElementById("skills") as HTMLElement

 toggleButton.addEventListener('click',()=>{
                                   //  Anonymous function
 if(skills.style.display==='none')
     {
    skills.style.display="block"
 }
 else {
    skills.style.display="none"
 }
})
//  event listner:wait for user to click the button
