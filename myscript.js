// Get the forms and inputs
const loginForm = document.querySelector('form.login');
const signupForm = document.querySelector('form.signup');
const loginEmailInput = loginForm.querySelector('input[type="text"]');
const loginPasswordInput = loginForm.querySelector('input[type="password"]');
const signupEmailInput = signupForm.querySelector('input[type="text"]');
const signupPasswordInput = signupForm.querySelector('input[type="password"]');
const signupConfirmPasswordInput = signupForm.querySelector('input[type="password"][placeholder="Confirm Password"]');

// Store the data in local storage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Signup form submission
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signupEmailInput.value;
  const password = signupPasswordInput.value;
  const confirmPassword = signupConfirmPasswordInput.value;

  if (password!== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  const user = { email, password };
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  alert('Signed up successfully!');
});

// Login form submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginEmailInput.value;
  const password = loginPasswordInput.value;

  const user = users.find((user) => user.email === email && user.password === password);
  if (user) {
    // Redirect to das.html
    window.location.href = 'file:///C:/src/Projects/WebDev%20Projects/Hackrush_3.0/src/pages/home.html';
  } else {
    alert('Invalid email or password');
  }
});

// Toggle forms
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");

loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  document.querySelector(".title-text.login").style.marginLeft = "0%";
});
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  document.querySelector(".title-text.login").style.marginLeft = "-50%";
});
