
const searchEl = document.querySelector('.search'); //document자체가 html이다.
const searchInputEl = searchEl.querySelector('input');//searchEl

//searchEl 클릭할 경우
searchEl.addEventListener('click', function () {
    searchInputEl.focus();
})

//해당 셀렉트가 포커스 될 경우
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');//해당 태그에 클래스 추가
    searchInputEl.setAttribute('placeholder', '통합검색'); //해당 태그에 속성 추가.
});

//해당 셀렉트가 포커스 해제 될 경우
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');//해당 태그에 클래스 제거
    searchInputEl.setAttribute('placeholder', ''); //해당 태그에 속성 추가.
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
//화면 전체의 스트롤 이벤트를 추가한다.
window.addEventListener('scroll', _.throttle(function () {

    if (window.scrollY > 500) { //스크롤의 크기에 따라
        //gsap.to(요소, 지속시간, 옵션);
        //배지 숨기기
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display : 'none'
        });
        //버튼 보이기
        gsap.to(toTopEl, .2 ,{
            x: 0
        });
    } else {
        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display : 'block'
        });
        //버튼 숨기기
        gsap.to(toTopEl, .2 ,{
            x: 100
        });
    }

}, 300));
// _.throttle(함수, 시간)


toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo : 0
  });  
});

//querySelectorAll을 통해 .visual .fade-in 클래스 태그의 정보를 다 가진다.
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index ) {//fadeEls의 요소 개수만큼 반복한다.
    
    gsap.to(fadeEl, 1, {
        delay: (index+1)*.7, // 0.7, 1.4, 2.1, 2.7 초뒤에 각각 투명도가 나타단다.
        opacity: 1
    });
});


//슬라이드 new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween : 10, //슬라이드 사이 여백
    centeredSlides :true, //1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination : {
        el : '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어
    },
    navigation : {
        prevEl: '.promotion .swiper-prev', //이전버튼
        nextEl: '.promotion .swiper-next'  //이후버튼
    }
});

new Swiper('.awards .swiper-container', {
    autoplay:true,
    loop:true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation : {
        prevEl: '.awards .swiper-prev', //이전버튼
        nextEl: '.awards .swiper-next'  //이후버튼
    }
});

//토글
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //보이고있다.
promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion;
    if (isHidePromotion) {//true
        //숨김처리
        promotionEl.classList.add('hide');
    } else {//false
        //보임
        promotionEl.classList.remove('hide');
    }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

// floating
function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션)
    gsap.to(
        selector, //선택자
        random(1.5, 2.5), //애니메이션 동작 시간
        {//옵션
            y: size,
            repeat: -1, //무한 반복
            yoyo: true, //애니메이션 역재생
            ease: Power1.easeInOut,
            delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


//scrollmagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
    new ScrollMagic
       .Scene({
            triggerElement: spyEl, //보여짐 여부를 감시할 요소를 
            triggerHook: .8 //트리거의 시작 위치
       })
       .setClassToggle(spyEl, 'show')
       .addTo(new ScrollMagic.Controller());
});

//연도 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();


