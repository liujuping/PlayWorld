/** * Created by ljp on 2015/10/15. *//*function $(elem) {    var text=new RegExp(".");    var target=elem.substr(1);    //console.log(target);    return text.test(elem) ? document.getElementById(target) : document.getElementsByClassName(target);}*/window.onload=function(){};var container = document.getElementById("container");var width = container.offsetWidth;var height = container.offsetHeight;var head = document.getElementsByClassName("head")[0];//var head=document.getElementById("head");//console.log(width);function game(){    this.width=34;    this.height=42;    this.border=10;    this.x=Math.random()*width*0.3+width*0.2;             //Math.random()*width-this.width-20);    this.y=Math.random()*height*0.3+height*0.2;              //Math.random()*(height-this.height-20);    this.speed=1;    this.move_to=Math.round(Math.random()*3);    // 0 下  1左  2上 3右    this.snake_init=function(){        //alert(this.x);        //console.log(this.x);        //console.log(head.style.offsetWidth);        //console.log("2");        head.style.left=this.x+"px";        head.style.top=this.y+"px";        head.style.transform="rotate("+this.move_to*90+"deg)";    };    this.snake_move=function(){        switch (this.move_to)        {            case 0:this.y+=this.speed;break;            case 1:this.x-=this.speed;break;            case 2:this.y-=this.speed;break;            case 3:this.x+=this.speed;break;        }        this.snake_init();    }}var snake = new game();snake.snake_init();startGame();function startGame(){    var timer=setInterval(function(){        snake.snake_move();        if(snake.x>(width-snake.height-snake.border)||snake.x<-3||snake.y>(height-snake.height-snake.border)||snake.y<-3){            clearInterval(timer);        }    },10)}