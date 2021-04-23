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

checkerInputYear();

//append count of year for later convert to days
createYearCounter();

//append count of days for later convert to years
createDaysCounter();
btnRestart();

function btnRestart() {
  document
    .querySelector(".js-btn-restart")
    .addEventListener("click", function (e) {
      document.querySelector(".navForm").innerHTML = navYearInput;
      location.reload();
    });
}

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
<button class="js-submit-year">Submit</button>
</div>`;

function createYearCounter() {
  for (let i = 1; i <= 100; i++) {
    document.querySelector(
      ".currentsYears"
    ).innerHTML += `<button class="js-btn-year" value="${i}">${i}</button>`;
  }
}

function createDaysCounter() {
  for (let i = 1000; i <= 40000; i += 1000) {
    document.querySelector(
      ".currentsDays"
    ).innerHTML += `<button class="js-btn-year js-btn-day" value="${i}">${i}</button>`;
  }
}

let btn_selectYear = document.querySelector(".js-submit-year");

function checkerInputYear() {
  document
    .querySelector(".js-input-year")
    .addEventListener("input", function (e) {
      if (e.target.value !== "") {
        btn_selectYear.addEventListener("click", (e) => {
          createMonthRealize();
        });
      }
    });
}

function createMonthRealize() {
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
  } else {
    // let html = `<span class="spanWrongText"><span class="spanWrongInput">Wrong Input </span> <img src="./images/sad.png" /> </span>`;
    document.querySelector(
      ".navForm"
    ).innerHTML += `<span class="spanWrongText"><span class="spanWrongInput">Wrong Input </span> <img src="./images/sad.png" /> </span>`;
    setTimeout(() => {
      document.querySelector(".navForm").innerHTML = navYearInput;
    }, 3000);
  }
}

function monthRealizeLogic() {
  document
    .querySelector(".monthBlocks")
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("js-montn-btn")) {
        // console.log(e.target.value);
        monthInfo = e.target.value;
        createDayChecker();
      }
    });
}

function createDayChecker() {
  let monthNumber = months.indexOf(monthInfo) + 1;
  let dateValue = "";
  if (monthNumber < 10) {
    dateValue = `${yearInfo}-${"0" + monthNumber}-01`;
  } else {
    dateValue = `${yearInfo}-${monthNumber}-01`;
  }
  let html = `<span class="dayChecker"> On what <span class="spanStrong"> day </span> in ${monthInfo} of ${yearInfo}`;
  html += ` were you born?`;
  html += `</span>`;
  html += `<div class="blockInfoDayDate"> `;
  html += `<input type="date" name="calendar" class="js-date-input" value="${dateValue}"> `;
  html += `<button class="js-btn-next"> Next </button>`;
  html += `</div>`;

  document.querySelector(".navForm").innerHTML = html;

  document
    .querySelector(".js-btn-next")
    .addEventListener("click", function (e) {
      let dateValue = document.querySelector(".js-date-input").value;
      let infoDate = dateValue.split("-");
      let [year, month, day] = infoDate;

      let date1 = new Date(year, month, day);
      let date2 = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
      );

      createFullDateInfo(diffDates(date2, date1));
    });
}

function createFullDateInfo(finalDate) {
  let finalYear = Math.floor(Math.floor(finalDate) / 365);
  let html = `<span class="spanFullDate spanStrong"> `;
  html += `You are `;
  html += `${Math.floor(finalDate)}`;
  html += ` days old! and it's year is ${finalYear} year!`;
  html += "</span>";
  html += lifeComparison(Math.floor(finalDate));

  document.querySelector(".navForm").innerHTML = html;
}

document.querySelector(".currentsDays").addEventListener("click", function (e) {
  let daysConvertToYear = 0;
  if (e.target.classList.contains("js-btn-day")) {
    daysConvertToYear = e.target.value;
  }

  let fullInfoDate = calculateTime(daysConvertToYear);
  let { years, months, weeks, days } = fullInfoDate;

  let html = `<span class="spanCurrentDateConvertDays"> In <span class="spanStrong"> ${daysConvertToYear} </span>`;
  html += `days old, you'll be`;
  html += `<span class="spanStrong"> ${years} years, ${months} months,and ${
    weeks * 7 + days
  } days </span>`;
  html += `</span>`;

  document.querySelector(".navForm").innerHTML = html;
});

document
  .querySelector(".currentsYears")
  .addEventListener("click", function (e) {
    let yearConvertToDays = 0;
    if (e.target.classList.contains("js-btn-year")) {
      yearConvertToDays = e.target.value;
    }
    let days = calculateTimeYear(yearConvertToDays);
    let html = `<span class="spanCurrentDateConvertDays"> At <span class="spanStrong"> ${yearConvertToDays} years old, </span>`;
    html += `you'll be <span class="spanStrong"> ${days} </span> days old!`;
    html += `</span>`;

    document.querySelector(".navForm").innerHTML = html;
  });

function lifeComparison(daysLife) {
  let yearInfo = daysLife / 365;

  let html = `<span class="spanComprassion"> If you are interested here is a comparison in life expectancy with animals </span>`;
  html += `<span class="spanAnimalsYears"><img src="./images/cat.png" class="imgAnimal" /> <span class="yearsAnimal"> ${(
    yearInfo * 0.313
  ).toFixed(2)} year </span>  </span>`;
  html += `<span class="spanAnimalsYears"><img src="./images/hippopotamus.png" class="imgAnimal" /> <span class="yearsAnimal">${(
    yearInfo * 0.562
  ).toFixed(2)} year  </span>  </span>`;
  html += `<span class="spanAnimalsYears"><img src="./images/rat.png" class="imgAnimal" /> <span class="yearsAnimal">${(
    yearInfo * 0.05
  ).toFixed(2)} year  </span>  </span>`;
  html += `<span class="spanAnimalsYears"><img src="./images/shiba.png" class="imgAnimal" /> <span class="yearsAnimal">${(
    yearInfo * 0.275
  ).toFixed(2)} year </span>  </span>`;
  html += `<span class="spanAnimalsYears"><img src="./images/monkey.png" class="imgAnimal" /> <span class="yearsAnimal">${(
    yearInfo * 0.313
  ).toFixed(2)} year </span>  </span>`;

  return html;
}

function calculateTime(dateInDays) {
  let months = 0;
  let years = 0;
  let days = 0;
  let weeks = 0;

  while (dateInDays) {
    if (dateInDays >= 365) {
      years++;
      dateInDays -= 365;
    } else if (dateInDays >= 30) {
      months++;
      dateInDays -= 30;
    } else if (dateInDays >= 7) {
      weeks++;
      dateInDays -= 7;
    } else {
      days++;
      dateInDays--;
    }
  }

  return {
    years,
    months,
    weeks,
    days,
  };
}

function calculateTimeYear(year) {
  return year * 365;
}

function diffDates(dateOne, dateTwo) {
  return (dateOne - dateTwo) / (60 * 60 * 24 * 1000);
}
