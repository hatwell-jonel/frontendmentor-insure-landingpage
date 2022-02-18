const data = [
  {
    img: './images/icon-snappy-process.svg',
    title: 'snappy process',
    desc: "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms."
  },
    {
    img: './images/icon-affordable-prices.svg',
    title: 'affordable prices',
    desc: "We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
  },
    {
    img: './images/icon-people-first.svg',
    title: 'people first',
    desc: "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."
  }
]

document.addEventListener("DOMContentLoaded", () => {
  const menuIconEl = document.querySelector(".menu-icon");
  const menuEl = document.querySelector(".menu");
  const pageLinkEl = document.querySelectorAll('.page-link');

  let isMenu = false

  menuIconEl.addEventListener("click", (e) => {
    isMenu = true;
    if(isMenu){
      menuIconEl.classList.toggle('icon2');
      menuEl.classList.toggle('show-menu');
    }
  });

  pageLinkEl.forEach( (link) => {
    link.addEventListener('click', (e) => {
      if(isMenu){
        menuEl.classList.toggle('show-menu');
      }
    })
  })

  aboutServices(data);
});


function aboutServices(services){
  const servicesEl = document.querySelector('.items');
  let service = services.map( (service) => {
    const {img,title,desc} = service;
    return `
      <article class="item">
            <img src=${img} class="item-img" alt="snappy process image">
            <h3 class="item-title">${title}</h3>
            <p class="item-desc">${desc}</p>
          </article>
    `;
  })
  servicesEl.innerHTML += service;
}