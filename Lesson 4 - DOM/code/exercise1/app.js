window.addEventListener('DOMContentLoaded', function () {
    //When the page structure is loaded...
    var sub = document.getElementById("submit");
    var odd = document.getElementById("odd");
    var even = document.getElementById("even");
    
    sub.addEventListener('click', function () {
        if(odd.value % 2 == 1){
            odd.classList.remove('invalid');
            odd.classList.add('valid');
        }else{
            odd.classList.remove('valid');
            odd.classList.add('invalid');
        }
        if(even.value % 2 == 0){
            even.classList.remove('invalid');
            even.classList.add('valid');
        }else {
            even.classList.remove('valid');
            even.classList.add('invalid');
        }
    });


});
