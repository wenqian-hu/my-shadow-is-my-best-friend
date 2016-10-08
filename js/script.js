// initialize sound
window.onload = init;
var context;
var bufferLoader;

function init() {
    // Fix up prefixing
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();

    bufferLoader = new BufferLoader(
        context, [
            '../audio/rain.mp3',
        ],
        finishedLoading
    );

    bufferLoader.load();
}

var Rain = {};

function finishedLoading(bufferList) {

    Rain.play = function() {
        var source = context.createBufferSource();
        var gainNode = context.createGain();

        source.buffer = bufferList[0];
        source.connect(gainNode);
        gainNode.connect(context.destination);
        source.loop = true;
        source.start(0);
        gainNode.gain.value = 0.2;
        gainNode.gain.exponentialRampToValueAtTime(1.0, context.currentTime + 5);
        this.source = source;
        this.gainNode = gainNode;
    };
    Rain.stop = function() {
    	this.gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 5);
    }

}

// scrollreveal
window.sr = ScrollReveal({
    duration: 2000,
    reset: true
});

sr.reveal('#scene-0', {
    viewFactor: 0.5
});

/*
	Scene 1
*/
sr.reveal('#scene-1', {
    viewFactor: 0.5
});

sr.reveal('#scene-1-1', {
    viewFactor: 0.5,
    afterReveal: function() {
        var bgWidth = $('#background-1-5').width()

        $("#balloon")
            .css({
                top: "100px",
                left: "100px",
                width: "600px",
                height: "650px",
            })
            .animate({
                top: "-700px",
                left: "100px",
                width: "600px",
                height: "650px"

            }, 2500, function() {
                console.log('balloon flies')
            })
    },
    beforeReset: function() {
        $('#balloon')
            .css({
                top: "100px",
                left: "100px",
                width: "600px",
                height: "650px",
            })
    }

});


/*
	Scene 2
*/
sr.reveal('#scene-2', {
    viewFactor: 0.5,
    afterReveal: function() {
        var bgWidth = $('#background-2').width()

        $("#oreo-1")
            .css({
                top: "-100px",
                left: "100px",
                width: "450px",
                height: "450px",
            })
            .animate({
                top: "150px",
                left: "+=" + (bgWidth * 0.5),
                width: "300px",
                height: "300px"

            }, 2500, function() {
                console.log('oreo has falled!')
            })
    },
    beforeReset: function() {
        $('#oreo-1')
            .css({
                top: "-100px",
                left: "100px",
                width: "450px",
                height: "450px",
            })
    }
});



/*
	Scene 3
*/
sr.reveal('#scene-3', {
    viewFactor: 0.5
});


/*
	Scene 4
*/
var scene4Start = false;

sr.reveal('#scene-4', {
    viewFactor: 0.5,
    beforeReveal: function() {
        scene4Start = true;

        console.log('beforereveal');
    },

    afterReveal: function() {
    	Rain.play();
    },

    beforeReset: function() {
        scene4Start = false;
        Rain.stop();

    }
});

// rain!!!!
var canvas = $('#canvas1')[0];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;
    ctx.strokeStyle = 'rgba(174,194,224,0.5)';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';


    var init = [];
    var maxParts = 1000;
    for (var a = 0; a < maxParts; a++) {
        init.push({
            x: Math.random() * w,
            y: Math.random() * h,
            l: Math.random() * 1,
            xs: -4 + Math.random() * 4 + 2,
            ys: Math.random() * 10 + 50
        })
    }

    var particles = [];
    for (var b = 0; b < maxParts; b++) {
        particles[b] = init[b];
    }

    function draw() {
        if (scene4Start) {
            console.log('hi');
            ctx.clearRect(0, 0, w, h);
            for (var c = 0; c < particles.length; c++) {
                var p = particles[c];
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                ctx.stroke();
            }
            move();
        }

    }

    function move() {
        for (var b = 0; b < particles.length; b++) {
            var p = particles[b];
            p.x += p.xs;
            p.y += p.ys;
            if (p.x > w || p.y > h) {
                p.x = Math.random() * w;
                p.y = -20;
            }
        }
    }

    setInterval(draw, 30);

}

/*
	Scene 5
*/
sr.reveal('#scene-5', {
    viewFactor: 0.5
});

/*
	Scene 6
*/
sr.reveal('#scene-6', {
    viewFactor: 0.5
});

/*
	Scene 7
*/
sr.reveal('#scene-7', {
    viewFactor: 0.5
});

/*
	Scene 8
*/
sr.reveal('#scene-8', {
    viewFactor: 0.5
});

/*
	Scene 9
*/
sr.reveal('#scene-9', {
    viewFactor: 0.5
});
