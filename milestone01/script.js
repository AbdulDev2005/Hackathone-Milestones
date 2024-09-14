var toggleButto = document.getElementById("toggle-skills");
var skills = document.getElementById("skills");
toggleButto.addEventListener('click', function () {
    //  Anonymous function
    if (skills.style.display === 'none') {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
//  event listner:wait for user to click the button
