# Lotte-Is-Horse
롭스의 소비자-점주 연결 서비스

1. 재고확인(온라인/오프라인)
2. 실시간 주문  *1시간 내 배달
3. 회원관리
4. 오프라인 매장 연결   *지도 API 이용

[기획파일참고](./design.md)
   
# :fire:개발규칙:fire:
## 컨벤션 :triangular_ruler:

* **시작은 소문자 구분은 대문자로**

  * **ex)** takePicture

* **함수**: 동사

  * **ex)** changeUserData

* **변수**: 명사

  * **ex)** userData

* **Class:** 대문자로 시작

  * **ex)** User

* **CSS:** 태그-기능1-기능2-번호

  * **ex)** btn-cancle-01

* **JS:** const (변수, 함수) > let (중간에 값이 변하는 변수) > var (x)

* **주석:** HTML(최상단), JS, VIEWS

* **Commit:** 기능, 세부설명

  1. 로그인 페이지 작성

  2. 유저 모델 작성

  3. Template 생성: login.html, model.py

* **app 이름:** appMain

## 스크럼 :speaker:
* **날짜 / 시간** :alarm_clock:
  * **화:** 개발 시작 회의
  * **수:** 개발 계획 보고
  * **일:** 개발 결과 보고
  * **회의 시간: **30분~1시간

* **내용** :page_with_curl:
  * 금 주의 목표
  * 문제 피드백
  * 개발에 대한 논의
  * 협업을 위한 참조 (서로의 코드를)
  * 질의응답 (문제가 생기지 않도록 주기적으로 할 것!)
  * **코드리뷰(정기적으로 반드시 할 것!!)**
  
# 개발시 참고사항
#### App 종류
###### appMain
- main.html, detail.html 존재
###### appUser
- login.html, signup.html 존재
###### model
- 모델을 구현하기 위한 앱
- api 구현

#### Model 종류
[model](doc/model.md)

#### API 관리 방법
방법1: 관리자 아이디로 로그인하여 /api/ 주소로 들어가기
방법2: REST 통신 보내기 (Rest Client 확장프로그램 추천)
[초기 데이터 모음](dataInitialization/data.rest)

#### 설치한 pip
```bash
pip install django
pip install Pillow
pip install djangorestframework
pip install requests
pip install django-filter
```

#### requirement 생성 및 설치
```bash
pip freeze > requirements.txt
pip install -r requirements.txt
```

#### html 기본 형식
```html
{% extends 'base.html' %}
{% load static %}

<!-- Title -->
{% block title %}{% endblock %}

<!-- User CSS -->
{% block css %}{% endblock %}

<!-- Main Content -->
{% block content %}

{% endblock %}

<!-- User JS -->
{% block js %}{% endblock %}
```

#### 데이터베이스 초기화
```bash
find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
find . -path "*/migrations/*.pyc"  -delete
```
`db.sqlite3` 삭제

#### 데이터베이스 생성
```bash
python manage.py makemigrations
python manage.py migrate
```

#### 명령어 모음
가상환경 실행: `. myvenv/Scripts/activate`

static 파일 모으기: `python manage.py collectstatic`

app 만들기: `python manage.py startapp (앱이름)`

관리자 만들기: `python manage.py createsuperuser`

관리자 편하게 만들기: `python manage.py createsuperuser --email admin@example.com --username admin`

#### 만든 계정 종류(아이디/비번)
superuser: admin/admin, 
user: user1/user1, 