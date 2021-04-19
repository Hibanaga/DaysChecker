let yearInfo,
  monthInfo,
  dayInfo = "";

let date = new Date();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let navYearInput = `

<span class="navSpanQuestion">
First, in what <span class="spanStrong">year</span> were you born?
</span>
<div class="navSubmit">
<input
  type="number"
  class="js-input-year"
  placeholder="enter the year..."
  autocomplete="off"
/>
<button class="js-submit-year" disabled>Submit</button>
</div>`;

for (let i = 0; i <= 100; i++) {
  document.querySelector(
    ".currentsYears"
  ).innerHTML += `<button class="js-btn-year" value="${i}">${i}</button>`;
}

for (let i = 1000; i <= 40000; i += 1000) {
  document.querySelector(
    ".currentsDays"
  ).innerHTML += `<button class="js-btn-year js-btn-day" value="${i}">${i}</button>`;
}

let btn_selectYear = document.querySelector(".js-submit-year");

document
  .querySelector(".js-input-year")
  .addEventListener("mouseout", function (e) {
    if (e.target.value === "") {
      btn_selectYear.setAttribute("disabled", false);
    } else {
      btn_selectYear.removeAttribute("disabled");
    }
  });

btn_selectYear.addEventListener("click", function (e) {
  yearInfo = document.querySelector(".js-input-year").value;

  if (yearInfo > 1900 && yearInfo < date.getFullYear()) {
    let html = `<span class="navSpanQuestion navSpanMonths">
    In what <span class="spanStrong">month</span> of ${yearInfo} were you born?
  </span>`;
    html += `<div class="monthBlocks"> `;
    months.map((month) => {
      html += `<button class="js-montn-btn" value=${month}>${month}</button>`;
    });

    html += `</div>`;

    document.querySelector(".navForm").innerHTML = html;

    monthRealizeLogic();

    if (monthInfo !== "") {
    }
  } else {
    // let html = `<span class="spanWrongText"><span class="spanWrongInput">Wrong Input </span> <img src="./images/sad.png" /> </span>`;
    document.querySelector(
      ".navForm"
    ).innerHTML += `<span class="spanWrongText"><span class="spanWrongInput">Wrong Input </span> <img src="./images/sad.png" /> </span>`;
    setTimeout(() => {
      document.querySelector(".navForm").innerHTML = navYearInput;
    }, 3000);
  }
});

document
  .querySelector(".js-btn-restart")
  .addEventListener("click", function (e) {
    document.querySelector(".navForm").innerHTML = navYearInput;
  });

function monthRealizeLogic() {
  document
    .querySelector(".monthBlocks")
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("js-montn-btn")) {
        monthInfo = e.target.value;
      }
    });
}
