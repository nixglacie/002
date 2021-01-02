// click on li to change background of div trough HTML style
(function () {
    document.querySelector("#sidebtn1").onclick = function () {
        sideBox.style.backgroundImage = "url('img/SideBox/img1.png'";
    };
    document.querySelector("#sidebtn2").onclick = function () {
        sideBox.style.backgroundImage = "url('img/SideBox/img2.png'";
    };
    document.querySelector("#sidebtn3").onclick = function () {
        sideBox.style.backgroundImage = "url('img/SideBox/img3.png'";
    };
    document.querySelector("#newsBtn1").onclick = function () {
        newsContainer.style.backgroundImage = "url('img/newsBgs/img1.png'";
        // maint showing
        var eggs = document.getElementsByClassName('maint');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'block'
        }
        // patch not showing
        var eggs = document.getElementsByClassName('patch');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'block'
        }
        // event not showing
        var eggs = document.getElementsByClassName('event');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'block'
        }
    };
    document.querySelector("#newsBtn2").onclick = function () {
        newsContainer.style.backgroundImage = "url('img/newsBgs/img2.png'";
        // maint showing
        var eggs = document.getElementsByClassName('maint');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'none'
        }
        // patch not showing
        var eggs = document.getElementsByClassName('patch');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'block'
        }
        // event not showing
        var eggs = document.getElementsByClassName('event');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'none'
        }
    };
    document.querySelector("#newsBtn3").onclick = function () {
        newsContainer.style.backgroundImage = "url('img/newsBgs/img3.png'";
        // maint showing
        var eggs = document.getElementsByClassName('maint');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'none'
        }
        // patch not showing
        var eggs = document.getElementsByClassName('patch');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'none'
        }
        // event not showing
        var eggs = document.getElementsByClassName('event');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'block'
        }
    };
    document.querySelector("#newsBtn4").onclick = function () {
        newsContainer.style.backgroundImage = "url('img/newsBgs/img4.png'";
        // maint showing
        var eggs = document.getElementsByClassName('maint');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'block'
        }
        // patch not showing
        var eggs = document.getElementsByClassName('patch');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'none'
        }
        // event not showing
        var eggs = document.getElementsByClassName('event');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'none'
        }
    };
    document.querySelector("#rankingBtn1").onclick = function () { // 1v1 showing
        var eggs = document.getElementsByClassName('1v1');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'block'
        }
        // 3v3 not showing
        var eggs = document.getElementsByClassName('3v3');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'none'
        }
        // 6v6 not showing
        var eggs = document.getElementsByClassName('6v6');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'none'
        }
    };
    document.querySelector("#rankingBtn2").onclick = function () { // 1v1 showing
        var eggs = document.getElementsByClassName('1v1');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'none'
        }
        // 3v3 not showing
        var eggs = document.getElementsByClassName('3v3');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'block'
        }
        // 6v6 not showing
        var eggs = document.getElementsByClassName('6v6');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'none'
        }
    };
    document.querySelector("#rankingBtn3").onclick = function () { // 1v1 showing
        var eggs = document.getElementsByClassName('1v1');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'none'
        }
        // 3v3 not showing
        var eggs = document.getElementsByClassName('3v3');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'none'
        }
        // 6v6 not showing
        var eggs = document.getElementsByClassName('6v6');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'block'
        }
    };

    document.querySelector("#moreInfoBtn1").onclick = function () { // SkillChanges showing
        moreInfo.style.backgroundImage = "url('img/moreInfoPics/img1.png'";
        var eggs = document.getElementsByClassName('skillChanges');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'block'
        }
        // pvpEvent not showing
        var eggs = document.getElementsByClassName('pvpEvent');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'block'
        }

        // media not showing
        var eggs = document.getElementsByClassName('media');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'block'
        }
    };

    document.querySelector("#moreInfoBtn2").onclick = function () { // SkillChanges showing
        moreInfo.style.backgroundImage = "url('img/moreInfoPics/img2.png'";
        var eggs = document.getElementsByClassName('skillChanges');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'block'
        }
        // pvpEvent not showing
        var eggs = document.getElementsByClassName('pvpEvent');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'none'
        }

        // media not showing
        var eggs = document.getElementsByClassName('media');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'none'
        }
    };

    document.querySelector("#moreInfoBtn3").onclick = function () { // SkillChanges showing
        moreInfo.style.backgroundImage = "url('img/moreInfoPics/img3.png'";
        var eggs = document.getElementsByClassName('skillChanges');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'none'
        }
        // pvpEvent not showing
        var eggs = document.getElementsByClassName('pvpEvent');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'block'
        }

        // media not showing
        var eggs = document.getElementsByClassName('media');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'none'
        }
    };

    document.querySelector("#moreInfoBtn4").onclick = function () { // SkillChanges showing
        moreInfo.style.backgroundImage = "url('img/moreInfoPics/img4.png'";
        var eggs = document.getElementsByClassName('skillChanges');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'none'
        }
        // pvpEvent not showing
        var eggs = document.getElementsByClassName('pvpEvent');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'none'
        }

        // media not showing
        var eggs = document.getElementsByClassName('media');
        for (var i = 0; i < eggs.length; i++) {
            eggs[i].style.display = 'block'
        }
    };


}());
// adding/removing class name from ul li
$(document).on('click', 'ul li', function () {
    $(this).addClass('active').siblings().removeClass('active')
});

// auto slider
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("sliderIMG");
    var dots = document.getElementsByClassName("para");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" pactive", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " pactive";
    setTimeout(showSlides, 10000); // Change image every 2 seconds
};

// Tabbed content
