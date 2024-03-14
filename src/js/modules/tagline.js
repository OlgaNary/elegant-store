function tagLine() {
  const closeTagLineBtn = document.querySelector(".tagLine__close");
  const tagLine = document.querySelector(".tagLine");
  closeTagLineBtn.onclick = function () {
    tagLine.remove();
  };
}

export default tagLine;
