function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
  }

  /* -------------------------------------------------------------------- */

  const button = document.querySelector('#button');
  const select = document.querySelector("#dropdown");
  const options = document.querySelectorAll(".option");
  const selectLabel = document.querySelector('#select-label');

  button.addEventListener("click", function (e) {
    e.preventDefault();
    toggleHidden();
  });

  function toggleHidden() {
    select.classList.toggle("hidden");
  }

  options.forEach(function (option) {
    option.addEventListener("click", function (e) {
      setSelectTitle(e);
    });
  });

  function setSelectTitle(e) {
    const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerText;
    selectLabel.innerText = labelElement;
    toggleHidden();
  };

  /* -------------------------------------------------------------------- */


  function displayTime() {
    var now = new Date();
    var time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    document.getElementById("current-time").innerHTML = time;
  }
  displayTime();

  /* ------------------------------------------------------------------- */

  function displayDate() {
    var now = new Date();
    var date = now.toDateString();
    var dateTimeString = date;
    document.getElementById("current-date").innerHTML = dateTimeString;
  }
  displayDate();