let cards = document.querySelector(".cards");
fetch("https://restcountries.com/v3.1/all")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((contry) => {
      let div = document.createElement("div");
div.classList.add("card");
cards.appendChild(div);
div.innerHTML = ` <img src="${contry.flags.svg}" alt="">
                <div class="card-info">
                 <h4>name:${contry.name.common}</h4>
                 <p>population:${contry.population}</p>
                 <p>region:${contry.region}</p>
                 <p>capital:${contry.capital}</p>
               </div>`
               cards.appendChild(div);
    });
  });

  let body = document.querySelector("body");
  let btn = document.querySelector(".toggle");
  console.log(btn);
  btn.addEventListener("click",()=>{
    body.classList.toggle("dark")
  })







