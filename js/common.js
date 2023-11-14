
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

//연도 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();