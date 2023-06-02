let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let boxs = document.querySelectorAll(".box");
let drag = null;

function add() {
  if (inp.value) {
    boxs[0].innerHTML += `<p class="item" draggable="true">${inp.value}</p>`;
    inp.value = "";
  }

  dragItem();
}

btn.onclick = add;

inp.onfocus = function () {
  document.addEventListener("keydown", function (e) {
    if (e.code == "Enter") {
      btn.click();
    }
  });
};

function dragItem() {
  let items = document.querySelectorAll(".item");

  items.forEach((item) => {
    item.addEventListener("dragstart", () => {
      drag = item;
      item.style.opacity = "0.5";
    });

    item.addEventListener("dragend", () => {
      drag = null;
      item.style.opacity = "1";
    });

    boxs.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        e.preventDefault();

        this.style.backgroundColor = "#4505c0";
        this.style.color = "white";
      });

      box.addEventListener("dragleave", function () {
        this.style.backgroundColor = "#211c3d";
        this.style.color = "white";
      });

      box.addEventListener("drop", function () {
        this.style.backgroundColor = "#211c3d";
        this.style.color = "white";

        this.append(drag);
      });
    });
  });
}
