# 모델 목록
## User(유저)
##### isSeller : Boolean
true면 판매자(지점장) -> Store에 연결

---
##### Store(지점)
##### name : Char
지점 이름(검색해서 나오는 결과)

---
##### Product(제품)
##### name : Char
제품 이름
##### brand : Char
브랜드 이름
##### price : Integer
제품 가격
##### image : Image
상품 사진

---

##### Sell(판매하다)
##### store : Store
지점 연결
##### product : Product
제품 연결
##### count : Integer
제품 개수

---