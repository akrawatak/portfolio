


var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    var tabprojects= document.getElementsByClassName("tab-projects");


    tablinks.addEventListener("click",function(){
        opentab('skills')
    })

    tacontents.addEventListener("click",function(){
        opentab('education')
    })


    tablinks.addEventListener("click",function(){
        opentab('projects')
    })

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tablink.classList.remove("active-tab");
        }

        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }



var sidemeue = document.getElementById("sidemenue");

function openmenue(){
    sidemeue.style.right = "0";
}

function closemenue(){
 sidemeue.style.right ="200px";
}



    const scriptURL = 'https://script.google.com/macros/s/AKfycbyyHT2-JAG9k9IabGUx98tpOGW1nDdyV46hijYLKfKWyRNVlW2EWHT63DTFKIFms0Zn/exec'
    const form = document.forms['submit-to-google-sheet']
   const msg = document.getElementById("msg");
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
          msg.innerHTML = "Message sent succesfully ";
          setTimeout(function(){
            msg.innerHTML = ""
          },5000)
          form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
