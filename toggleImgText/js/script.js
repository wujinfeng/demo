$(function () {
    /*new Typed('.lushang', {
        strings: ['智享单车在路上<br/>请稍后: '],
        cursorChar: '',
        shuffle: false,
        typeSpeed: 100,
        startDelay: 1000,
        onComplete: function () {
            countDown(6);
        }
    });*/
    // 倒计时 5秒
    var countdownTimer = null;
    var countDown = function (num) {
        var countdown = num;
        countdownTimer = setInterval(function () {
            countdown = countdown - 1;
            if (countdown === -1) {
                clearInterval(countdownTimer);
                page1over();
            } else {
                $('#countdown').text(countdown);
            }
        }, 1000);
    };
    countDown(6);

    var myDom = function (select) {
        return document.querySelector(select);
    };

    $.fn.extend({
        animateCss: function (animationName, callback) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
                if (callback) {
                    callback();
                }
            });
            return this;
        }
    });

    var begin = function (cb) {
        var a = $('#fengimg')
        a.animateCss('bounceInUp', function () {
            a.animateCss('bounceOutUp', function () {
                a.hide();
                cb();
            });
        });
    };

    var toggleBgImg = function (className) {
        $('#page2 > .bg').addClass(className);
    };

    var second = function (cb) {
        var a = $('.p2_2016');
        a.animateCss('flip', function () {
            cb();
        });
    };
    var three = function (cb) {
        var a = $('.p2_2016');
        a.animateCss('flipOutY', function () {
            a.hide();
            cb();
        });
    };

    var desc1 = ['DIY炫屏<br>双面渲染<br>棱镜折射原理保护壳', '画面实时更新<br>DIY炫屏随意变换', 'IP67防水等级<br>一体化镁合金车轮', '192颗高亮LED<br>画面清晰<br>损坏自检'];
    var desc2 = ['BDS/GPS/GLONASS<br>三模定位<br>秒速获取精准位置', '精准锁定<br>寻车更便捷', '精确测算区域车辆<br>精准管控车辆投放', '实现人车匹配<br>寻则有其车<br>行则安其停'];
    var desc3 = ['高清音质<br>声音洪亮<br>辨识度高', '人性化语音交互带来<br>极致的骑行体验', '风格多样的<br>语音设计<br>迎合不同用户喜好', '不同景区<br>不同城市<br>定制语音内容'];
    var desc4 = ['远程开关锁<br>4.0智能锁系统', '实现车辆的<br>远程锁止<br>定时锁止功能', '远程控制平台为<br>精细化车辆管理<br>提供保障', '驶入禁行区前将语音提醒通过微刹进入锁车模式'];
    var desc5 = ['城市、景区都在选择<br>智享单车', '提供丰富的代理<br>加盟方案<br>结合核心场景<br>快速接入'];
    var desc6 = ['中华环境保护基金会<br>绿色出行专项基金'];

    var blackBgTime = 700;   // 背景黑色切换时间
    var transBgTime = 1600;  // 背景透明切换时间

    //文字特性
    var inoutStyle = function (select, instyle, outstyle, cb) {
        var a = $(select).show();
        a.animateCss(instyle, function () {
            a.animateCss(outstyle, function () {
                a.hide();
                cb();
            });
        });
    };
    //描述文字
    var miaoshuStyle = function (select, desc, instyle, outstyle, cb) {
        var a = $(select).show();
        new Typed(select, {
            strings: desc,
            cursorChar: '',
            shuffle: false,
            typeSpeed: 80,
            backSpeed: 10,
            backDelay: 1000,
            startDelay: 700,
            onComplete: function () {
                a.animateCss(outstyle, function () {
                    a.hide();
                    cb();
                });
            }
        });
    };

    var music = myDom('#music');
    var audio = myDom('#audio');
    var page1 = myDom('#page1');
    var page2 = myDom('#page2');
    var page3 = myDom('#page3');

    function ani2() {
        $('#page2').removeClass('bg-transparent bg-transparent8').addClass('bg-black');  //背景变黑色
        setTimeout(function () {
            toggleBgImg('bgnew2'); //切换背景图
            $('#page2').addClass('bg-transparent'); //背景透明
            setTimeout(function () {
                $('#page2').addClass('bg-transparent8'); //背景透明度
                inoutStyle('.merit2', 'flipInX', 'flipOutX', function () {
                    miaoshuStyle('.desc2', desc2, 'bounceInRight', 'bounceOutLeft', function () {
                        ani3();
                    });
                });
            }, transBgTime);
        }, blackBgTime);
    };

    function ani3() {
        $('#page2').removeClass('bg-transparent bg-transparent8').addClass('bg-black');  //背景变黑色
        setTimeout(function () {
            toggleBgImg('bgnew3'); //切换背景图
            $('#page2').addClass('bg-transparent'); //背景透明
            setTimeout(function () {
                $('#page2').addClass('bg-transparent8'); //背景透明度 0.7
                inoutStyle('.merit3', 'slideInLeft', 'slideOutRight', function () {
                    miaoshuStyle('.desc3', desc3, 'bounceInRight', 'bounceOutLeft', function () {
                        ani4();
                    });
                });
            }, transBgTime);
        }, blackBgTime);
    };

    function ani4() {
        $('#page2').removeClass('bg-transparent bg-transparent8').addClass('bg-black');  //背景变黑色
        setTimeout(function () {
            toggleBgImg('bgnew4'); //切换背景图
            $('#page2').addClass('bg-transparent'); //背景透明
            setTimeout(function () {
                $('#page2').addClass('bg-transparent8'); //背景透明度 0.7
                inoutStyle('.merit4', 'rollIn', 'rollOut', function () {
                    miaoshuStyle('.desc4', desc4, 'bounceInRight', 'bounceOutLeft', function () {
                        ani5();
                    });
                });
            }, transBgTime);
        }, blackBgTime);
    };

    function ani5() {
        $('#page2').removeClass('bg-transparent bg-transparent8').addClass('bg-black');  //背景变黑色
        setTimeout(function () {
            toggleBgImg('bgnew5'); //切换背景图
            $('#page2').addClass('bg-transparent'); //背景透明
            setTimeout(function () {
                $('#page2').addClass('bg-transparent8'); //背景透明度 0.7
                inoutStyle('.merit5', 'rubberBand', 'bounceOut', function () {
                    miaoshuStyle('.desc5', desc5, 'bounceInRight', 'bounceOutLeft', function () {
                        ani6();
                    });
                });
            }, transBgTime);
        }, blackBgTime);
    };

    function ani6() {
        $('#page2').removeClass('bg-transparent bg-transparent8').addClass('bg-black');  //背景变黑色
        setTimeout(function () {
            toggleBgImg('bgnew6'); //切换背景图
            $('#page2').addClass('bg-transparent'); //背景透明
            setTimeout(function () {
                $('#page2').addClass('bg-transparent8'); //背景透明度
                inoutStyle('.merit6', 'rotateIn', 'rotateOut', function () {
                    miaoshuStyle('.desc6', desc6, 'bounceInRight', 'bounceOutLeft', function () {
                        $('#page2').removeClass('bg-transparent bg-transparent8').addClass('bg-black');  //背景变黑色
                        page2.setAttribute('class', 'page fadeOut');
                        page3.setAttribute('class', 'page fadeIn');
                        setTimeout(function () {
                            $('.p3_title').animateCss('pulse', function () {
                            });
                        }, 1300);
                    });
                });
            }, transBgTime);
        }, blackBgTime);
    };

    function page1over() {
        page1.style.display = 'none';
        page2.style.display = 'block';
        page3.style.display = 'block';
        page3.style.top = '100%';

        begin(function () {
            second(function () {
                setTimeout(function () {
                    three(function () {
                        $('.p2_circle').hide();  // 圆圈隐藏
                        $('#page2').addClass('bg-black');  //背景变黑色
                        setTimeout(function () {  //免押金
                            toggleBgImg('bgnew0'); //切换背景图
                            $('#page2').addClass('bg-transparent');  //背景透明
                            setTimeout(function () {
                                $('#page2').addClass('bg-transparent8'); //背景透明度
                                inoutStyle('.merita', 'bounceInRight', 'bounceOutLeft', function () {
                                    $('#page2').removeClass('bg-transparent bg-transparent8').addClass('bg-black');  //背景变黑色
                                    setTimeout(function () {
                                        toggleBgImg('bgnew1'); //切换背景图
                                        $('#page2').addClass('bg-transparent'); // 背景透明
                                        setTimeout(function () {
                                            $('#page2').addClass('bg-transparent8'); // 背景透明度 0.8
                                            inoutStyle('.merit1', 'bounceInRight', 'bounceOutLeft', function () {
                                                miaoshuStyle('.desc1', desc1, 'bounceInRight', 'bounceOutLeft', function () {
                                                    ani2();
                                                });
                                            });
                                        }, transBgTime)
                                    }, blackBgTime);
                                });
                            }, transBgTime)
                        }, blackBgTime);
                    });
                }, 2500);
            });
        });
    };

    audio.addEventListener('ended', function () {
        music.setAttribute('class', '');
    });
    // click music
    music.addEventListener('touchstart', function (event) {
        if (audio.paused) {
            audio.play();
            this.setAttribute('class', 'play');
        } else {
            audio.pause();
            this.setAttribute('class', '');
        }
    }, false);

    //点击下载
    $('.p3_logo').click(function () {
        window.location.href = 'https://m.zxbike.net/app/index.html';
    });
});


