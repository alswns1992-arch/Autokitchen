# KTA auto kitchen — Website Template

세련된 대기업 느낌의 단일 페이지 템플릿입니다. **YouTube 링크만 수정**하면 메인 데모와 성공사례가 자동 반영되고, **제품 목록은 JSON**으로 관리합니다.

## 사용법 (로컬 미리보기)

1. 이 폴더를 웹 서버로 열어주세요. (예: VSCode Live Server, 또는 `python -m http.server`)
2. `data/videos.json`의 `main`과 `caseStudies`의 URL을 **여러분의 유튜브 링크로 교체**하세요.
3. `data/products.json`에서 제품 2–3개만 남기고 내용/이미지 경로를 수정하세요.
4. `assets/product-placeholder.svg`를 실제 제품 이미지로 교체하세요.
5. `index.html`의 회사 정보/메타데이터를 수정하세요.

## 파일 개요

- **index.html** — 레이아웃/섹션 구조
- **css/styles.css** — 톤앤매너(다크 코퍼레이트), 반응형, 접근성 고려
- **js/app.js** — `videos.json`/`products.json` 로드, YouTube 썸네일-클릭 후 임베드
- **data/videos.json** — 메인/사례 유튜브 링크만 바꾸면 UI 자동 반영
- **data/products.json** — 제품 카드 정보(이름/설명/포인트/이미지/뱃지)
- **assets/logo.svg** — 심플 로고
- **assets/product-placeholder.svg** — 이미지 플레이스홀더

## YouTube 링크 형식
- 지원: `https://youtu.be/VIDEO_ID`, `https://www.youtube.com/watch?v=VIDEO_ID`, `https://www.youtube.com/embed/VIDEO_ID`
- 메인 히어로 영상은 **썸네일**로 먼저 보여주고 클릭 시 **가벼운 임베드**로 재생됩니다.

## 문의(데모)
- 하단 폼은 데모용이며 **콘솔에만 기록**됩니다. 실제 전송 로직은 `KTA.handleContact`를 교체해 이메일/백엔드 API 연동을 추가하세요.

---

© 2025 KTA auto kitchen
