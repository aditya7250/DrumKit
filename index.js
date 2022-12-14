//Detecting Button pressed
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        // this.style.color = "white";
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    });
}

//Detecting Keyboard pressed

document.addEventListener("keydown", function (event) {

    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {

    switch (key) {
        case "w":
            var tom_1 = new Audio('tom-1.mp3');
            tom_1.play();

            break;
        case "a":
            var tom_2 = new Audio('tom-2.mp3');
            tom_2.play();
            break;

        case "s":
            var tom_3 = new Audio('tom-3.mp3');
            tom_3.play();
            break;

        case "d":
            var tom_4 = new Audio('tom-4.mp3');
            tom_4.play();
            break;

        case "j":
            var snare = new Audio('snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('crash.mp3');
            crash.play();
            break;

        case "l":
            var kick_bass = new Audio('kick-bass.mp3');
            kick_bass.play();
            break;

        default: console.log(buttonInnerHtml);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);
}
