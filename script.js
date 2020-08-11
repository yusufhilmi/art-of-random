// AUTHOR: YUSUF HILMI
// 


/////////////////////////////////////////////////////
///////////  THINGS YOU CAN CHANGE //////////////////


// CHANGE THIS UNTIL URE STAISFIED WITH THE COMPONENT SIZES
const SCALE = 3.5;

// CHOOSE ELEMENTS WITH ID "thing<number>"  
const bigs = [15, 6, 2, 3, 4, 17, 13, 14, 12, 16];  // INSERT ID OF BIG ELEMENTS TO HERE 

const NUMBEROFBIGS = 5;  // HOW MANY BIG SHOULD BE INSIDE FRAME
const dotnumbers = randomize(10, 50);  // RANDOM NUMBER OF DOTS

const SMALLELEMENTSRANDOM = 3;   // SMALL ELEMENTS CAN APPEAR +1

const TODELETE = [16 ,14];
///////////  THIS PARAMETERS SHOULD SUFFICE /////////
/////////////////////////////////////////////////////


function getFrame() {
    var frame_pos = document.querySelector("#frame").getBoundingClientRect();
    return frame_pos
}

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var frame_pos = getFrame();

var dot = d3.select("#dot");
dot.attr("transform", `scale(${SCALE})`);
dot.attr("style", `top: ${randomize(frame_pos.top, frame_pos.bottom)}; left: ${randomize(frame_pos.right, frame_pos.left)}`);

var chosenBigs = [];
for (let i = 0; i < NUMBEROFBIGS; i++) {
    let randomized_index = randomize(0, bigs.length);
    console.log(randomized_index);
    chosenBigs.push(bigs[randomized_index]);
}

console.log(chosenBigs);

for (var i = 2; i < 17; i++) {

    if ((TODELETE.includes(i))){
        continue;
    }
    if ((bigs.includes(i)) && !chosenBigs.includes(i)) {
        console.log(i);
        continue;
    }
    if(randomize(0,1)===0 && !(bigs.includes(i))){
        continue;
    }

    let thing = d3.select(`#thing${i}`);
    // console.log(`thing${i}`);
    // console.log(randomize(0,1));


    thing.attr("transform", `scale(${SCALE})`)
    component_frame = document.querySelector(`#thing${i}`).getBoundingClientRect();
    width = component_frame.width;  // RANDOM WIDTH PARAMETERS FOR ALL
    height = component_frame.height; // RANDOM HEIGHT PARAMETERS FOR ALL
    rotation = randomize(0, 360);  // RANDOM ROTATION

    thing.attr("width", width);
    thing.attr("height", height);

    // RANDOM LOCATION !don't change if you know what you're doing
    thing.attr("style", `top: ${randomize(frame_pos.top, frame_pos.bottom - height)}; left: ${randomize(frame_pos.left, frame_pos.right - width)}`);
    thing.attr("transform", ` rotate(${rotation})`);

    if (!(bigs.includes(i))) {
        loopoverloop = randomize(0, SMALLELEMENTSRANDOM);   // RANDOM NUMBER OF OTHER ELEMENTS !there is already one created before!
        for (var j = 0; j < loopoverloop; j++) {
            svgrotation = randomize(0, 360);

            $(`#thing${i}`).clone()
                .attr("style", `top: ${randomize(frame_pos.top, frame_pos.bottom - height)}; left: ${randomize(frame_pos.left, frame_pos.right - width)}`)
                .attr("transform", ` rotate(${svgrotation})`)
                .appendTo(".container");
        }
    }

}

for (var i = 0; i < dotnumbers; i++) {
    $("#dot").clone()
        .attr("style", `top: ${randomize(frame_pos.top, frame_pos.bottom)}; left: ${randomize(frame_pos.left, frame_pos.right)}`)
        .appendTo(".container");
}
