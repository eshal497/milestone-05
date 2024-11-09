// Listing element
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
   event.preventDefault();
 

    //type assertion
    const profilePicInput = document.getElementById('profilepic') as HTMLInputElement;

  const nameElement =document.getElementById('name') as HTMLInputElement;
  const emailElement =document.getElementById('email') as HTMLInputElement;
  const phoneElement =document.getElementById('phone') as HTMLInputElement; 
  const eduactionElement =document.getElementById('eduaction') as HTMLInputElement;
  const experienceElement =document.getElementById('experience') as HTMLInputElement;
  const skillsElement =document.getElementById('skills') as HTMLInputElement;

//** 
const usernameElement = document.getElementById(
  "username"
) as HTMLInputElement;







   if (profilePicInput && nameElement && emailElement && phoneElement &&eduactionElement && experienceElement && skillsElement  && usernameElement){ 
    
    

//**** */
       const name = nameElement.value;
       const email = emailElement.value;
       const phone = phoneElement.value;
       const eduaction = eduactionElement.value;       
       const experience = experienceElement.value;        
       const skills = skillsElement.value;
//****** */

       //** */
      const username = usernameElement.value;
      const uniquePath = `resume/${username.replace(/\s+/g, '')} _cv.html`




  

// pic element
const profilePicFile =profilePicInput.files?.[0]
const profilepicURL = profilePicFile ? URL.createObjectURL(profilePicFile) : "";



   const resumeOutput =` 
   <h2>Resume<h2> 
   ${profilepicURL ?`<img src="${profilepicURL } alt="profilrpic" class="profilepic"> ` : "" }
   <p><strong>Name:</strong> <span id="edit-name" class="editable">${name} </span> </p>
   <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>
   <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable"> ${phone}</span> </p>
   
   <h3> Eduaction</h3>
   <p id="edit-eduaction" class="editable"> ${eduaction}</p>


   <h3>Experience</h3>
   <p  id="edit-experience" class="editable" >${experience}</p>

  <h3> skills</h3>
   <p  id="edit-skills" class="editable"> ${skills}</p>
   `;  

   //** */
   const downloadLink = document.createElement('a')
   downloadLink.href ='data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
   downloadLink.download = uniquePath;
   downloadLink.textContent = 'Download Your 2024 Resume';
   


//****** */
   // display the resume output

    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
      resumeOutputElement.innerHTML =  resumeOutput;
      resumeOutputElement.classList.remove("hidden");
    

      // create container for button
const buttonsContainer = document.createElement("div");
buttonsContainer.id = "buttonsContainer";
resumeOutputElement.appendChild(buttonsContainer);

//add download pdf button
const downloadButton = document.createElement("button");
downloadButton.textContent = "Download as PDF";
downloadButton.addEventListener("click", () => {
  window.print(); //open the print dialogue allow the user to save as pdf
});
buttonsContainer.appendChild(downloadButton);

//add shareable link button
const shareLinkButton = document.createElement("button");
shareLinkButton.textContent = "Copy Shareable Link";
shareLinkButton.addEventListener("click", async () => {
  try{
    //create unique shareable link 
    const shareableLink = `https://yourdomain.com/resume/${name.replace(
      /\s+/g,
      "_"

      )}_cv.html`

      //use clipboard
      await navigator.clipboard.writeText(shareableLink);
      alert("shareable link copied to clipboard");
  }catch (err) {
    console.error("Failed to copy link: ", err);
    alert("Failed to copy link to clipboard. plz try again");
  }
});
buttonsContainer.appendChild(shareLinkButton);
    }else{
      console.error("Resume output containet not found ");
    }
  }else{
    console.error("Form element are missing")
  }
});




function makeEditable() {
   const editableElement = document.querySelectorAll('editable');
   editableElement.forEach(element => {
    element.addEventListener('click' , function(){
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || "" ;

      //replace content
    if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
      const input =document.createElement('input')
      input.type = 'text'
      input.value = currentValue
      input.classList.add('editing-input')

      input.addEventListener('blur', function (){
        currentElement.textContent = input.value;
        currentElement.style.display = 'inline'
        input.remove()
      })
      

      currentElement.style.display = 'none'
      currentElement.parentNode?.insertBefore(input,currentElement)
      input.focus()
    }

    })
   })
}
