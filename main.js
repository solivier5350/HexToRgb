const hexInput = document.getElementById("hexInput");
const rgbInput = document.getElementById("rgbInput");
const hexToRgbButton = document.getElementById("convertButtonL");
const rgbToHexButton = document.getElementById("convertButtonR");
const rgbResult = document.getElementById("rgbResult");
const hexResult = document.getElementById("hexResult");

let A,a = 10, B,b = 11, C,c = 12, D,d = 13, E,e = 14, F,f = 15;

function hexToRGB() {
  let hex = hexInput.value.trim();
  
  if (!/^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex)) {
    rgbResult.textContent = "Invalid Hex Code";
    return;
  }
    //Checks if the hex code is valid
  else if (hex[0] !== '#') {
    hex = '#' + hex; // Ensure the hex code starts with '#'
  }

  hex = hex.replace('#', ''); // Remove the '#' for processing
  if (hex.length === 3) {
    hex = hex.split('').map(x => x + x).join('');
  }

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  rgbResult.textContent = `rgb(${r}, ${g}, ${b})`;
}

hexToRgbButton.addEventListener("click", hexToRGB);

[hexInput].forEach(input => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      hexToRGB();
    }
  })
})
//allows for Enter key to be used

hexInput.addEventListener("input", () => {
  rgbResult.textContent = "";
})
//Removes result when input changes

function rgbToHex() {
  let rgb = rgbInput.value.trim();

  const match = /^(rgb)?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/.exec(rgb);
  if (!match) {
    hexResult.textContent = "Invalid RGB Code";
    return;
  }

  let r = parseInt(match[2], 10);
  let g = parseInt(match[3], 10);
  let b = parseInt(match[4], 10);

  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  const hex =
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0");

  hexResult.textContent = `#${hex.toUpperCase()}`;
}

rgbToHexButton.addEventListener("click", rgbToHex);

rgbInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    rgbToHex();
  }
})
//allows for Enter key to be used

rgbInput.addEventListener("input", () => {
  hexResult.textContent = "";
})
//Removes result when input changes