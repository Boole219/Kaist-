$(document).ready(function () {
    $("#menu").slicknav();

    $("#menu>li").mouseenter(function () {
        $("#menu>li>ul, .bg").stop().slideDown(); //부드럽게 펼쳐줌
    });
    $("#menu>li").mouseleave(function () {
        $("#menu>li>ul, .bg").stop().slideUp(); //슬라이드되며숨겨짐
    });

});

// ========== logo, btnTop 클릭시 최상단 이동 ===============
$(function () {
    $(".logo, .btnTop").on("click", () => {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 400); //0.4초
    });

    // =========== 스크롤 500px 이상 내릴때 btnTop 나타남 ================
    $(window).scroll(() => {
        if ($(this).scrollTop() > 500) {
            $(".btnTop").fadeIn();
        } else {
            $(".btnTop").fadeOut();
        }
    });

    // ============= 메인 비디오 인트로 메뉴에서 각 섹션별로 이동 ===============
    $(".company").on("click", () => {
        $("html,body").stop().animate({
            scrollTop: 950
        }, 'slow');
    });
    $(".gf").on("click", () => {
        $("html,body").stop().animate({
            scrollTop: 2010
        }, 'slow');
    });
    $(".srm").on("click", () => {
        $("html,body").stop().animate({
            scrollTop: 3080
        }, 'slow');
    });
    $(".news").on("click", () => {
        $("html,body").stop().animate({
            scrollTop: 4170
        }, 'slow');
    });

    // =========== 메인 타이틀 5초후 페이드아웃 ===========
    $(".video_title").fadeToggle(5000);


    // =========== 회사소개 아코디언 =============
    let options = $(".boxs .option");
    let currentIndex = 0;


    $(".boxs .option:not(.active) .explain").css({
        display: 'none'
    });


    // 각 .option 버튼에 클릭 이벤트 추가
    options.on("click", function () {
        let option = $(this);

        if (option.hasClass("active")) {
            // 이미 열려있는 경우 닫기 
            option.removeClass("active");
            option.find(".explain").fadeOut(100); // 0.1초 동안 페이드아웃
        } else {
            // 열려있지 않은 경우 열기 
            // 모든 옵션요소의 클래스 제거
            options.removeClass("active");
            // 클릭한 옵션 요소에 클래스 추가
            option.addClass("active");

            // 선택된 옵션의 내용만 보이도록 설정
            $(".explain").removeClass("active"); // 내용 제거
            option.find(".explain").addClass("active");

            // 다른 .option 요소의 .explain을 페이드아웃
            $(".boxs .option .explain").fadeOut(300); // 0.1초 동안 페이드아웃

            // 선택한 옵션의 .explain을 페이드인
            option.find(".explain").fadeIn(300); // 0.1초 동안 페이드인
        }
    });
});



// =================== 계열사 사이트 함수 ====================

function Site() {
    let sites = {
        "PulmuoneNJ": "https://greenjuice.pulmuone.com/",
        "PulmuoneFood": "https://pulstory.pulmuone.com/",
        "PulmuoneFC": "https://www.pulmuonefnc.com/main/main_contents.do",
        "PulmuoneDN": "https://www.danonepulmuone.co.kr/",
        "PulmuoneSM": "https://www.pulmuonewater.com/",
        "Pulmuone Foods USA": "https://www.pulmuonefoodsusa.com/",
        "PulmuoneHealth": "https://www.pulmuone-lohas.com/pc/brand/index.do",
        "PulmuoneJapan": "https://www.asahico.co.jp/",
        "PulmuoneChina": "https://www.pumeiduo.com/intro/index.php"
    };
    let selectedSite = sites[$("#familySites").val()];

    if (selectedSite) {
        window.open(selectedSite, "_blank");
    }
}