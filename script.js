let listRow = document.querySelector(".row");
let nodeTitle = document.querySelector("#title");
let nodeDesc = document.querySelector("#desc");
let nodeBtn = document.querySelector(".btn");
// create bulletin
nodeBtn.addEventListener("click", () => {
  let cardNode = `<div class="col-sm-4">
                    <div class="card" style="width: 18rem">
                      <div class="card-body">
                        <div class="d-flex justify-content-around">
                          <h5 class="card-title">${nodeTitle.value}</h5>
                          <span class="close">X</span>
                        </div>
                        <p class="card-text">${nodeDesc.value}</p>
                      </div>
                    </div>
                  </div>`;
  listRow.innerHTML += cardNode;
  nodeTitle.value = null;
  nodeDesc.value = null;
});
// delete bulletin
listRow.addEventListener("click", (e) => {
  if (e.target.className == "close") {
    e.target.closest(".card").style.display = "none";
  }
});
