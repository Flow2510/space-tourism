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

document.addEventListener("DOMContentLoaded", () => {
    changeContent();
});

const dotsContainer = document.querySelector('.crew__dots-wrapper');

let currentIndex = 0;

crewMembers.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('crew__dot');
    if (index === 0){
        dot.classList.add('crew__dot-selected')
    }
    dot.addEventListener('click', () => {
        currentIndex = index;
        changeDot();
        changeContent();
    })
    dotsContainer.appendChild(dot);
})

function changeDot() {	//  fonction pour enlever la classe a tous les dot et met le dot_selected par rapport a l'index
    const dots = document.querySelectorAll('.crew__dot');			
	dots.forEach(d => {
		d.classList.remove('crew__dot-selected');
	})
	dots[currentIndex].classList.add('crew__dot-selected');		//    selection du dot par rapport a l'index
}

function changeContent() {			//   fonction pour changer le contenu de la banniere
    const grade = document.querySelector('.crew__grade');
    const name = document.querySelector('.crew__name');
    const text = document.querySelector('.crew__text');
    const image = document.querySelector('.crew__image');

    grade.innerHTML = crewMembers[currentIndex].grade;
    name.innerHTML = crewMembers[currentIndex].name;
    text.innerHTML = crewMembers[currentIndex].text;
    image.src = crewMembers[currentIndex].image;
}