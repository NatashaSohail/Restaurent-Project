function toggleTheme() {
  document.body.classList.toggle("dark");

  const btn = document.querySelector("#btn");
  if (document.body.classList.contains("dark")) {
    btn.style.background = "#060505ff";
  } else {
    btn.style.background = "#b5bcbeff";
  }
}
  // Toggle Special Description
    const toggleBtn = document.getElementById("toggleSpecial");
    const specialCard = document.getElementById("specialCard");

    toggleBtn.addEventListener("click", () => {
      specialCard.classList.toggle("show");
      toggleBtn.textContent = specialCard.classList.contains("show")
        ? "Hide Special"
        : "Show Special";
    });
  
    // Contact validation
    const contactForm=document.getElementById('contactForm');
    const emailInput=document.getElementById('email');
    const emailError=document.getElementById('emailError');
    contactForm.addEventListener('submit',e=>{
      if(!emailInput.value.includes('@')){
        e.preventDefault();
        emailInput.classList.add('invalid');
        emailError.classList.add('show');
      }
    });
    emailInput.addEventListener('input',()=>{
      emailInput.classList.remove('invalid');
      emailError.classList.remove('show');
    });