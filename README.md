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
