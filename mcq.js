function fnSelectAns(z,e) {

    // Resetting all options
    var elements = document.getElementsByClassName(z);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="transparent";
        elements[i].style.color="#000";
        elements[i].classList.remove('selected');
    }
    // Setting New option
    var b = document.querySelector('.'+e);
    b.style.backgroundColor = "blue"
    b.style.color = "white";
    b.className += " selected";
}

function fnResult() {
    var a = ['q1ans1','q2ans3','q3ans4','q4ans3','q5ans1','q6ans2','q7ans3'];
    debugger;
    var elements = document.getElementsByClassName('selected');
    if(elements.length > 0) {
        for (var i = 0; i < elements.length; i++) {
        
            var classname = elements[i].className.split(' ');
            classname = classname[2];
            var b = document.querySelector('.'+classname);
            b.style.color = "white";
            if(a[i] === classname) {
                b.style.backgroundColor = "lime"
            } else {
                b.style.backgroundColor = "red"
                var c = document.querySelector('.'+a[i]);
                c.style.backgroundColor = "lime"
                c.style.color = "white"
            }
        }
    } else {
        alert('Please Select at least one option');
    }
   
 }
