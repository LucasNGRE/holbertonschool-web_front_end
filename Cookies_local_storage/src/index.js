function setCookiesAndShowWelcomeMessage() {
  const firstname = document.getElementById("firstname").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!firstname || !email) {
    alert("Please enter both firstname and email.");
    return;
  }

  // Set cookies for 10 days
  Cookies.set("firstname", firstname, { expires: 10, path: "/" });
  Cookies.set("email", email, { expires: 10, path: "/" });

  showWelcomeMessageOrForm();
}

function showForm() {
  const form = document.getElementById("loginForm");
  form.style.display = "block";

  const welcome = document.getElementById("welcomeMessage");
  if (welcome) {
    welcome.remove();
  }

  const pageTitle = document.getElementById("pageTitle");
  pageTitle.textContent = "Login to the website";
}

function hideForm() {
  document.getElementById("loginForm").style.display = "none";
}

function deleteCookiesAndShowForm() {
  Cookies.remove("firstname", { path: "/" });
  Cookies.remove("email", { path: "/" });
  showForm();
}

function showWelcomeMessageOrForm() {
  const firstname = Cookies.get("firstname");

  if (!firstname) {
    showForm();
    return;
  }

  hideForm();
  const pageTitle = document.getElementById("pageTitle");
  pageTitle.textContent = "";

  const oldWelcome = document.getElementById("welcomeMessage");
  if (oldWelcome) oldWelcome.remove();

  const h1 = document.createElement("h1");
  h1.id = "welcomeMessage";
  h1.textContent = `Welcome ${firstname}`;

  const logoutLink = document.createElement("a");
  logoutLink.id = "logoutLink";
  logoutLink.textContent = " (logout)";
  logoutLink.href = "#";
  logoutLink.onclick = function (e) {
    e.preventDefault();
    deleteCookiesAndShowForm();
  };

  h1.appendChild(logoutLink);
  document.body.appendChild(h1);
}

// Initial load
window.onload = showWelcomeMessageOrForm;

// Export for inline usage in HTML
window.setCookiesAndShowWelcomeMessage = setCookiesAndShowWelcomeMessage;
