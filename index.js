// running local server on port 8000 otherwise it will pop error on cors policy

const button = document.getElementById("button");
button.addEventListener("click", loadText);
text = document.getElementById("text");

function loadText() {
  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    if (this.status === 200) {
      text.innerHTML = this.responseText;
    } else if (this.status === 404) {
      text.innerHTML = "NOT FOUND";
    }
  };

  //   xhr.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       console.log(this.responseText);
  //     }
  //   };

  xhr.onerror = function () {
    alert("error");
  };

  xhr.open("GET", "sample2.txt", true);
  xhr.send();
}
