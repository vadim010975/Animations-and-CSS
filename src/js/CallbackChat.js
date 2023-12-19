export default class CallbackChat {
  constructor(container) {
    this.containerEl = container;
    this.formEl = this.containerEl.querySelector(".callback-form");
    this.xBtnEl = this.containerEl.querySelector(".callback-x");
    this.onClickXBtn = this.onClickXBtn.bind(this);
    this.xBtnEl.addEventListener("click", this.onClickXBtn);
    this.redBtnEl = this.containerEl.querySelector(".red-btn");
    this.onMousedownRedBtn = this.onMousedownRedBtn.bind(this);
    this.redBtnEl.addEventListener("mousedown", this.onMousedownRedBtn);
  }

  onClickXBtn(e) {
    e.preventDefault();
    this.redBtnEl.classList.remove("hidden-red-btn");
    this.formEl.classList.add("callback-form-hidden");
  }

  onMousedownRedBtn(e) {
    e.preventDefault();
    this.redBtnEl.classList.add("hidden-red-btn");
    this.formEl.classList.remove("callback-form-hidden");
  }
}
