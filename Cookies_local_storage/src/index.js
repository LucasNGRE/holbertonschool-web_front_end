function setCookies() {
  const firstname = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;

  const date = new Date();
  date.setTime(date.getTime() + 10 * 24 * 60 * 60 * 1000); // 10 days
  const expires = "expires=" + date.toUTCString();

  document.cookie = `firstname=${firstname}; ${expires}; path=/`;
  document.cookie = `email=${email}; ${expires}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split("=");
    if (key === name) {
      return value;
    }
  }
  return "";
}

function showCookies() {
  const firstname = getCookie("firstname");
  const email = getCookie("email");

  const p = document.createElement("p");
  p.textContent = `Email: ${email} - Firstname: ${firstname}`;
  document.body.appendChild(p);
}

window.setCookies = setCookies;
window.getCookie = getCookie;
window.showCookies = showCookies;