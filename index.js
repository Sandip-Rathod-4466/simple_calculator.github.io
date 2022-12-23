let button = document.querySelector('.buttons')
let btn = document.querySelectorAll('span')
let value = document.getElementById('value')

 for(let i=0; i<btn.length;i++ ){
    btn[i].addEventListener('click',function(){
        if(this.innerHTML=='='){
            value.innerHTML = eval(value.innerHTML)
        }

        else{
            if(this.innerHTML=='Clear'){
                value.innerHTML= '';
            }
            else{
                value.innerHTML += this.innerHTML;
            }
        }
    })
 }

//  Dark Mode

let DarkModeTogle = document.getElementById("theme");
let DarkMode = localStorage.getItem("dark");

    const enableDarkMode = () => {
        DarkMode = localStorage.getItem("dark");
        document.body.classList.toggle("darkMode");

        if (document.body.classList.contains("darkMode")) {
        DarkMode = localStorage.setItem("dark", "enabled");
        }
        else {
        DarkMode = localStorage.setItem("dark", null);
        }
    };


    if (DarkMode === 'enabled') {
        document.body.classList.add('darkMode')
    }

    DarkModeTogle.addEventListener("click", () => {
    enableDarkMode();
    });
