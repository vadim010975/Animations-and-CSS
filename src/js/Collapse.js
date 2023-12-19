export default class Collapse {
  constructor(container) {
    this.containerEl = container;
    this.btnEl = this.containerEl.querySelector(".collapse-btn");
    this.onClick = this.onClick.bind(this);
    this.btnEl.addEventListener("click", this.onClick);
    this.wrapperEl = this.containerEl.querySelector(".wrapper");
  }

  onClick() {
    this.wrapperEl.classList.toggle("wrapper-collapse");
  }
}
