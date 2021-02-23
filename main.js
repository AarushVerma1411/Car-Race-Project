canvas= document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car1_width= 100;
car1_height= 90;
car1_x=10;
car1_y=10;
car1_image= "Car 1.png";


car2_width= 100;
car2_height= 90;
car2_x=10;
car2_y=100;
car2_image= "Car 2.jpg";

background_image="Car.jfif";

function add(){
    background_imgTag= new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src= background_image;

    car1_imgTag= new Image();
    car1_imgTag.onload= uploadCar1;
    car1_imgTag.src= car1_image;

    car2_imgTag= new Image();
    car2_imgTag.onload= uploadCar2;
    car2_imgTag.src= car2_image;
}



function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_imgTag,car1_x, car1_y,car1_width, car1_height);
}


function uploadCar2(){
    ctx.drawImage(car2_imgTag,car2_x, car2_y,car2_width, car2_height);
}


window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed= e.keyCode;
console.log(keyPressed);
if (keyPressed=='38'){
    up();
    console.log("up");
}
if (keyPressed=='40'){
    down();
    console.log("down");
}
if (keyPressed=='37'){
    left();
    console.log("left");
}
if (keyPressed=='39'){
    right();
    console.log("right");
}



if (keyPressed=='87'){
    up1();
    console.log("w");
}
if (keyPressed=='83'){
    down1();
    console.log("s");
}
if (keyPressed=='65'){
    left1();
    console.log("a");
}
if (keyPressed=='68'){
    right1();
    console.log("d");
}



}
function up(){
    if (car1_y>=0){
        car1_y=car1_y-10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function down(){
    if (car1_y<=500){
        car1_y=car_y+10;
        uploadBackground();
        uploadcar1();
        uploadCar2();
    }
}

function left(){
    if (car1_x>=0){
        car1_x=car1_x-10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function right(){
    if (car1_x<=700){
        car1_x=car1_x+10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}









function up1(){
    if (car2_y>=0){
        car2_y=car1_y-10;
        uploadBackground();
        uploadCar2();
        uploadCar1();

    }
}

function down1(){
    if (car2_y<=500){
        car2_y=car_y+10;
        uploadBackground();
        uploadCar2();
        uploadCar1();
    }
}

function left1(){
    if (car2_x>=0){
        car2_x=car2_x-10;
        uploadBackground();
        uploadCar2();
        uploadCar1();
    }
}

function right1(){
    if (car2_x<=700){
        car2_x=car2_x+10;
        uploadBackground();
        uploadCar2();
        uploadCar1();
    }
}