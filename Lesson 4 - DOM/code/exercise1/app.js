window.addEventListener('DOMContentLoaded', function () {
    //When the page structure is loaded...
    var sub = document.getElementById("submit");
    var odd = document.getElementById("odd");
    var even = document.getElementById("even");
    
    sub.addEventListener('click', function () {
        if(odd.value % 2 == 1){
            odd.classList.add('valid');
        }else{
            odd.classList.add('invalid');
        }
        if(even.value % 2 == 0){
            even.classList.add('valid');
        }else {
            even.classList.add('invalid');
        }
    });


});
