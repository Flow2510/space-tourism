const hamburgerButton = document.querySelector('.header__hamburger');
const menuWrapper = document.querySelector('.header__nav');
const menuOverlay = document.querySelector('.header__overlay');
const menuClose = document.querySelector('.header__close');

hamburgerButton.addEventListener('click', () => {
    menuWrapper.style.display = "block";
    menuOverlay.style.display = "block";
    menuClose.style.display = "block";
})

menuClose.addEventListener('click', () => {
    menuWrapper.style.display = "";
    menuOverlay.style.display = "";
    menuClose.style.display = "";
})


document.addEventListener("DOMContentLoaded", () => {
  const moonButton = document.querySelector('.destinations__destination-moon');
  if (moonButton) {
    moonButton.click(); // Simule un clic
  }
});

const destinations = [
    {
        name: "MOON",
        text:   `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                regain perspective and come back refreshed. While you’re there, take in some history 
                by visiting the Luna 2 and Apollo 11 landing sites.`,
        image: `../../assets/destination/image-moon.png`,
        distance: "384,400 km",
        time: "3 days"
    },
    {
        name: "MARS",
        text:   `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                the tallest planetary mountain in our solar system. It’s two and a half times 
                the size of Everest!`,
        image: `../../assets/destination/image-mars.png`,
        distance: "225 mil. km",
        time: "9 months"
    },
    {
        name: "EUROPA",
        text:   `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                ice skating, curling, hockey, or simple relaxation in your snug 
                wintery cabin.`,
        image: `../../assets/destination/image-europa.png`,
        distance: "628 mil. km",
        time: "3 years"
    },
    {
        name: "TITAN",
        text:   `The only moon known to have a dense atmosphere other than Earth, Titan 
                is a home away from home (just a few hundred degrees colder!). As a 
                bonus, you get striking views of the Rings of Saturn.`,
        image: `../../assets/destination/image-titan.png`,
        distance: "1.6 bil. km",
        time: "7 years"
    }    
]

const buttons = document.querySelectorAll('.destinations__destination');

function showDestination(index){
    const image = document.querySelector('.destinations__image');
    const title = document.querySelector('.destinations__title');
    const text = document.querySelector('.destinations__text');
    const distance = document.querySelector('.destinations__distance');
    const time = document.querySelector('.destinations__time');
    image.src = destinations[index].image;
    title.innerHTML = destinations[index].name;
    text.innerHTML = destinations[index].text;
    distance.innerHTML = destinations[index].distance;
    time.innerHTML = destinations[index].time;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const index = parseInt(button.dataset.id);
        showDestination(index);
    })
})