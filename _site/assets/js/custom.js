var canvas = document.getElementById("canvas-bg");
//canvas.style.height = '100%';
canvas.width  = canvas.offsetWidth;
//canvas.height = canvas.offsetHeight;

var c = canvas.getContext("2d");
var n = 100;
var p = [];
var maxDist = 100;

for (var i = 0; i < n; i++) {
    p.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() / 2 - 0.25,
        vy: Math.random() / 2 - 0.25,
        r: Math.random() * 2 + 1,
    });
}

function dist(pa, pb) {
    var dx = pb.x - pa.x,
        dy = pb.y - pa.y;
    return Math.sqrt(dx * dx + dy * dy);
}

function update() {

    c.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < n; i++) {
        var node = p[i];

        if (node.x > canvas.width - 4) {
            node.x = canvas.width - 4;
            node.vx *= -1;
        } else if (node.x < 4) {
            node.x = 4;
            node.vx *= -1;
        }

        if (node.y > canvas.height - 4) {
            node.y = canvas.height - 4;
            node.vy *= -1;
        } else if (node.y < 4) {
            node.y = 4;
            node.vy *= -1;
        }

        node.x += node.vx;
        node.y += node.vy;
        c.beginPath();
        c.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        c.fill();
    }

    for (var i = 0; i < n - 1; i++) {
        var a = p[i];
        for (var j = i+1; j < n; j++) {
            var b = p[j];
            var d = dist(a, b);
            if (d < maxDist) {
                c.lineWidth = 1 - d / maxDist;
                c.beginPath();
                c.moveTo(a.x, a.y);
                c.lineTo(b.x, b.y);
                c.stroke();
            }
        }
    }

    requestAnimationFrame(update);
}

update();

var cv1 = document.getElementById("canvas-card-1"),
    cv2 = document.getElementById("canvas-card-2"),
    cv3 = document.getElementById("canvas-card-3"),
    cx1 = cv1.getContext("2d"),
    cx2 = cv2.getContext("2d"),
    cx3 = cv3.getContext("2d");

cv1.width = cv1.offsetWidth;
cv2.width = cv1.offsetWidth;
cv3.width = cv1.offsetWidth;

function updateCard1() {
    cx1.fillStyle = 'cyan';
    cx1.beginPath()
    cx1.rect(0,0,cv1.width,cv1.height);
    cx1.fill();
    cx1.fillStyle = 'black';
    cx1.beginPath()
    cx1.arc(cv1.width/2, cv1.height/2,50,0,Math.PI*2);
    cx1.fill();
    requestAnimationFrame(updateCard1);
}

function updateCard2() {
    cx2.fillStyle = 'magenta';
    cx2.beginPath()
    cx2.rect(0,0,cv2.width,cv2.height);
    cx2.fill();
    requestAnimationFrame(updateCard2);
}

function updateCard3() {
    cx3.fillStyle = 'yellow';
    cx3.beginPath()
    cx3.rect(0,0,cv3.width,cv3.height);
    cx3.fill();
    requestAnimationFrame(updateCard2);
}

updateCard1();
updateCard2();
updateCard3();
