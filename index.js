// running local server on port 8000 otherwise it will pop error on cors policy

const button = document.getElementById("button");
button.addEventListener("click", loadText);

function loadText() {
  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };

  xhr.open("GET", "sample.txt", true);
  xhr.send();
}
