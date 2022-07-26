function navexpand() {
    var navbtn = document.getElementById("navbar");
    if (navbtn.className === "nav") {
      navbtn.className += " responsive";
    } else {
      navbtn.className = "nav";
    }
}

const themeMap = {
    dark: "light",
    light: "dark"
  };
  
const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],
      localStorage.setItem('theme', tmp),
      tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
    
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;