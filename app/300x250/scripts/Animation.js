var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax({repeat: -1, paused: true});
    var tl2 = new TimelineMax({repeat: -1, paused: true});
    var tl3 = new TimelineMax({repeat: -1, paused: true});
    var tl4 = new TimelineMax({repeat: -1, paused: true});
    var tl5 = new TimelineMax({repeat: -1, paused: true});

    var pintl1 = new TimelineMax();
    var pintl2 = new TimelineMax();
    var pintl3 = new TimelineMax();
    var pintl4 = new TimelineMax();
    var pintl5 = new TimelineMax();

    var tltxt = new TimelineMax();

    var wiggletl = new TimelineMax({repeat: -1});

    var pin1 = document.getElementById('pin1');
    var pin2 = document.getElementById('pin2');
    var pin3 = document.getElementById('pin3');
    var pin4 = document.getElementById('pin4');

    var txt1 = document.getElementById('txt1');
    var txt2 = document.getElementById('txt2');
    var txt3 = document.getElementById('txt3');
    var txtbox = document.getElementById('txtbox');

    var icicle1 = document.getElementById('icicle1');
    var icicle2 = document.getElementById('icicle2');

    var cta = document.getElementById('cta');
    var cta_bg = document.getElementById('cta_bg');

    var buttonExit = document.getElementById('button-exit');

    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {


        t.set(banner, {opacity: 1});
        t.set("#container", {perspective: 600});
        t.set("#container2", {perspective: 600});
        t.set(pin1, {y: "-=10", transformOrigin: "50% 100%"});
        t.set(pin2, {y: "-=10", transformOrigin: "50% 100%"});
        t.set(pin3, {y: "-=10", transformOrigin: "50% 100%"});
        t.set(pin4, {y: "-=10", transformOrigin: "50% 100%"});
        t.set(pin5, {y: "-=10", transformOrigin: "50% 100%"});

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


        t.to(icicle1, 5, {y: "+=25", scaleY: 1, ease: Sine.easeOut});
        t.to(icicle2, 5, {y: "+=25", scaleY: 1, ease: Sine.easeOut});

        wiggletl.to(txt1, .5, {x: '+=10', rease: Sine.easeOut})
            .to(txt1, 3, {x: '-=10', rotation:0, ease: Sine.easeIn});

        var total = 50;
        var container = document.getElementById("container"), w = window.innerWidth, h = window.innerHeight;

        for (var i = 0; i < total; i++) {
            var Div = document.createElement('div');
            t.set(Div, {
                attr: {class: 'dot'},
                x: R(-100, -200),
                y: R(-100, 0),
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




        var total2 = 50;
        var container2 = document.getElementById("container2"), w = window.innerWidth, h = window.innerHeight;

        for (var i2 = 0; i2 < total2; i2++) {
            var Div2 = document.createElement('div2');
            t.set(Div2, {
                attr: {class: 'dot'},
                x: R(-100, -200),
                y: R(0, 100),
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



        pintl1.from(pin1, .25, {scale: "-=.2", opacity: 0, ease: Sine.easeInOut}, "+=3.5")
            .to(pin1, .25, {y: "+=10", ease: Sine.easeIn}, "+=.2")
            .to(pin1, .25, {y: "-=5", ease: Sine.easeOut})
            .to(pin1, .25, {y: "+=5", ease: Sine.easeIn})
            .to(pin1, 1, {
                y: "-=5", ease: Sine.easeOut, onComplete: function () {
                    tl1.play()
                }
            });

        pintl2.from(pin2, .25, {scale: "-=.2", opacity: 0, ease: Sine.easeInOut}, "+=3.6")
            .to(pin2, .25, {y: "+=10", ease: Sine.easeIn}, "+=.2")
            .to(pin2, .25, {y: "-=5", ease: Sine.easeOut})
            .to(pin2, .25, {y: "+=5", ease: Sine.easeIn})
            .to(pin2, 1, {
                y: "-=5", ease: Sine.easeOut, onComplete: function () {
                    tl2.play()
                }
            });

        pintl3.from(pin3, .25, {scale: "-=.2", opacity: 0, ease: Sine.easeInOut}, "+=3.7")
            .to(pin3, .25, {y: "+=10", ease: Sine.easeIn}, "+=.2")
            .to(pin3, .25, {y: "-=5", ease: Sine.easeOut})
            .to(pin3, .25, {y: "+=5", ease: Sine.easeIn})
            .to(pin3, 1, {
                y: "-=5", ease: Sine.easeOut, onComplete: function () {
                    tl3.play()
                }
            });

        pintl4.from(pin4, .25, {scale: "-=.2", opacity: 0, ease: Sine.easeInOut}, "+=3.8")
            .to(pin4, .25, {y: "+=10", ease: Sine.easeIn}, "+=.2")
            .to(pin4, .25, {y: "-=5", ease: Sine.easeOut})
            .to(pin4, .25, {y: "+=5", ease: Sine.easeIn})
            .to(pin4, 1, {
                y: "-=5", ease: Sine.easeOut, onComplete: function () {
                    tl4.play()
                }
            });

        pintl5.from(pin5, .25, {scale: "-=.2", opacity: 0, ease: Sine.easeInOut}, "+=3.9")
            .to(pin5, .25, {y: "+=10", ease: Sine.easeIn}, "+=.2")
            .to(pin5, .25, {y: "-=5", ease: Sine.easeOut})
            .to(pin5, .25, {y: "+=5", ease: Sine.easeIn})
            .to(pin5, 1, {
                y: "-=5", ease: Sine.easeOut, onComplete: function () {
                    tl5.play()
                }
            });


        tltxt.to(txtbox, .25, {opacity: 1}, "+=.75")
            .fromTo(txtbox, .25, {y: "-=20"}, {y: "+=23", ease: Sine.easeOut}, "-=.25")
            .to(txtbox, .1, {y: "-=3", ease: Sine.easeInOut})

            .to(txt2, .25, {opacity: 1}, "+=1.25")
            .fromTo(txt2, .25, {y: "-=20"}, {y: "+=23", ease: Sine.easeOut}, "-=.25")
            .to(txt2, .1, {y: "-=3", ease: Sine.easeInOut})

            .to(txt3, .25, {opacity: 1}, "+=1")

            .to(cta, .25, {opacity: 1}, "+=.75")
            .fromTo(cta, .25, {y: "-=20"}, {y: "+=23", ease: Sine.easeOut}, "-=.25")
            .to(cta, .2, {y: "-=3", ease: Sine.easeInOut});


        tl1.to(pin1, 1, {y: '+=5', ease: Sine.easeInOut})
            .to(pin1, 1, {y: '-=5', ease: Sine.easeInOut});

        tl2.to(pin2, 1, {y: '+=5', ease: Sine.easeInOut})
            .to(pin2, 1, {y: '-=5', ease: Sine.easeInOut});

        tl3.to(pin3, 1, {y: '+=5', ease: Sine.easeInOut})
            .to(pin3, 1, {y: '-=5', ease: Sine.easeInOut});

        tl4.to(pin4, 1, {y: '+=5', ease: Sine.easeInOut})
            .to(pin4, 1, {y: '-=5', ease: Sine.easeInOut});

        tl5.to(pin5, 1, {y: '+=5', ease: Sine.easeInOut})
            .to(pin5, 1, {y: '-=5', ease: Sine.easeInOut});


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
