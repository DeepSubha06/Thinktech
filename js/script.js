// SlowScroll

jQuery('a[href^="#"]').on("click", function (t) {
  var e = $($(this).attr("href"));
  e.length &&
    (t.preventDefault(),
    $("html, body").animate(
      {
        scrollTop: e.offset().top,
      },
      1000,
    ));
});

// Scroll Top Button

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// StickyNav

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    if ($(window).width() > 0) {
      $("body").addClass("sticky");
    }
  } else {
    $("body").removeClass("sticky");
  }
});

// Counter

$(document).ready(function () {
  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 1);
  };

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});

// Form Validation

function check() {
  var name = document.getElementById("name-text").value;
  if (name == "") {
    alert("**Name is required**");
    return false;
  }
  var email = document.getElementById("mail-text").value;
  if (email == "") {
    alert("**Email is required**");
    return false;
  }
  var submsg = document.getElementById("subject-text").value;
  if (submsg == "") {
    alert("**Subject is required**");
    return false;
  }
  var txtmsg = document.getElementById("message-text").value;
  if (txtmsg == "") {
    alert("**Message is required**");
    return false;
  }
  alert("Thank You for contacting us");
}

// Name Validation

function chkname() {
  var name = document.getElementById("name-text").value;
  var rexname = /^[A-Za-z]{1,20}$/;
  var isCorrect = rexname.test(name);
  if (isCorrect == false) {
    document.getElementById("name-text").style.backgroundColor =
      "rgba(255, 0, 0, 0.6)";
  } else {
    document.getElementById("name-text").style.backgroundColor =
      "rgba(246, 130, 20, 0.6)";
  }
}

// Email Validation

function chkemail() {
  var email = document.getElementById("mail-text").value;
  var rexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var isCorrect = rexemail.test(email);
  if (isCorrect == false) {
    document.getElementById("mail-text").style.backgroundColor =
      "rgba(255, 0, 0, 0.6)";
  } else {
    document.getElementById("mail-text").style.backgroundColor =
      "rgba(246, 130, 20, 0.6)";
  }
}

// Subject Validation

function subjectchk() {
  var subtxt = document.getElementById("subject-text").value;
  var rextsub = /^[A-Za-z]{1,100}$/;
  var isCorrect = rextsub.test(subtxt);
  if (isCorrect == false) {
    document.getElementById("subject-text").style.backgroundColor =
      "rgba(255, 0, 0, 0.6)";
  } else {
    document.getElementById("subject-text").style.backgroundColor =
      "rgba(246, 130, 20, 0.6)";
  }
}

// Textarea Validation

function chktxtarea() {
  var txtarea = document.getElementById("message-text").value;
  var rextarea = /^[A-Za-z]{1,200}$/;
  var isCorrect = rextarea.test(txtarea);
  if (isCorrect == false) {
    document.getElementById("message-text").style.backgroundColor =
      "rgba(255, 0, 0, 0.6)";
  } else {
    document.getElementById("message-text").style.backgroundColor =
      "rgba(246, 130, 20, 0.6)";
  }
}

// Filter

let sortOptions = document.getElementById("sort-options");
let btns = sortOptions.getElementsByClassName("btn");

function filterSelection(str) {
  let items = document.getElementsByClassName("filterItems");

  if (str == "all") {
    str = "";
  }

  Array.from(items).forEach((item) => {
    removeClass(item, "show");
    if (item.className.indexOf(str) > -1) {
      addClass(item, "show");
      console.log("working");
    }
  });
}

function addClass(element, name) {
  let itemClass, itemName;

  itemClass = element.className.split(" ");
  itemName = name.split(" ");

  for (let i = 0; i < itemName.length; i++) {
    if (itemClass.indexOf(itemName[i]) == -1) {
      element.className += " " + itemName[i];
    }
  }
}

function removeClass(element, name) {
  let itemClass, itemName;

  itemClass = element.className.split(" ");
  itemName = name.split(" ");

  for (i = 0; i < itemName.length; i++) {
    while (itemClass.indexOf(itemName[i]) > -1) {
      itemClass.splice(itemClass.indexOf(itemName[i]), 1);
    }
  }
  element.className = itemClass.join(" ");
}

Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", () => {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
});

filterSelection("all");

// Particle JS

particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 6,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.6,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      // background_color: "#b61924",
      // background_image: "",
      // background_position: "50% 50%",
      // background_repeat: "no-repeat",
      // background_size: "cover",
    },
  },
);

// Carousal

var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1000,
  wrap: true,
  pause: "hover",
  touch: true,
});
