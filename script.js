var pX = 200
var pY = 350

var eX = 100
var eY = 100

var bullet_holder = []

var bullet_counter = 0

var e 

var total_enemy_health = 300

function setup(){

createCanvas(400,400)

e = new Enemy(eX,eY)

}

function draw(){

background(0)

player()

e.display()
e.move()
// e.lose_health()

enemy_health()
}

function keyPressed(){

	if(key == ' '){

		bullet_counter++
		bullet_holder[i].x = pX
	}

}


function player(){

push()
translate(pX,pY)
fill(255)
rect(-25, -15, 50,30)
pop()

if(keyIsDown(LEFT_ARROW)){
	pX-=3
}

if(keyIsDown(RIGHT_ARROW)){
	pX+=3
}

push()
for(i = 0; i < bullet_counter; i++){

append(bullet_holder, new Bullet())
bullet_holder[i].display()
bullet_holder[i].move()
bullet_holder[i].collide()

//console.log(bullet_holder[i].y)
}
pop()

if(pX >= 375){

pX = 375

}

if(pX <= 25){
 	
 	pX = 25
}

if(bullet_holder >= 10){

bullet_counter = 1

}

}

function Bullet(){

this.x = pX
this.y = 350

this.speed = 3

this.display = function(){

fill(255)
ellipse(this.x, this.y, 20,20)

}

this.move = function(){

this.y -= this.speed

}

this.collide = function(){

	if(this.x >= e.x && this.x <= e.x+50){
	if(this.y >= e.y && this.y <= e.y+30){
		
		total_enemy_health -= .5
	}
	}

}
}


function Enemy(x,y){

this.x = x
this.y = y

this.flipper = 1

this.display = function(){

fill(100,0,0)
rect(this.x,this.y,50,30)

}

this.move = function(){

if(this.x >= 350 || this.x <= 50){
 	this.flipper *= -1
 }

 console.log(this.flipper)

 this.x += this.flipper

}

// this.lose_health = function(){

// 	if(bullet_holder[i].x >= this.x && bullet_holder[i].x <= this.x + 50){
// 		if(bullet_holder[i].y >= this.y && bullet_holder[i].y <= this.y + 30){

// 			total_enemy_health -= 50

// 	}
// 	}

// }

}

function enemy_health(){

fill(255,0,0)
rect(50, 10, 300, 5 )
fill(255,255,255)
rect(50, 10, total_enemy_health, 5 )

if(total_enemy_health <= 0){

total_enemy_health=0

}
}