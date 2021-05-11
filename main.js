import dateInfo from "./dateInfo.js";

let date = new Date();

let month, year;

// console.log(date);

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getUTCDate());

const refs = {
  countCurrentYears: document.querySelector(".currentsYears"),
  countCurrentDays: document.querySelector(".currentsDays"),
  btnRestart: document.querySelector(".js-btn-restart"),
  allInfoNav: document.querySelector(".navForm"),
};
//counterInfo
createDaysCounter();

createYearsCounter();
restartAllHTML();

selectYearUser();

function createDaysCounter() {
  for (let i = 1; i <= 100; i++) {
    let itemBtn = document.createElement("button");
    itemBtn.classList.add("countYearBtn");
    itemBtn.innerText = i;

    refs.countCurrentYears.append(itemBtn);
  }

  selectYearConvert();
}

function createYearsCounter() {
  for (let i = 100; i < 4500; i += 100) {
    let itemBtn = document.createElement("button");
    itemBtn.classList.add("countYearBtn");
    itemBtn.classList.add("countDaysBtn");
    itemBtn.innerText = i;

    refs.countCurrentDays.append(itemBtn);
  }

  selectDaysConvert();
}

function selectYearConvert() {
  refs.countCurrentYears.addEventListener("click", (event) => {
    if (event.target.nodeName !== "BUTTON") {
      return;
    }

    let yearCount = event.target.innerText;
    let createBlockYearInfo = document.createElement("h2");
    createBlockYearInfo.classList.add("infoYearDaysConvert");

    let counterInfo = document.createElement("span");
    counterInfo.classList.add("spanYearStrong");
    counterInfo.innerText = ` ${yearCount} `;

    createBlockYearInfo.innerHTML = `At`;
    createBlockYearInfo.append(counterInfo);
    createBlockYearInfo.innerHTML += `years old, you'll be`;

    let counterInfoDays = document.createElement("span");
    counterInfoDays.classList.add("spanDaysStrong");
    counterInfoDays.innerText = ` ${calculateTimeYear(yearCount)} `;
    createBlockYearInfo.append(counterInfoDays);

    createBlockYearInfo.innerHTML += `days old!`;

    refs.allInfoNav.innerHTML = ``;
    refs.allInfoNav.append(createBlockYearInfo);
  });
}

function selectDaysConvert() {
  refs.countCurrentDays.addEventListener("click", (event) => {
    // console.log(event.target.nodeName);

    if (event.target.nodeName !== "BUTTON") {
      return;
    }

    // console.log(event.target.innerText);

    let daysCount = event.target.innerText;

    let spanMainInfo = document.createElement("span");
    spanMainInfo.classList.add("spanCurrentDateConvertDays");
    spanMainInfo.innerHTML = `In`;

    let strongSpanInfo = document.createElement("span");
    strongSpanInfo.classList.add("spanStrongInfo");
    strongSpanInfo.innerHTML = ` ${daysCount} `;
    spanMainInfo.append(strongSpanInfo);

    spanMainInfo.innerHTML += `days old, you'll be`;

    let spanDateInfoStrong = document.createElement("span");
    spanDateInfoStrong.classList.add("spanStrongInfo");

    let { years, months, weeks, days } = calculateTime(daysCount);

    spanDateInfoStrong.innerHTML += ` ${years} years, `;
    spanDateInfoStrong.innerHTML += ` ${months} months, `;
    spanDateInfoStrong.innerHTML += ` ${weeks} weeks, `;
    spanDateInfoStrong.innerHTML += ` ${days} days, `;

    spanMainInfo.append(spanDateInfoStrong);

    refs.allInfoNav.innerHTML = ``;
    refs.allInfoNav.append(spanMainInfo);
  });
}

function restartAllHTML() {
  refs.btnRestart.addEventListener("click", (event) => {
    let spanTitleQuestion = document.createElement("span");
    spanTitleQuestion.classList.add("navSpanQuestion");
    spanTitleQuestion.innerHTML += `First, in what`;
    spanTitleQuestion.innerHTML += `<span class="spanStrong"> year </span>`;
    spanTitleQuestion.innerHTML += `were you born?`;

    let navDivSubmit = document.createElement("div");
    navDivSubmit.classList.add("navSubmit");

    let inputSearch = document.createElement("input");
    inputSearch.type = "number";
    inputSearch.classList.add("js-input-year");
    inputSearch.placeholder = `enter the year...`;
    inputSearch.autocomplete = "off";
    navDivSubmit.append(inputSearch);

    let btnSearch = document.createElement("button");
    btnSearch.classList.add("js-submit-year");
    navDivSubmit.append(btnSearch);

    refs.allInfoNav.innerHTML = ``;
    refs.allInfoNav.append(spanTitleQuestion);
    refs.allInfoNav.append(navDivSubmit);

    selectYearUser();
  });
}

// console.log(dateInfo);
// console.log(date. );

