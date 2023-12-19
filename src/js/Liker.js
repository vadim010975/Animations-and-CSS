export default class Liker {
  constructor(container) {
    this.containerEl = container;
    this.likeBtnEl = this.containerEl.querySelector(".liker-btn");
    this.onMousedownLikeBtn = this.onMousedownLikeBtn.bind(this);
    this.likeBtnEl.addEventListener("mousedown", this.onMousedownLikeBtn);
  }

  onMousedownLikeBtn(e) {
    e.preventDefault();
    this.setVariables();
    const imgEl = this.createImg();
    this.containerEl.insertAdjacentElement("afterbegin", imgEl);
  }

  createImg() {
    const imgEl = document.createElement("div");
    imgEl.classList.add("liker-img", "liker-img-animation");
    imgEl.addEventListener("animationend", this.onAnimationend);
    return imgEl;
  }

  onAnimationend(e) {
    e.target.remove();
  }

  setVariables() {
    const rows = [
      [150, 100, 150, 200, 150],
      [150, 150, 200, 100, 150],
      [150, 150, 100, 200, 150],
      [150, 200, 150, 100, 150],
    ];
    const randomRow = Math.floor(Math.random() * rows.length);
    for (let i = 0; i < rows[randomRow].length; i += 1) {
      document.documentElement.style.setProperty(
        `--left${i + 1}`,
        `${rows[randomRow][i]}px`
      );
    }
  }
}
