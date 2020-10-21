# Lotte-Is-Horse
롭스의 소비자-점주 연결 서비스

1. 재고확인(온라인/오프라인)
2. 실시간 주문  *1시간 내 배달
3. 회원관리
4. 오프라인 매장 연결   *지도 API 이용
   
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
#### 설치한 pip
```bash
pip install django
```

#### html 기본 형식
```html
{% extends 'base.html' %}
{% load static %}

{% block title %}{% endblock %}

<!-- User CSS -->
{% block css %}{% endblock %}

<!-- Main Content -->
{% block content %}

{% endblock %}

<!-- User JS -->
{% block js %}{% endblock %}
```

#### requirement 생성 및 설치
```bash
pip freeze > requirements.txt
pip install -r requirements.txt
```

#### 명령어 모음
가상환경 실행: `. myvenv/Scripts/activate`

static 파일 모으기: `python manage.py collectstatic`