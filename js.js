
function number(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

number1 = number (6, 9);    
summa = number (11, 14);
number2 = summa - number1;

num1 = document.getElementById('num1');
num1.innerHTML = number1;

num2 = document.getElementById('num2');
num2.innerHTML = number2;


////////
var canvas = document.querySelector('#canvas');
context = canvas.getContext('2d');
context.strokeStyle = 'purple';
context.wight = 875;
context.height = 166;

var x = 35.5;
var y = 102;
var cm = 39;

StageFirst();

function drawArrow(start, end) {

// Начальная, конечная, контрольная точка для дуги
var fromx = x + start * cm; //35.5 + 0 * 39
var fromy = y;
var tox = x + end * cm;
var toy = y;
var qX = fromx + (end - start) / 2 * cm;
var qY = y - (end - start) / 2 * cm;

// Дуга
context.beginPath();
context.moveTo(fromx, fromy);
context.quadraticCurveTo(qX, qY, tox, toy);
context.stroke();

//  // Центральная точка
 midPoint = getQuadraticCurvePoint(fromx, fromy, qX, qY, tox, toy);

 // Угол от контрольной точки для стрелки
 function findAngle(qx, qy, tox, toy) {
     return Math.atan2((toy - qy), (tox - qx));
 }

//  // Стрелка
 function drawArrowhead(locx, locy, angle, sizex, sizey) {
   var hx = sizex;
   var hy = sizey /2;
   ctx.save();
   ctx.translate((locx ), (locy));
   ctx.rotate(angle);
   ctx.translate(-hx,-hy);
   ctx.beginPath();
   ctx.moveTo(0,0);
   ctx.lineTo(sizex,hy);
   ctx.rotate(-angle);
   ctx.lineTo(-0.8*sizex,1.3*hy);
   ctx.stroke();
   ctx.restore();
 }

//  // Расчет центральной точки дуги
 function _getQBezierValue(t, p1, p2, p3) {
   var iT = 1 - t;
   return iT * iT * p1 + 2 * iT * t * p2 + t * t * p3;
 }

 function getQuadraticCurvePoint(startX, startY, cpX, cpY, endX, endY) {
   return {
       x:    _getQBezierValue(0.5, startX, cpX, endX),
       y:    _getQBezierValue(0.5, startY, cpY, endY)
   };
 }
}


function StageFirst()
{
    drawArrow(0, number1);
}

