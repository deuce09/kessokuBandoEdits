(function () {

    kitaIkuyo = document.getElementById("kitaIkuyo");
    ryoYamada = document.getElementById("ryoYamada");
    hitoriGotou = document.getElementById("hitoriGotou");
    nijikaIchiji = document.getElementById("nijikaIchiji");

    kitaImg = "./assets/img/kitaIkuyo.png";
    ryoImg = "./assets/img/ryoYamada.png";
    bocchiImg = "./assets/img/hitoriGotou.png";
    nijikaImg = "./assets/img/nijikaIchiji.png";

    function setImg(character, img){
        character.classList.add(`bg-[url(${img})]`)
    }

    function setTransitions(character) {
        character.style.transition = "width 0.3s ease, transform 0.3s ease, opacity 0.2s ease, backgroundColor 0.5s ease, backgroundImage 0.5s ease";
    }

    const hoverScaleAmount = "w-[500vh]"

    function hoverCharacters(character) {
        character.addEventListener("mouseenter", () => {
            character.classList.remove("w-full");
            character.classList.add(hoverScaleAmount);

            let prev = character.previousElementSibling;
            let next = character.nextElementSibling;

            for (let i = 0; i < 3; i++) {
                if (prev) {
               
                    prev = prev.previousElementSibling;
                }
                if (next) {
                 
                    next = next.nextElementSibling;
                }
            }

        })

        character.addEventListener("mouseleave", () => {
            character.classList.remove(hoverScaleAmount);
            character.classList.add("w-full");

            let prev = character.previousElementSibling;
            let next = character.nextElementSibling;

            for (let i = 0; i < 3; i++) {
                if (prev) {
                
                    prev = prev.previousElementSibling;
                }
                if (next) {
                   
                    next = next.nextElementSibling;
                }
            }

        })
    }

    setImg(kitaIkuyo, kitaImg);
    setImg(ryoYamada, ryoImg);
    setImg(hitoriGotou, bocchiImg);
    setImg(nijikaIchiji, nijikaImg);

    setTransitions(kitaIkuyo);
    setTransitions(ryoYamada);
    setTransitions(hitoriGotou);
    setTransitions(nijikaIchiji);

    hoverCharacters(kitaIkuyo);
    hoverCharacters(ryoYamada);
    hoverCharacters(hitoriGotou);
    hoverCharacters(nijikaIchiji);

})();