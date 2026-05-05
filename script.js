const form=document.querySelector('form');
const eventcards=document.querySelector('.cards');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(eventTitle.value)
    console.log(eventDate.value)
    console.log(category.value)
    console.log(description.value)

    let title=eventTitle.value;
    let date=eventDate.value;
    let cat=category.value;
    let desc=description.value;


    const card=document.createElement('div');
    card.classList.add('card');
    card.innerHTML=`
    <h3>${title}</h3>
    <p>${date}</p>
    <button>${cat}</button>
    <p>${desc}</p>
    <div class="dlt">x</div>`


    eventcards.appendChild(card);
    const dlt=card.querySelector('.dlt')
    dlt.addEventListener('click',()=>{
        card.remove();
    })

})
document.addEventListener('keydown',(e)=>{
    // console.log(e.key)
})

document.querySelector('.clearall').addEventListener('click',()=>{
    document.querySelectorAll('.card').forEach(card => {
        card.remove();
    })
})


document.querySelector('.sample').addEventListener('click',()=>{
    const card=document.createElement('div');
    card.classList.add('card');
    card.innerHTML=`
    <h3>Sample Event</h3>
    <p>2026-02-11</p>
    <button>Meetup</button>
    <p>this is sample event</p>
    <div class="dlt">x</div>`

    eventcards.appendChild(card);
    const dlt=card.querySelector('.dlt')
    dlt.addEventListener('click',()=>{
        card.remove();
    })
})
document.querySelector('.sample').addEventListener('click',()=>{
    const card=document.createElement('div');
    card.classList.add('card');
    card.innerHTML=`
    <h3>Sample Event.1</h3>
    <p>2026-02-15</p>
    <button>Webinar</button>
    <p>this is sample event</p>
    <div class="dlt">x</div>`

    eventcards.appendChild(card);
    const dlt=card.querySelector('.dlt')
    dlt.addEventListener('click',()=>{
        card.remove();
    })
})
document.addEventListener("keydown", function (event) {
  const output = document.getElementById("keyOutput");

  if (output) {
    output.textContent = "You pressed: " + event.key;
  }
});
