function setCookies() {
  const firstname = document.getElementById("firstname").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!firstname || !email) {
    alert("Please enter both firstname and email.");
    return;
  }

  const date = new Date();
  date.setTime(date.getTime() + 10 * 24 * 60 * 60 * 1000); // 10 days
  const expires = "expires=" + date.toUTCString();

  document.cookie = `firstname=${encodeURIComponent(firstname)}; ${expires}; path=/`;
  document.cookie = `email=${encodeURIComponent(email)}; ${expires}; path=/`;

  showWelcomeMessageOrForm();
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return decodeURIComponent(value);
    }
  }
  return "";
}

function showForm() {
  // Show the login form
  const form = document.getElementById("loginForm");
  form.style.display = "block";

  // Remove welcome message if present
  const welcome = document.getElementById("welcomeMessage");
  if (welcome) {
    welcome.remove();
  }

  // Reset page title if changed
  const pageTitle = document.getElementById("pageTitle");
  pageTitle.textContent = "Login to the website";
}

function hideForm() {
  document.getElementById("loginForm").style.display = "none";
}

function deleteCookiesAndShowForm() {
  document.cookie = "firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  showForm();
}

function showWelcomeMessageOrForm() {
  const firstname = getCookie("firstname");

  if (!firstname) {
    showForm();
    return;
  }

  // Hide form and change page title
  hideForm();
  const pageTitle = document.getElementById("pageTitle");
  pageTitle.textContent = "";

  // Remove old welcome message if any
  const oldWelcome = document.getElementById("welcomeMessage");
  if (oldWelcome) oldWelcome.remove();

  // Create welcome message
  const h1 = document.createElement("h1");
  h1.id = "welcomeMessage";
  h1.textContent = `Welcome ${firstname}`;

  // Create logout link
  const logoutLink = document.createElement("a");
  logoutLink.id = "logoutLink";
  logoutLink.textContent = "(logout)";
  logoutLink.href = "#";
  logoutLink.onclick = function (e) {
    e.preventDefault();
    deleteCookiesAndShowForm();
  };

  h1.appendChild(logoutLink);
  document.body.appendChild(h1);
}

// Initial page setup on load
window.onload = function () {
  showWelcomeMessageOrForm();
};

// Rendre les fonctions globales (pour onclick inline)
window.setCookies = setCookies;
window.getCookie = getCookie;
window.showForm = showForm;
window.hideForm = hideForm;
window.deleteCookiesAndShowForm = deleteCookiesAndShowForm;
window.showWelcomeMessageOrForm = showWelcomeMessageOrForm;
