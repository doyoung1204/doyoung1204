# 👋 Backend Developer 남도영

사용자의 불편함을 기술로 해결하는 백엔드 개발자입니다.  
웹 서비스 개발부터 AI 모델 기반 예측 시스템까지 구현 경험이 있습니다.  
단순 기능 구현이 아닌, **문제 원인 분석과 구조 개선 중심 개발**을 지향합니다.

---

## 🧑‍💻 About Me

- 대구가톨릭대학교 재학
- 2024년 학생회장 (조직 운영 및 커뮤니케이션 경험)
- 백엔드 아키텍처 설계 및 DB 구조 설계 경험
- AI 모델을 API 형태로 서비스화 경험

---

## 🛠 Tech Stack

### Backend
- Python (Flask, FastAPI)
- Java (Spring Boot, eGovFramework)
- PHP

### Database
- PostgreSQL
- MariaDB
- MySQL

### AI / Data
- RandomForestClassifier
- XGBoost

### Infra / Tools
- Git / GitHub

---

# 📂 Projects

---

## 🛒 1. Flask 기반 쇼핑몰 서비스

### ✔ 주요 기능
- 회원가입 / 로그인 (세션 기반 인증)
- 장바구니 기능
- 결제 페이지 구현 (카드번호, 주소 DB 저장)
- MariaDB 연동

### ✔ 기술적 구현 포인트
- 사용자 인증 흐름 직접 설계
- 결제 정보 저장 시 DB 무결성 고려
- 구매 흐름을 하나의 트랜잭션처럼 구성

### ✔ 문제 해결 경험
- 구매 버튼 클릭 시 기존 창 이동 문제 발생  
  → JS 이벤트 흐름 분석 후 팝업 처리 로직 수정

🔗 GitHub: (링크)

---

## 🥗 2. 알레르기 성분 탐지 챗봇 (Ellie)

Frontend: SvelteKit  
Backend: FastAPI  
AI: ChatGPT API

### ✔ 주요 기능
- 식품 성분표 이미지 업로드
- 성분 OCR 분석
- 사용자 알레르기 필터링
- 맞춤 경고 메시지 제공

### ✔ 기술적 구현 포인트
- FastAPI 기반 비동기 처리
- 이미지 → 텍스트 → 성분 분석 파이프라인 구성
- 사용자 알레르기 DB 설계

### ✔ 문제 해결 경험
- OCR 결과 데이터 불일치 문제  
  → 후처리 로직 추가하여 성분 정규화

🔗 Frontend: (링크)  
🔗 Backend: (링크)

---

## 📊 3. 제조방법 기반 품질 예측 AI 시스템

### ✔ 사용 모델
- RandomForestClassifier
- XGBoost
- TabNet

### ✔ 구현 내용
- 직타 / 건식과립 분류 모델 학습
- XGBoost 기반 예측 결과 테이블 생성 API
- 모델을 REST API 형태로 서비스화

### ✔ 기술적 포인트
- 데이터 전처리 파이프라인 구성
- 모델 학습 → 저장 → 로딩 → 예측 API 구조 설계
- 실제 서비스 연동 고려한 구조 구현

---

## 💊 4. Pharmai 시스템 유지보수 및 기능 개선

운영 중인 Pharmai 서비스의 유지보수 및 기능 개선 작업을 수행하였습니다.

### ✔ 수행 업무
- 기존 레거시 코드 구조 분석
- DB 테이블 구조 파악 및 데이터 흐름 분석
- 추천인 코드 기능 신규 추가
- 중복 데이터 저장 문제 개선
- 기능 수정 및 로직 안정화

### ✔ 추천인 코드 기능 구현

- 회원가입 시 추천인 코드 입력 기능 추가
- DB 조회를 통한 코드 유효성 검증 로직 구현
- 잘못된 코드 입력 시 예외 처리
- 추천인-피추천인 관계 데이터 저장 처리

### ✔ 문제 해결 경험

- DB 테이블이 숫자 기반 구조로 되어 있어 데이터 추적이 어려움  
  → 로그 기반 실행 흐름 분석으로 문제 지점 파악

- prjct_id 중복 저장으로 데이터 무결성 문제 발생  
  → 기존 데이터 삭제 후 재삽입 방식으로 로직 개선

### ✔ 배운 점

- 운영 서비스에 기능을 추가할 때 기존 구조와 충돌을 최소화하는 설계가 중요함을 경험
- 단순 구현이 아닌, 기존 흐름을 이해한 뒤 확장하는 역량 강화

---

# 🔥 Technical Strength

- 단순 CRUD를 넘는 서비스 흐름 설계 경험
- DB 구조 설계 및 무결성 고려
- AI 모델을 실제 API 서비스로 연결한 경험
- 문제 발생 시 로그 기반 원인 분석 능력

---

# 📈 GitHub Stats

![GitHub stats](https://github-readme-stats.vercel.app/api?username=본인아이디)

---

# 📫 Contact

- Email: example@email.com
- GitHub: https://github.com/본인아이디
