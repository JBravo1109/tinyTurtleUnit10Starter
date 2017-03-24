TinyTurtle.apply(window, [undefined, 400, 400]);

function square(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
}
function triangle(length , angle){
right(angle);
forward(length);
right(angle);
forward(length);
right(angle);
forward(length);
}
// Type your function call below
function house(){
square();
triangle();
}
function rectangle(size){
forward(size);
right(90);
forward(size*2);
right(90);
forward(size);
right(90);
forward(size*2);

}

//rectangle(30);
//triangle(100, 120);


function rhombus(size){
    right(330);
    forward(size);
    right(60);
    forward(size);
    right(120);
    forward(size);
    right(60);
    forward(size);
    

}
rhombus(40);