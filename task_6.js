document
  .querySelector("#validation-input")
  .addEventListener("focus", function (e) {
    let dataset = { ...this.dataset };
    let { length } = dataset;
    let lengthStr = Number(length);
    // this.placeholder = `Введи ${lengthStr} символов`;
    if (this.value.length === lengthStr) {
      //WHY DOESN'T WORK
      //   e.target.className = "#validation-input.valid";
      e.target.style.borderColor = "#4caf50";
    }
    if (this.value.length < lengthStr || this.value.length > lengthStr) {
      //WHY DOESN'T WORK
      //   e.target.className = "#validation-input.invalid";
      e.target.style.borderColor = "#f44336";
    }
  });
