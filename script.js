/*To built the logic, I put: onclick="toggle()" as a div attribute where I want the function happened interacting with the click*/
function toggle() {
  const html = document.documentElement
  html.classList.toggle("light")

  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }/*

  /*Pick the image*/
  const img = document.querySelector("#profile img")
  /*add the condition*/
  const lightMode = html.classList.contains("light")
  if (lightMode) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
  /*if (lightMode) {
    img.setAttribute("alt", "Mayk Brito photo light mode")
  } else {
    img.setAttribute("alt", "Mayk Brito photo dark mode")
  }*/
}
