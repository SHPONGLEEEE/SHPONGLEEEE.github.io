import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// wczytywanie obrazków

loadSprite("tlo","Kartkaswiateczna.png")
loadSprite("obrazek","Renifer.png")
loadSound("muzyka", "Cicha noc.mp3")

// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);

add([
    sprite("tlo"),
    pos(0,0)
])
const renifer = add([
    sprite("obrazek"),
    pos(230,130)
])

onMouseRelease(()=>play("muzyka"))


var yMinus = 1;
var xMinus = 1;
onUpdate(()=>{
    if(renifer.pos.x == 230)
    {
        xMinus = -1;
        yMinus = -1;
    }
    if(renifer.pos.x == 100)
    {
        xMinus = 1;
        yMinus = 1;
    }
    renifer.pos.x=renifer.pos.x += xMinus;
    renifer.pos.y=renifer.pos.y += yMinus;
    
})

