function setCookies() {
  const firstname = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;

  const date = new Date();
  date.setTime(date.getTime() + (10 * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();

  document.cookie = `firstname=${firstname}; ${expires}; path=/`;
  document.cookie = `email=${email}; ${expires}; path=/`;
}

function showCookies() {
  const cookies = document.cookie.split("; ");
  const myCookies = cookies.filter(cookie =>
    cookie.startsWith("firstname=") || cookie.startsWith("email=")
  );

  const p = document.createElement("p");
  p.innerHTML = `Cookies: ${myCookies.join("; ")}`;
  document.body.appendChild(p);
}

window.setCookies = setCookies;
window.showCookies = showCookies;
