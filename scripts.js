function calculateTip(event) {
  event.preventDefault();

  let bill = document.getElementById("bill").value;
  let serviceQual = document.getElementById("serviceQual").value;
  let numOfPeople = document.getElementById("numOfPeople").value;

  if ((bill === "") | (serviceQual === 0)) {
    alert("Por favor, preencha os valores");
    return;
  }

  if ((numOfPeople === "") | (numOfPeople <= 1)) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  let total = (bill * serviceQual) / numOfPeople;
  total = total.toFixed(2);

  document.getElementById("tip").innerHTML = total;
  document.getElementById("totalTip").style.display = "block";
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document
  .getElementsByClassName("tipsForm")[0]
  .addEventListener("submit", calculateTip);
