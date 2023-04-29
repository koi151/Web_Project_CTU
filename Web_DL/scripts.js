// GET DATE
document.addEventListener('DOMContentLoaded', () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}/${month}/${year}`;
    console.log(currentDate); // "17-6-2022"

    var disTime = document.querySelector(".date");
    disTime.innerHTML = currentDate;
    console.log(disTime);

    // GOOGLE TRANSLATE MODIFY 
});

// Remove .flex-20 for responsive
window.addEventListener('resize', function() {
    var elements = document.querySelectorAll('.section-one .box-wrapper .col-lg-2');
    if (window.innerWidth < 996) {
        elements.forEach(function(element) {
            element.classList.remove('flex-20');
        });
    } else if (window.innerWidth >= 991) {
        elements.forEach(function(element) {
            element.classList.add('flex-20');
        });
    }
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'vi', 
        includedLanguages: 'en', 
        autoDisplay: false
    }, 'google_translate_element');
    var a = document.querySelector("#google_translate_element select");
    a.selectedIndex=1;
    a.dispatchEvent(new Event('change'));
}

// JQuery
$(document).ready(function(){
    $(".name1").click(function(){
        $("#myDiv").load("myPage.html");
    });
});