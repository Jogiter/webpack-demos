require('es5-shim');
var css = require('../sass/index.scss');

// require('../bower_components/jquery/jquery.js');
var a = require('../component/a/a.js');
console.log(a, a.msg);
// a.sayHi();


// var test = require('imports-loader?$=../bower_components/jquery/jquery!./test.js');
var test = require('./jQplugin.js');
$('p').test();

$('.container p').css('color', 'yellow');

function makeVerifyCode(length) {
    length = length || 4;

    function getStr(length) {
        return Math.random().toString(32).slice(0 - length);
    }

    function drawPic(str) {
        console.log(str)
        var canvas = document.getElementById('verifyCode');
        if (canvas.getContext) {
            var context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
            drawBg(context, function() {
                for (var i = 0, length = str.length; i < length; i++) {
                    draw(context, str, i);
                }
                context.stroke();

                // 绘制结果图片
                var imgData = context.getImageData(0, 0, 100, 50);
                console.log(imgData)
                // var img = new Image()

                // img.crossOrigin = "Anonymous";
                // img.src = imgData
                // img.onload = function() {
                //     console.log('done')
                // }
                // document.body.appendChild(img)
            });
        } else {
            document.body.innerHTML = 'Sorry! your browser do not support canvas, please update to the lastest version.';
            return;
        }

        function drawBg(ctx, callback) {
            ctx.beginPath();
            // 绘制背景
            // ctx.fillStyle = '#000';
            // ctx.fillRect(0, 0, 100, 100);
            var img = new Image(); // HTML5 构造器
            img.crossOrigin = "Anonymous";
            img.src = '../img/face.png';
            img.style.display = 'none'
            document.body.appendChild(img)
            img.onload = function() {
                console.log(1);
                ctx.drawImage(img, 0, 0);
                ctx.save();

                callback();
            }
        }

        function draw(ctx, str, i) {


            ctx.fillStyle = 'red';

            Math.random();
            var setting = 20;
            ctx.font = setting + "px serif";
            ctx.setTransform(1,0,Math.random(),1,0,0);
            console.log(str.slice(i, i + 1), setting * i, setting)
            ctx.fillText(str.slice(i, i + 1), setting * i, setting);
            ctx.setTransform(1,0,0,1,0,0);
            ctx.restore();
        }
    }

    var str = getStr(length);
    drawPic(str);
}

makeVerifyCode();


$('#verifyCode').on('click', function(e) {
    makeVerifyCode();
});

