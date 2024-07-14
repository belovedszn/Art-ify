const signUpBtn=document.getElementById('createIdBtn');
const signUpMobileBtn=document.getElementById('createMobileIdBtn');
const signInBtn=document.getElementById('loginBtn');
const signInMobileBtn=document.getElementById('loginMobileBtn');
const signInForm=document.getElementById('signin');
const mobileSignInForm=document.getElementById('mobileSignInForm');
const signUpForm=document.getElementById('signup');
const mobileSignUpForm=document.getElementById('mobileSignUpForm');

signUpBtn.addEventListener('click', ()=> {
    signInForm.style.display="none";
    signUpForm.style.display="flex";
})
signInBtn.addEventListener('click', ()=> {
    signInForm.style.display="flex";
    signUpForm.style.display="none";
})

signUpMobileBtn.addEventListener('click', ()=> {
  mobileSignInForm.style.display="none";
  mobileSignUpForm.style.display="flex";
});

signInMobileBtn.addEventListener('click', ()=> {
  mobileSignInForm.style.display="flex";
  mobileSignUpForm.style.display="none";
  
})











/*jQuery(document).ready(function ($) {
  $(document).on("click", "button.login-btn", function () {
    $(".login-page").toggleClass("active");
    $(".page-left").toggleClass("active");
    $(".page-right").toggleClass("active");
    $(".login-btn").toggleClass("active");
    $(".socials").toggleClass("active");
    $(".social-icon").toggleClass("active");
    $(".names").toggleClass("active");

    if ($(".login-btn").hasClass("active")) {
      $(".signin-btn").attr("id", "submitSignUp");
    } else {
      $(".signin-btn").attr("id", "submitSignIn");
    }

    $(".acct-title").html("Create Account");
    $(".login-title").html("Welcome!");
    $(".login-p").html(
      "Kindly login with your personal details to keep connected with us"
    );
    $(".password").show();
    $(".password-forgot").hide();
    $(".signin-btn").html("Create Account");
    $(".login-btn").html("Login");
    $(".acct-p").show();
    $(".email").show();
    $(".socials").show();
    $(".names").show();
  });

  $(document).on("click", "button.login-btn.active", function () {
    $(".acct-title").html("Sign In");
    $(".login-title").html("Hello Friend!");
    $(".login-p").html(
      "Enter Your Personal Info And Start Your Journey With Us"
    );
    $(".password").show();
    $(".password-forgot").show();
    $(".socials").hide();
    $(".acct-p").hide();
    $(".email").show();
    $(".names").hide();

   
    
  });  
})
*/