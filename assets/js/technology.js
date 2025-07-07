const technologies = [

    {
        name: "Launch vehicle",
        text:   `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                it's quite an awe-inspiring sight on the launch pad!`,
        image: `../../assets/technology/image-launch-vehicle-landscape.jpg`
    },
    {
        name: "Spaceport",
        text:   `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                by analogy to the seaport for ships or airport for aircraft. Based in the 
                famous Cape Canaveral, our spaceport is ideally situated to take advantage 
                of the Earth’s rotation for launch.`,
        image: `../../assets/technology/image-spaceport-landscape.jpg`
    },
    {
        name: "Space capsule",
        text:   `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                you'll spend your time during the flight. It includes a space gym, cinema, 
                and plenty of other activities to keep you entertained.`,
        image: `../../assets/technology/image-space-capsule-landscape.jpg`
    },
]

const listWrapper = document.querySelector('.technology__list');
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    changeContent();
});

technologies.forEach((_, index) => {
    const button = document.createElement('span');
    button.classList.add('technology__list-technology');
    button.dataset.id = index;
    if (index === 0){
        button.classList.add('technology__list-technology-selected')
    }
    button.innerHTML = parseInt(button.dataset.id) + 1;
    button.addEventListener('click', () => {
        currentIndex = index;
        changeContent();
        changeDot();
    })
    listWrapper.appendChild(button);
})

function changeDot() {	//  fonction pour enlever la classe a tous les dot et met le dot_selected par rapport a l'index
    const dots = document.querySelectorAll('.technology__list-technology');			
	dots.forEach(d => {
		d.classList.remove('technology__list-technology-selected');
	})
	dots[currentIndex].classList.add('technology__list-technology-selected');		//    selection du dot par rapport a l'index
}

function changeContent() {			//   fonction pour changer le contenu de la banniere
    const name = document.querySelector('.technology__name');
    const text = document.querySelector('.technology__text');
    const image = document.querySelector('.technology__image');

    name.innerHTML = technologies[currentIndex].name;
    text.innerHTML = technologies[currentIndex].text;
    image.src = technologies[currentIndex].image;
}