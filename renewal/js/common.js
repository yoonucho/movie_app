// 스크롤 내릴때 gnb메뉴 active
$(window).on("load scroll", function() {
  loadingImg();
  scrollTop();
});

$(document).ready(function() {
  aLink();
  menuOpen();
  btnClick();
  // btnClose();
  tab();
  btnTop();
});

// 로딩 이미지
// 이건 보류
function loadingImg() {
  var timer = setTimeout(
    function() {
      $("#loading").fadeOut(800);
      clearTimeout(timer);
    },
    1,
    000
  );
}

// function loadingImg() {
// 	var timer = setTimeout(function () {
// 	$("#loading").fadeOut(800);
// 	clearTimeout(timer);
// 	}, 1,000);
// }

// 스크롤 내릴때 gnb메뉴 active
function scrollTop() {
  $("#contents .row > section").each(function() {
    if ($(window).scrollTop() >= $(this).offset().top - 200) {
      // $(this).fadeIn(2,000);
      var id = $(this).attr("id");
      $("#gnb li a")
        .parent()
        .removeClass("active");
      $("#gnb li a[href=#" + id + "]")
        .parent()
        .addClass("active");
    }
  });
}

// 앵커 클릭할때 스크롤 부드럽게
function aLink() {
  $("#gnb li a").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      500
    );
    $(this)
      .parent()
      .addClass("active")
      .siblings()
      .removeClass("active");
    return false;
  });
}

// 헤더 모바일  gnb메뉴 클릭이벤트

function handleClick() {
  // 코드 수정 여기부터
  $("i", this).toggleClass("fa-times fa-bars ");
  if ($(".header.mobile").hasClass("active")) {
    $(".header.mobile").removeClass("active");
  } else {
    $(".header.mobile").addClass("active");
  }
}

function menuOpen() {
  var gnb = document.querySelector("#gnb");
  var gnbBtn = gnb.querySelector(".gnb_btn");
  gnbBtn.addEventListener("click", handleClick);
}

// portfolio 탭
function tab() {
  var cats = $(".cats");

  $(".tab_list li").on("click", function() {
    var customType = $(this).data("filter");
    cats.hide();
    $(".tab_list li").removeClass("active");
    cats
      .filter(function() {
        return $(this).data("cat") === customType;
      })
      .show();
    $(this).addClass("active");
  });

  $(".tab_list li.all").on("click", function() {
    cats.show();
  });
}

// snippet 버튼 클릭시 모달창 열림, 닫힘
function btnClick() {
  $(".btn_click").on("click", function() {
    $(this)
      .addClass("active")
      .next()
      .css({ display: "block" });
  });

  $(".btn_close").on("click", function() {
    $(this)
      .parents(".modal")
      .fadeOut(50);
  });
}

/* 맨위로 가기 */
function btnTop() {
  $(".btn_top").on("click", function() {
    $("body,html").animate({ scrollTop: 0 }, 400);
    return false;
  });
}
