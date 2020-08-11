// AUTHOR: YUSUF HILMI
// 
function getFrame() {
    var frame_pos = document.querySelector("#frame").getBoundingClientRect();
    return frame_pos
}

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var frame_pos = getFrame();


var dot = d3.select("#dot");
dot.attr("width", 20);
dot.attr("style", `top: ${randomize(frame_pos.top, frame_pos.bottom)}; left: ${randomize(frame_pos.right, frame_pos.left)}`);
dot.attr("transform", `rotate(45)`);


for (var i = 2; i < 19; i++) {
    let thing = d3.select(`#thing${i}`);
    console.log(`thing${i}`)

    width = randomize(50, frame_pos.width / 4);  // RANDOM WIDTH PARAMETERS FOR ALL
    height = randomize(50, frame_pos.height / 4); // RANDOM HEIGHT PARAMETERS FOR ALL
    rotation = randomize(0, 360);  // RANDOM ROTATION

    thing.attr("width", width);
    thing.attr("height", height);

    // RANDOM LOCATION
    thing.attr("style", `top: ${randomize(frame_pos.top, frame_pos.bottom - height)}; left: ${randomize(frame_pos.left, frame_pos.right - width)}`);

    // RANDOM ROTATION
    thing.attr("transform", ` rotate(${randomize(0, 360)})`);

    
    loopoverloop = randomize(0, 2);   // RANDOM NUMBER OF OTHER ELEMENTS !there is already one created before!
    for (var j = 0; j < loopoverloop; j++) {
        svgwidth = randomize(50, frame_pos.width / 4);  // RANDOM WIDTH PARAMETERS FOR ALL
        svgheight = randomize(50, frame_pos.height / 4); // RANDOM HEIGHT PARAMETERS FOR ALL
        svgrotation = randomize(0, 360);

        $(`#thing${i}`).clone()
            .attr("width", svgwidth)
            .attr("height", svgheight)
            .attr("style", `top: ${randomize(frame_pos.top, frame_pos.bottom - svgheight)}; left: ${randomize(frame_pos.left, frame_pos.right - svgwidth)}`)
            .attr("transform", ` rotate(${svgrotation})`)
            .appendTo(".container");
    }

}


var dotnumbers = randomize(0, 30);  // RANDOM NUMBER OF DOTS
for (var i = 0; i < dotnumbers; i++) {
    $("#dot").clone()
        .attr("style", `top: ${randomize(frame_pos.top, frame_pos.bottom - height)}; left: ${randomize(frame_pos.left, frame_pos.right - width)}`)
        .appendTo(".container");
}
