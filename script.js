const steps = document.querySelectorAll('.step');
const formSteps = document.querySelectorAll('.form-step');
const nextButtons = document.querySelectorAll('.next');
const prevButtons = document.querySelectorAll('.prev');
let currentStep = 0;

nextButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (currentStep < formSteps.length - 1) {
      formSteps[currentStep].classList.remove('active');
      steps[currentStep].classList.remove('active');
      currentStep++;
      formSteps[currentStep].classList.add('active');
      steps[currentStep].classList.add('active');
    }
  });
});

prevButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (currentStep > 0) {
      formSteps[currentStep].classList.remove('active');
      steps[currentStep].classList.remove('active');
      currentStep--;
      formSteps[currentStep].classList.add('active');
      steps[currentStep].classList.add('active');
    }
  });
});