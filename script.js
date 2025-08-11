let sets = {};
let currentSet = "";

async function fetchSets() {
  const response = await fetch("skins.json");
  const data = await response.json();
  sets = data.sets;

  const colorSelect = document.getElementById("color");
  data.colors.forEach(color => {
    const option = document.createElement("option");
    option.value = color;
    option.textContent = color.charAt(0).toUpperCase() + color.slice(1);
    colorSelect.appendChild(option);
  });
}

async function generateSet() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = <p class="loading">Генерация...</p>;
  setTimeout(() => {
    const color = document.getElementById("color").value;
    const knife = sets[color].knives[Math.floor(Math.random() * sets[color].knives.length)];
    const gloves = sets[color].gloves[Math.floor(Math.random() * sets[color].gloves.length)];

    currentSet = Нож: ${knife.name}, Перчатки: ${gloves.name};
    resultDiv.innerHTML = `
      <h2>🔪 ${knife.name}</h2>
      <img src="${knife.img}" alt="${knife.name}">
      <h2>🧤 ${gloves.name}</h2>
      <img src="${gloves.img}" alt="${gloves.name}">
    `;

    const historyItem = document.createElement("li");
    historyItem.textContent = currentSet;
    document.getElementById("historyList").prepend(historyItem);
  }, 1500);
}

function copySet() {
  if (currentSet) {
    navigator.clipboard.writeText(currentSet);
    alert("Сет скопирован в буфер обмена!");
  } else {
    alert("Сначала сгенерируйте сет.");
  }
}

window.onload = fetchSets;