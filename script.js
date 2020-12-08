// TODO: add code here

const container = document.getElementById("container");



//document.getElementById("fname").innerHTML="this is invalid name ";
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        // Access the JSON in the response
        response.json().then( function(json) {
            console.log(json);
     

            container.innerHTML = "";
            for(let i=0; i<json.length;i++){
                    
            container.innerHTML += `
            <div class="astronaut">
                    
            <div class="bio">
                 <h3>${json[i].firstName} ${json[i].lastName}}</h3>
                      <ul>
                         <li>Hours in space: ${json[i].hoursInSpace}</li>
                         <li id="ActiveGreen">Active: ${json[i].active}</li>
                     <li>Skills: ${json[i].skills}</li>
                      </ul>
                    </div>
       <img class="avatar" src=${json[i].picture}>
                  
      </div>
                                                                                             
          `;
            }
        });
    });
});

