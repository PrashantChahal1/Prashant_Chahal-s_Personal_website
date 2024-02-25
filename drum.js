

for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
document.querySelectorAll("button")[i].addEventListener("click", playSound);

function playSound()
{
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
}
}
document.addEventListener("keydown", function(eve){
    makeSound(eve.key);
    buttonAnimation(eve.key);
});

function makeSound(key)
{
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
             audio.play();
            break;
        case "a":
                var audio = new Audio('sounds/kick-bass.mp3');
                 audio.play();
                break;
        case "s":
                    var audio = new Audio('sounds/snare.mp3');
                     audio.play();
                    break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
             audio.play();
            break;
       case "j":
                var audio = new Audio('sounds/tom-2.mp3');
                 audio.play();
                break;
       case "k":
                    var audio = new Audio('sounds/tom-3.mp3');
                     audio.play();
                    break;
        case "l":
                        var audio = new Audio('sounds/tom-4.mp3');
                         audio.play();
                        break;
        default:
            break;
    }
}
function buttonAnimation(key)
{
    var anim=document.querySelector("."+key);
    anim.classList.add("pressed");

    setTimeout(function(){
    anim.classList.remove("pressed");   
    }, 100);
    if ("w"==key) {
        document.querySelector(".winner").innerHTML = "Kladush";
        setTimeout(function(){
            document.querySelector(".winner").innerHTML = "";  
            }, 500);
      }
      
      else if ("a"==key) {
        document.querySelector(".winner").innerHTML = "bou";
        setTimeout(function(){
            document.querySelector(".winner").innerHTML = "";  
            }, 500);
      }
      else if ("s"==key) {
        document.querySelector(".winner").innerHTML = "hoop";
        setTimeout(function(){
            document.querySelector(".winner").innerHTML = "";  
            }, 500);
      }
      else if ("d"==key) {
        document.querySelector(".winner").innerHTML = "dong";
        setTimeout(function(){
            document.querySelector(".winner").innerHTML = "";  
            }, 500);
      }
      else if ("j"==key) {
        document.querySelector(".winner").innerHTML = "dang";
        setTimeout(function(){
            document.querySelector(".winner").innerHTML = "";  
            }, 500);
      }
      else if ("k"==key) {
        document.querySelector(".winner").innerHTML = "daang";
        setTimeout(function(){
            document.querySelector(".winner").innerHTML = "";  
            }, 500);
      }
      else {
        document.querySelector(".winner").innerHTML = "deng";
        setTimeout(function(){
            document.querySelector(".winner").innerHTML = "";  
            }, 500);
      }
}
