# :pushpin: 솥지마요

> 도시락 주문시스템 개발 | [구현 영상](https://youtu.be/Nz-s6Ob5FhU)

</br>

## 1. 제작 기간 & 참여 인원

- 2022년 03월 28일 ~ 04월 08일
- 팀 프로젝트(프론트 4명 백엔드 2명)

</br>

## 2. 사용 기술

`Front-end`

- React 17
- SASS
- React Router v6

</br>

## 3. 내가 맡았던 기능 구현

제가 이 프로젝트에서 맡은 페이지는 로그인 & 회원가입 페이지입니다.  
중점으로 생각했던 부분은, **회원가입시 사용자가 접할 오류를 최소화**하려고 노력했습니다.

- 중복확인버튼 클릭하지 않을 시 alert창으로 안내메세지 전달
- `비밀번호`와 `비밀번호확인` 같지 않을 시 alert창으로 안내메세지 전달
- 회원가입 input 하나라도 빈 값일 시 `가입하기` 비활성화

<br>

<details>
    <summary>회원가입 기능구현 영상 (토글)</summary>

![1차 프로젝트 회원가입](https://user-images.githubusercontent.com/56650238/171227748-cfd712c3-8c27-4e08-a8ca-03e49bf8ea0f.gif)

</details>

- 회원가입 API 통신 :pushpin: [코드확인](https://github.com/Geuni620/31-1st-Dont-SOT-frontend/blob/8dba029c6817b5eb12164b7e9ed78f7d0698a248/src/pages/Join/Join.js#L82)
- 객체 Mapping으로 메시지 분기처리 :pushpin: [코드확인](https://github.com/Geuni620/31-1st-Dont-SOT-frontend/blob/8dba029c6817b5eb12164b7e9ed78f7d0698a248/src/pages/Join/Join.js#L29)
- 조건부 렌더링을 통해 회원가입 페이지 실시간 유효성 검사 :pushpin: [코드확인](https://github.com/Geuni620/31-1st-Dont-SOT-frontend/blob/8dba029c6817b5eb12164b7e9ed78f7d0698a248/src/pages/Join/Form/Form.js#L29)

<br>
<details>
    <summary>로그인 기능구현 영상 (토글) </summary>

![1차 프로젝트 로그인](https://user-images.githubusercontent.com/56650238/171227713-c6a70b65-48c3-4784-8a8b-7b005741fbb0.gif)

</details>

- JWT와 로컬스토리지를 이용한 로그인 기능 구현 :pushpin: [코드확인](https://github.com/Geuni620/31-1st-Dont-SOT-frontend/blob/8dba029c6817b5eb12164b7e9ed78f7d0698a248/src/pages/Login/Login.js#L31)

<br>

## 4. 트러블 슈팅

> 프로젝트를 진행하며 문제해결했던 사항

<details>
<summary>불필요한 state 삭제 & 로직 오류 발견 및 수정</summary>

<br>
    
* 백엔드 분기처리시 error 메세지가 뜰 경우 가입하기 버튼의 disabled이 true였다가 success메세지가 뜨면 false가 되도록 변경

- disabled가 true라면 버튼을 누를 수 조차없고, 백엔드와 통신 자체가 불가능.
- onClick event를 만들어서 구현하려 했으나, 버튼이 disabled일 경우 event를 읽지 못함.
- 결국 삭제, 버튼의 disabled는 모든 input값이 빈 값이 아니라면 false가 되도록만 구현

</details>

<details>
<summary>서버의 IP 주소관리 번거로움</summary>

- 백엔드 IP 주소 변경시 모든 페이지 IP주소 일일이 변경해야하는 번거로움
- config.js파일로 API주소 관리

config.js

```JS
const BASE_URL = 'http://10.58.3.250:8000';

const API = {
Login: `${BASE_URL}/users/signin`,
Join: `${BASE_URL}/users/signup`,
JoinId: `${BASE_URL}/users/signup/idcheck`,
};

export default API;

```

<br>

</details>

<details>
<summary>메세지 분기처리 시 `KEY ERROR` 발견</summary>

- 백엔드 팀원과 소통을 통해 하나라도 input 값이 비어있을 시 KEY ERROR 메세지가 뜬다는 사실을 알게 됨.  
  → 모든 값이 빈 값이면 button 비활성화로 대체

</details>

<details>
<summary>useState 변수 키워드 let에서 const로 변경</summary>

- 컴포넌트 함수가 실행되면서 매번 새로운 const 변수가 실행됨.
- const로 선언함으로 state를 직접 수정 방지할 수 있음.

✓ [참고자료](https://dudghsx.tistory.com/18)

</details>

<details>
<summary>부모 width height 고정으로 준 값 깨짐 현상 발견</summary>

- 부모 width height 고정으로 준 값 모두 삭제
- 자식요소에 필요한 경우 width height 고정으로 변경
- css `calc()` 적용

</details>
