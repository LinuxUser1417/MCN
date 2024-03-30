/////////////////////////////////////////////////////////// MENU

let bar = document.querySelector('.bar');
let fullMenu = document.querySelector('.full-menu');
let fullClose = document.querySelector('.full-close');

bar.addEventListener('click', function(){
  fullMenu.classList.add("tog-menu");
})
fullClose.addEventListener('click', function(){
  fullMenu.classList.remove("tog-menu");
})


const disclaimer = document.querySelector('#disclaimer');
disclaimer.addEventListener('click', function () {
  const app = document.querySelector('#app');
  app.innerHTML =
    `<div class="app">
            <div class="disclaimer">
                <div class="x">
                    <span class="hamburger"><img class="close" src="/all/main/img/hamburger.svg"></span>
                </div>
                <div class="y">
                    <p class="disk">Мы - опытная команда профессионалов, стоящая за MCN.</p>
                    <p class="disc-txt">MCN - это криптовалюта, разработанная нашей компанией, "Бирик Туран", Это цифровой актив, который предназначен для облегчения процессов платежей, инвестиций и обмена внутри нашей экосистемы MCN - базируется на передовых технологиях блокчейн, обеспечивая безопасность и прозрачность транзакций.</p>
                    <p class="disc-txt">Наша монета предоставляет удобные решения для пользователей, позволяя им использовать криптовалюту в различных аспектах своей повседневной жизни, включая оплату товаров и услуг, участие в наших проектах и взаимодействие с нашими партнерами по всему миру.</p>
                </div>
                <div class="y">
                  <p class="disk">We are an experienced team of professionals behind MCN.</p>
                  <p class="disc-txt">MCN is a cryptocurrency developed by our company, "Birik Turan". It is a digital asset designed to facilitate payment processes, investments, and exchanges within our MCN ecosystem. MCN is based on advanced blockchain technologies, ensuring the security and transparency of transactions.</p>
                  <p class="disc-txt">Our coin provides convenient solutions for users, allowing them to use cryptocurrency in various aspects of their daily lives, including payment for goods and services, participation in our projects, and interaction with our partners around the world.</p>
              </div>
            </div>
        </div>`;

  let close = document.querySelector('.hamburger');
  close.addEventListener('click', function () {
    app.innerHTML = '';
  });
});

function actionToggle() {
  const language = document.querySelector('.language');
  language.classList.toggle('active')
}
////////////////////////////////////////////////////////////

///////////////////////Видео
document.addEventListener('DOMContentLoaded', function() {
  var video = document.querySelector('.video');

  // Отключаем звук
  video.muted = true;

  // Функция для перезапуска видео
  function restartVideo() {
      video.currentTime = 0; // Устанавливаем время в начало видео
      video.play(); // Запускаем видео
  }

  // Слушаем событие 'ended', чтобы перезапустить видео при его завершении
  video.addEventListener('ended', restartVideo);

  // Запускаем воспроизведение видео
  video.play();
});

////////////////////////////// TABS
const tabs = document.querySelector(".wrap");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("toggle");
    });
    e.target.classList.add("toggle");

    contents.forEach(content => {
      content.classList.remove("toggle");
    });
    const element = document.getElementById(id);
    element.classList.add("toggle");
  }
}


//////////////////////////////

const projects = document.querySelectorAll(".project");

projects.forEach(project => {
  const slides = project.querySelectorAll(".item");
  const buttons = project.querySelectorAll(".item-button");

  let current = 0;

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      index == 0 ? gotoPrev() : gotoNext();
    });
  });

  const gotoPrev = () => {
    current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
  };

  const gotoNext = () => {
    current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);
  };

  const gotoNum = number => {
    current = number;
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("slider");
      slides[i].classList.remove("next");
    }
    slides[current].classList.add("slider");
    slides[(current + 1) % slides.length].classList.add("next");
  };
});


///////////////// ANIMATION
const startAnimation = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("slide-in-from-right", entry.isIntersecting);
  });
};

const startAnimation1 = (entries1, observer1) => {
  entries1.forEach(entry1 => {
    entry1.target.classList.toggle("slide-in-from-left", entry1.isIntersecting);
  });
};

const observer = new IntersectionObserver(startAnimation);
const observer1 = new IntersectionObserver(startAnimation1);
const options = { root: null, rootMargin: '0px', threshold: 1 }; 

const zagalovok = document.querySelectorAll('.zagalovok');
const zagalovok1 = document.querySelectorAll('.zagalovok1');
const buttonWrap = document.querySelectorAll('.buttonWrap');
const tog = document.querySelectorAll('.tog');
const frame = document.querySelectorAll('.frame');
const frame1 = document.querySelectorAll('.frame1');
const projectTxt = document.querySelectorAll('.project-txt');
const accarBlock = document.querySelectorAll('.accar-block');
const accarTxt = document.querySelectorAll('.accar-txt');

zagalovok.forEach(el => {
  observer.observe(el, options);
});

zagalovok1.forEach(el => {
  observer.observe(el, options);
});

buttonWrap.forEach(el => {
  observer.observe(el, options);
});

tog.forEach(el => {
  observer1.observe(el, options);
});

frame.forEach(el => {
  observer.observe(el, options);
});

frame1.forEach(el => {
  observer1.observe(el, options);
});

projectTxt.forEach(el => {
  observer.observe(el, options);
});

accarBlock.forEach(el => {
  observer1.observe(el, options);
});

accarTxt.forEach(el => {
  observer.observe(el, options);
});

////////////////////////////////////

document.querySelectorAll('.accar').forEach((item) => {
  item.addEventListener('click', (e) => {
   let accardionItem = e.target.closest('.accardion-panel');
   let accardionContent = accardionItem.querySelector('.accardion-bottom');
   accardionContent.classList.toggle('accardion-bottom-active');
  });
 });
