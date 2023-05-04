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


//ksndsdnvknskvsdnvksdv
function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
    if(!container.hasClass('active')){
        container.addClass('active');
        evt.preventDefault();
    } else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
        container.removeClass('active');
        container.find('.search-input').val('');
    }
}

function Keysearch() {
    document.getElementById("searchArea").classList.toggle("show");
}
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

function phoneNum()
{
    window.alert("Quý khách vui lòng liên hệ qua số điện thoại:  0285 398 9499");
}


function loginActive()
{
    let t = document.querySelector(".gradient-custom");
    
    if (t.classList.contains('active'))
    {
        let t1 = document.querySelector(".darken-layer");
        t.classList.remove("active");
        t1.classList.remove("active");
        console.log("Resgister form inactive");
    }
    else
    {
        let t1 = document.querySelector(".darken-layer");
        t.classList.add("active");
        t1.classList.add("active");
        console.log("Resgister form active");
    }
}

// Closing box when clicked outside box area

// var modal = document.getElementsById('exit1');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// document.addEventListener('click', function handleClickOutsideBox(event) {
//     // 👇️ the element the user clicked
//     console.log('user clicked: ', event.target);
  
//     const box = document.querySelector(".gradient-custom .card-body");
  
//     if (!box.contains(event.target)) {
//       box.style.display = 'none';
//     }
//   });
  