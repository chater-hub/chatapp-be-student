* git bash 설정 
  $ git config --global user.name "chater"
  $ git config --global user.email "watchdogkr@gmail.com"
  $ git config --list


1. 백엔드 세팅 : 데이터베이스 세팅, 웹소켓 세팅
2. 프론트엔드 세팅 : 웹소켓 세팅
3. 백엔드 프론트엔드 연결 테스트
4. 유저 로그인
5. 메시지 주고 받기

1. npm install -y : package.json 생성
2. npm i express,(mongoose, mysql),cors, dotenv, http
    express : DB용 서버
    mysql : 
    cors : 프론트엔드 와 백엔드의 연결
    dotenv : 환경 변수 가져옴
    http : 웹소켓 용 서버
3. npm i socket.io
4. Models 폴더 생성 user.js 파일 생성
5. userSchema 생성 (데이터 설계도)
   token (소켓 아이디 저장)
   online 사용자가 online offline인지 구분
6. chat.js 생성
7. ./app.js 생성   
8. 환경변수 파일 .env 생성
9. app.js에 환경 읽어오기
10. 백엔드 접근 권한을 풀어주기 위한 cors 사용
11. node index.js
12. npm install nodemon (파일에 변환이 생기면 Reloading)

