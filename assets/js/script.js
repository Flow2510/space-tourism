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

const crewMembers = [
    {
        grade: 'Commander',
        name: 'Douglas Hurley',
        text:   `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                and former NASA astronaut. He launched into space for the third time as 
                commander of Crew Dragon Demo-2.`,
        image: '../../assets/crew/image-douglas-hurley.png'
    },
    {
        grade: 'Flight Engineer',
        name: 'Anousheh Ansari',
        text:   `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                fly to the ISS, and the first Iranian in space.`,
        image: '../../assets/crew/image-anousheh-ansari.png'
    },
    {
        grade: 'Pilot',
        name: 'Victor Glover',
        text:   `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
                International Space Station. Glover is a commander in the U.S. Navy where 
                he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
                station systems flight engineer.`,
        image: '../../assets/crew/image-victor-glover.png'
    },
    {
        grade: 'Mission Specialist',
        name: 'Mark Shuttleworth',
        text:   `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
                the Linux-based Ubuntu operating system. Shuttleworth became the first South 
                African to travel to space as a space tourist.`,
        image: '../../assets/crew//image-mark-shuttleworth.png'
    }    
]

const dotsContainer = document.querySelector('crew__dots-wrapper');

if (dotsContainer){
    crewMembers.forEach( () => {
        const dot = document.createElement('div');
        dot.classList.add('crew__dot');
        dotsContainer.appendChild(dot);
    })
}