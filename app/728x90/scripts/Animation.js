var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax({repeat: -1, paused: true});
    var pintl = new TimelineMax();
    var tltxt = new TimelineMax();
    var icicle1 = document.getElementById('icicle1');
    var icicle2 = document.getElementById('icicle2');
    var pin = document.getElementById('pin');
    var cta = document.getElementById('cta');
    var cta_bg = document.getElementById('cta_bg');
    var buttonExit = document.getElementById('button-exit');

    var theSVG = document.getElementById('theSVG');
    var theSVG2 = document.getElementById('theSVG2');
    var lineOneGradient = document.getElementById('lineOneGradient');
    var lineTwoGradient = document.getElementById('lineTwoGradient');
    var lineThreeGradient = document.getElementById('lineThreeGradient');
    var CTAGradient = document.getElementById('CTAGradient');

    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {


        t.set(banner, {opacity: 1});
        t.set("#container", {perspective: 600});
        t.set("#container2", {perspective: 600});
        t.set(pin, {y:"-=10", transformOrigin: "50% 100%"});
        t.set(icicle1, {y: "-=25", scaleY: .5, transformOrigin: "50% 0%"});
        t.set(icicle2, {y: "-=25", scaleY: .5, transformOrigin: "50% 0%"});


        buttonExit.addEventListener('mouseover', function () {
            t.to(cta_bg, .25, {backgroundColor: "rgba(211, 78, 255, 1)"});

        });
        buttonExit.addEventListener('mouseout', function () {
            t.to(cta_bg, .25, {backgroundColor: "rgba(62, 104, 162, 1)"});

        });


    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {

        t.set(lineOneGradient, {attr:{x1:-480, x2:-320}});
        t.set(lineTwoGradient, {attr:{x1:-480, x2:-320}});
        t.set(CTAGradient, {attr:{x1:-480, x2:-320}});
        t.set(theSVG, {opacity:1});
        t.set(theSVG2, {opacity:1});

        t.to(icicle1, 5, {y: "+=25", scaleY: 1, ease: Sine.easeOut});
        t.to(icicle2, 5, {y: "+=25", scaleY: 1, ease: Sine.easeOut});

        pintl.from(pin, .25, {scale:"-=.2", opacity:0, ease: Sine.easeInOut}, "+=3.5")
            .to(pin, .25, {y:"+=10", ease: Sine.easeIn}, "+=.2")
            .to(pin, .25, {y:"-=5", ease: Sine.easeOut})
            .to(pin, .25, {y:"+=5", ease: Sine.easeIn})
            .to(pin, 1, {y: "-=5", ease: Sine.easeOut, onComplete: function () {tl1.play()}});

        tltxt.to(lineOneGradient, 4, {attr:{x1:1000, x2:1420}},"+=1")
            .to(lineTwoGradient, 4, {attr:{x1:1000, x2:1420}}, "-=.5")
            .to(CTAGradient, 4, {attr:{x1:1000, x2:1420}}, "-=3")
            .to(cta, .5, {opacity: 1})
            .to(theSVG2, .5, {opacity: 0}, "-=.5");


        tl1.to(pin, 1, {y: '+=5', ease: Sine.easeInOut})
            .to(pin, 1, {y: '-=5', ease: Sine.easeInOut});

        var total = 150;
        var container = document.getElementById("container"), w = window.innerWidth, h = window.innerHeight;

        for (var i = 0; i < total; i++) {
            var Div = document.createElement('div');
            t.set(Div, {
                attr: {class: 'dot'},
                x: R(-100, -200),
                y: R(-100, 400),
                scale: R(10, 100),
                opacity: R(.05, .075)
            });
            container.appendChild(Div);
            animm(Div);
        }

        function animm(elm) {
            t.to(elm, R(1, 3), {x: w - 50, ease: Linear.easeNone, repeat: -1, delay: -20});
            t.to(elm, R(2, 4), {y: '+=100', repeat: -1, yoyo: true, ease: Sine.easeInOut});
        }

        function R(min, max) {
            return min + Math.random() * (max - min)
        }




        var total2 = 150;
        var container2 = document.getElementById("container2"), w = window.innerWidth, h = window.innerHeight;

        for (var i2 = 0; i2 < total2; i2++) {
            var Div2 = document.createElement('div2');
            t.set(Div2, {
                attr: {class: 'dot'},
                x: R(-100, -200),
                y: R(0, 400),
                // scale: R(10, 100),
                opacity: R(.25, 1)
            });
            container2.appendChild(Div2);
            animm2(Div2);
        }

        function animm2(elm2) {
            t.to(elm2, R(1, 3), {x: w - 50, ease: Linear.easeNone, repeat: -1, delay: -20});
            t.to(elm2, R(2, 4), {y: '+=100', repeat: -1, yoyo: true, ease: Sine.easeInOut});
        }

        function R(min, max) {
            return min + Math.random() * (max - min)
        }





    }

    // --------------------------------------------------------------------------------------
    // Stops the animation
    function stop() {
        console.log("stopping animation");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize: initialize,
        start: start,
        stop: stop
    }


})();
