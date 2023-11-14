
# 오픈그래프

    웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

~~~html
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Starbucks" />
    <meta property="og:title" content="Starbucks Coffee Korea" />
    <meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
    <meta property="og:image" content="./images/starbucks_seo.jpg" />
    <meta property="og:url" content="https://starbucks.co.kr" />
~~~

* og:type: 페이지의 유형(E.g, website, video.movie)
* og:site_name: 속한 사이트의 이름
* og:title: 페이지의 이름(제목)
* og:description: 페이지의 간단한 설명
* og:image: 페이지의 대표 이미지 주소(URL)
* og:url: 페이지 주소(URL)



# 폰트 적용

    https://fonts.google.com/specimen/Nanum+Gothic?query=nanum

# Google Material Icons
    https://fonts.google.com/icons


# header

# BEM (HTML 클래스 속성의 작명법)

    underbar 입력하는 것은 부모 태그의 일부분
    하이픈 기호를 입력하는 것은 어떤 상태를 입력하는 것


# git

1. git init 현재 프로젝트에서 변경사항 추적(버전 관리) 시작
2. git config core.autocrlf input(맥북) true(윈도우) 개행문자 
   git config user.name 'jtl9479', 
   git config --global user.email 'fbdrkd327@naver.com' 
   깃 관련 글로벌 변수 지정
3. git config --global list
    글로벌 변수 확인
4. git status 깃 상태 확인
5. git add . 변경사항을 추적할 특정 파일을 지정 [수정완료한 소스 스테이지 소스에 올림]
6. git commit -m 메세지와 함께 버전을 생성 [깃 로컬 서버 저장]
7. git remote add origin https://github.com/jtl9479/starbucks.git
    origin이란 별칭으로 원격 저장소를 연결 [원격 서버의 저장소와 로컬 서버 연동]
8. git push origin main 
    origin이란 별칭의 원격 저장소로 버전 내역 전송[원격 서버 저장소 저장]

    

