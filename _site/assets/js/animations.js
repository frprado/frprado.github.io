var maxDist     = 100;
var numParts    = 50;
var radius      = 25;
var minRadius   = 2;
var maxRadius   = 4;
var minSpeed    = -0.5;
var maxSpeed    =  0.5;

function randomRange(min, max) {
    return (max - min) * Math.random() + min;
}

function distance(nodeA, nodeB) {
    var dx = nodeA.x - nodeB.x,
        dy = nodeA.y - nodeB.y;
    return Math.sqrt(dx*dx + dy*dy);
}

function generateParticles(n, width, height) {
    var parts = [];
    for (var i = 0; i < n; i++) {
        parts.push({
            x:      randomRange(-radius, width + radius),
            y:      randomRange(-radius, height + radius),
            vx:     randomRange(minSpeed, maxSpeed),
            vy:     randomRange(minSpeed, maxSpeed),
            radius: randomRange(minRadius, maxRadius),
            color: {
                r: randomRange(0, 255),
                g: randomRange(0, 255),
                b: randomRange(0, 255),
            },
        });
    }
    return parts;
}

/* -------------------------------------------------------------------------- */

(function(){

    var nodes       = [];
    var canvas      = document.getElementById("canvas-github");
    var ctx         = canvas.getContext("2d");
    var bgColor     = 'rgb(16,16,32)';
    var lineColor   = 'rgb(100,24,190)';

    var update = function() {

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];

            if (node.x > canvas.width +radius) {
                node.x   = canvas.width +radius;
                node.vx *= -1;
            } else if (node.x <-radius) {
                node.x   =-radius;
                node.vx *= -1;
            }

            if (node.y > canvas.height +radius) {
                node.y   = canvas.height +radius;
                node.vy *= -1;
            } else if (node.y <-radius) {
                node.y   =-radius;
                node.vy *= -1;
            }

            node.x += node.vx;
            node.y += node.vy;
        }

        for (var i = 0; i < nodes.length - 1; i++) {
            var a = nodes[i];
            for (var j = i+1; j < nodes.length; j++) {
                var b = nodes[j];
                var dist = distance(a, b);
                if (dist < maxDist) {
                    ctx.lineWidth = 2 - dist/maxDist * 2;
                    ctx.strokeStyle = lineColor;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        }

        // for (var i = 0; i < nodes.length; i++) {
        //     var node = nodes[i];
        //     ctx.beginPath();
        //     ctx.fillStyle = 'rgb(240,24,100)';
        //     ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        //     ctx.fill();
        // }

        requestAnimationFrame(update);
    };

    canvas.width = canvas.offsetWidth;
    if (ctx) {
        nodes = generateParticles(numParts, canvas.width, canvas.height);
        update();
    }
})();

(function(){

    var nodes       = [];
    var canvas      = document.getElementById("canvas-medium");
    var ctx         = canvas.getContext("2d");
    var bgColor     = 'rgb(16,16,32)';
    var lineColor   = 'rgb(24,190,100)';

    var update = function() {

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];

            if (node.x > canvas.width +radius) {
                node.x   = canvas.width +radius;
                node.vx *= -1;
            } else if (node.x <-radius) {
                node.x   =-radius;
                node.vx *= -1;
            }

            if (node.y > canvas.height +radius) {
                node.y   = canvas.height +radius;
                node.vy *= -1;
            } else if (node.y <-radius) {
                node.y   =-radius;
                node.vy *= -1;
            }

            node.x += node.vx;
            node.y += node.vy;
        }

        for (var i = 0; i < nodes.length - 1; i++) {
            var a = nodes[i];
            for (var j = i+1; j < nodes.length; j++) {
                var b = nodes[j];
                var dist = distance(a, b);
                if (dist < maxDist) {
                    ctx.lineWidth = 2 - dist/maxDist * 2;
                    ctx.strokeStyle = lineColor;
                    // ctx.strokeStyle = 'rgb(100,24,190)';
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        }

        // for (var i = 0; i < nodes.length; i++) {
        //     var node = nodes[i];
        //     ctx.beginPath();
        //     ctx.fillStyle = 'rgb(240,24,100)';
        //     ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        //     ctx.fill();
        // }

        requestAnimationFrame(update);
    };

    canvas.width = canvas.offsetWidth;
    if (ctx) {
        nodes = generateParticles(numParts, canvas.width, canvas.height);
        update();
    }
})();

(function(){

    var nodes       = [];
    var canvas      = document.getElementById("canvas-atomic");
    var ctx         = canvas.getContext("2d");
    var bgColor     = 'rgb(16,16,32)';
    var lineColor   = 'rgb(190,24,100)';

    var update = function() {

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];

            if (node.x > canvas.width +radius) {
                node.x   = canvas.width +radius;
                node.vx *= -1;
            } else if (node.x <-radius) {
                node.x   =-radius;
                node.vx *= -1;
            }

            if (node.y > canvas.height +radius) {
                node.y   = canvas.height +radius;
                node.vy *= -1;
            } else if (node.y <-radius) {
                node.y   =-radius;
                node.vy *= -1;
            }

            node.x += node.vx;
            node.y += node.vy;
        }

        for (var i = 0; i < nodes.length - 1; i++) {
            var a = nodes[i];
            for (var j = i+1; j < nodes.length; j++) {
                var b = nodes[j];
                var dist = distance(a, b);
                if (dist < maxDist) {
                    ctx.lineWidth = 2 - dist/maxDist * 2;
                    ctx.strokeStyle = lineColor;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        }

        // for (var i = 0; i < nodes.length; i++) {
        //     var node = nodes[i];
        //     ctx.beginPath();
        //     ctx.fillStyle = 'rgb(240,24,100)';
        //     ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        //     ctx.fill();
        // }

        requestAnimationFrame(update);
    };

    canvas.width = canvas.offsetWidth;
    if (ctx) {
        nodes = generateParticles(numParts, canvas.width, canvas.height);
        update();
    }
})();


// function updateNodeGarden() {

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (var i = 0; i < nodes.length; i++) {
//         var node = nodes[i];

//         if (node.x > canvas.width - node.radius) {
//             node.x   = canvas.width - node.radius;
//             node.vx *= -1;
//         } else if (node.x < node.radius) {
//             node.x   = node.radius;
//             node.vx *= -1;
//         }

//         if (node.y > canvas.height - node.radius) {
//             node.y   = canvas.height - node.radius;
//             node.vy *= -1;
//         } else if (node.y < node.radius) {
//             node.y   = node.radius;
//             node.vy *= -1;
//         }

//         node.x += node.vx;
//         node.y += node.vy;

//         ctx.beginPath();
//         ctx.filter = 'blur(1px)';
//         ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
//         ctx.fill();
//     }

//     for (var i = 0; i < nodes.length - 1; i++) {
//         var a = nodes[i];
//         for (var j = i+1; j < nodes.length; j++) {
//             var b = nodes[j];
//             var dist = distance(a, b);
//             if (dist < maxDist) {
//                 ctx.lineWidth = 1 - dist/maxDist;
//                 ctx.beginPath();
//                 ctx.moveTo(a.x, a.y);
//                 ctx.lineTo(b.x, b.y);
//                 ctx.stroke();
//             }
//         }
//     }

//     requestAnimationFrame(updateNodeGarden);
// }

// var canvas = document.getElementById("canvas-bg");
// var ctx = canvas.getContext('2d');
// canvas.width = canvas.offsetWidth;

// nodes = generateParticles(150, canvas.width, canvas.height);
// updateNodeGarden();
