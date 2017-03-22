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

rectangle(90);
triangle(30, 120);
stamp();