function selectYearUser() {
  document
    .querySelector(".js-submit-year")
    .addEventListener("click", (event) => {
      let inputDate = document.querySelector(".js-input-year").value;
      year = inputDate;
      // console.log(inputDate);
      // console.log(day);
      createMonthsBlocks();
    });
}

function createMonthsBlocks() {
  const { months } = dateInfo;
  refs.allInfoNav.innerHTML = ``;
  // refs.allInfoNav.append(btnMonthBlock);

  let blockBtnsInfo = document.createElement("div");
  blockBtnsInfo.classList.add("selectMonthBlock");

  let titleInfoSpan = document.createElement("span");
  titleInfoSpan.classList.add("spanInfoMothSelect");
  titleInfoSpan.innerHTML += `In what `;

  let spanInfo = document.createElement("span");
  spanInfo.classList.add("spanStrong");
  spanInfo.innerHTML += `month `;

  titleInfoSpan.append(spanInfo);
  titleInfoSpan.innerHTML += ` of `;

  let spanInfo2 = document.createElement("span");
  spanInfo2.classList.add("spanStrong");
  spanInfo2.innerHTML += ` ${year}`;

  titleInfoSpan.append(spanInfo2);
  titleInfoSpan.innerHTML += ` were you born? `;

  // titleInfoSpan += `of ${year} were you born?`;

  blockBtnsInfo.append(titleInfoSpan);

  months.forEach((month) => {
    let btnMonthBlock = document.createElement("button");
    btnMonthBlock.classList.add("js-btn-selectMonth");
    btnMonthBlock.classList.add("btnSelectMonth");
    btnMonthBlock.innerText = month;

    blockBtnsInfo.append(btnMonthBlock);
  });

  refs.allInfoNav.append(blockBtnsInfo);

  selectMonthBtns();
}

function selectMonthBtns() {
  document
    .querySelector(".selectMonthBlock")
    .addEventListener("click", (event) => {
      // console.log(event.target.nodeName);
      const { months } = dateInfo;

      if (event.target.nodeName !== "BUTTON") {
        return;
      }

      let eventTarget = event.target.innerText.toLowerCase().split("");
      let firstLetter = eventTarget.shift().toUpperCase();

      let validationMonth = firstLetter + eventTarget.join("");
      // console.log(validationMonth);
      month = months.indexOf(validationMonth) + 1;

      refs.allInfoNav.innerHTML = ``;

      // console.log(month);
      let blockAllDateInfo = document.createElement("h2");
      blockAllDateInfo.classList.add("infoDateFinished");
      blockAllDateInfo.innerHTML = `In what day in`;

      let yearInfo = document.createElement("span");
      yearInfo.classList.add("spanStrong");
      yearInfo.innerHTML += ` ${validationMonth} `;
      blockAllDateInfo.append(yearInfo);

      blockAllDateInfo.innerHTML += `of`;

      let monthInfo = document.createElement("span");
      monthInfo.classList.add("spanStrong");
      monthInfo.innerHTML += ` ${year} `;
      blockAllDateInfo.append(monthInfo);

      blockAllDateInfo.innerHTML += `you born?`;

      let dateInfoInput = document.createElement("input");
      dateInfoInput.type = "date";
      dateInfoInput.classList.add("js-date-SelectDay");

      let fulldate = ``;
      let strMonth = String(month);
      if (strMonth.length >= 2) {
        fulldate = `${year}-${month}-01`;
      } else {
        fulldate = `${year}-0${month}-01`;
      }
      dateInfoInput.setAttribute("value", fulldate);

      let btnSelectDay = document.createElement("button");
      btnSelectDay.classList.add("js-btn-selectDay");
      btnSelectDay.innerHTML = `submit`;

      // console.log(infoDay);

      refs.allInfoNav.append(blockAllDateInfo);
      refs.allInfoNav.append(dateInfoInput);
      refs.allInfoNav.append(btnSelectDay);

      selectDayBtn();
    });
}

function selectDayBtn() {
  document
    .querySelector(".js-btn-selectDay")
    .addEventListener("click", (event) => {
      let valueDate = document.querySelector(".js-date-SelectDay").value;
      let userInfoDate = new Date(valueDate);

      let currentInfoDate = date;

      let diffDays = Math.ceil(diffDates(currentInfoDate, userInfoDate));

      let { years, months, weeks, days } = calculateTime(diffDays);

      let finalInfoData = document.createElement("h2");
      finalInfoData.classList.add("titleInfoFullDate");
      finalInfoData.innerHTML += `At the moment you lived`;

      let infoDate = document.createElement("span");
      infoDate.classList.add("spanStrong");
      infoDate.innerHTML += ` ${years} years `;
      infoDate.innerHTML += ` ${months} months `;
      infoDate.innerHTML += ` ${weeks} weeks `;
      infoDate.innerHTML += ` ${days} days `;

      finalInfoData.append(infoDate);

      refs.allInfoNav.innerHTML = ``;
      refs.allInfoNav.append(finalInfoData);
    });
}

/*Calculate Functions*/
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
