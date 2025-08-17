[index.html](https://github.com/user-attachments/files/21820152/index.html)
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>KTA auto kitchen — Automated Cooking Equipment</title>
  <meta name="description" content="KTA auto kitchen — 자동화 조리기기. 인건비 절감과 일관된 품질을 위한 세련된 솔루션." />
  <meta name="theme-color" content="#0f172a" />
  <!-- Open Graph -->
  <meta property="og:title" content="KTA auto kitchen — Automated Cooking Equipment" />
  <meta property="og:description" content="인건비 절감과 품질 향상을 한 번에. KTA auto kitchen의 자동화 조리 솔루션." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="assets/logo.svg" />
  <link rel="icon" href="assets/logo.svg" type="image/svg+xml" />
  <link rel="preload" href="css/styles.css" as="style" />
  <link rel="stylesheet" href="css/styles.css" />
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KTA auto kitchen",
    "url": "https://example.com",
    "logo": "https://example.com/assets/logo.svg",
    "brand": "KTA auto kitchen",
    "sameAs": []
  }
  </script>
</head>
<body>
  <header class="site-header container">
    <a href="#" class="brand">
      <img src="assets/logo.svg" alt="KTA auto kitchen 로고" width="40" height="40" />
      <span class="brand__name">KTA auto kitchen</span>
    </a>
    <nav class="nav">
      <a href="#video">Demo</a>
      <a href="#products">Products</a>
      <a href="#why-us">Why KTA</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <!-- Hero -->
    <section class="hero container">
      <div class="hero__copy">
        <h1>Automate Cooking.<br/><span class="text-subtle">Elevate Business.</span></h1>
        <p class="lead">
          호주 외식업 환경에 최적화된 자동화 조리기기. <br/>
          인건비를 줄이고, 맛은 표준화하고, 운영은 단순화합니다.
        </p>
        <div class="hero__cta">
          <a class="btn btn--primary" href="#products">제품 보기</a>
          <a class="btn" href="#contact">도입 상담</a>
        </div>
        <ul class="hero__badges" aria-label="신뢰 포인트">
          <li>기업용 품질</li>
          <li>간편 유지보수</li>
          <li>AGA 표준 준수 준비</li>
        </ul>
      </div>
      <div class="hero__media" id="video">
        <!-- YouTube: loads from data/videos.json -->
        <div id="video-hero" class="yt-lite" data-title="KTA Demo" aria-label="제품 데모 동영상"></div>
        <noscript>
          <p>동영상을 보려면 자바스크립트를 활성화하세요.</p>
        </noscript>
      </div>
    </section>

    <!-- Case Study Carousel -->
    <section class="cases container" aria-labelledby="cases-title">
      <div class="section-head">
        <h2 id="cases-title">성공 사례</h2>
        <p class="sub">실제 매장에서 검증된 퍼포먼스. 링크만 추가하면 자동 반영됩니다.</p>
      </div>
      <div class="cases__grid" id="case-grid" role="list"></div>
    </section>

    <!-- Products -->
    <section id="products" class="products container" aria-labelledby="products-title">
      <div class="section-head">
        <h2 id="products-title">제품 라인업</h2>
        <p class="sub">초기에는 핵심 2–3개 제품으로 심플하게 시작하세요. 필요 시 확장도 쉽습니다.</p>
      </div>
      <div class="product-grid" id="product-grid" role="list"></div>
    </section>

    <!-- Why Us -->
    <section id="why-us" class="why container">
      <div class="section-head">
        <h2>왜 KTA auto kitchen 인가요?</h2>
      </div>
      <div class="why__grid">
        <article>
          <h3>호주 외식업에 맞춘 설계</h3>
          <p>고온·다량 조리에 강한 구조로 설계되어, 한식/아시안/버거숍 등 다양한 매장에 적용 가능합니다.</p>
        </article>
        <article>
          <h3>인건비 절감</h3>
          <p>자동화로 반복 작업을 줄여 숙련도 의존도를 낮추고, 운영을 표준화합니다.</p>
        </article>
        <article>
          <h3>신뢰 가능한 서비스</h3>
          <p>간편한 설치/유지보수 가이드를 제공하며, 부품/AS도 계획적으로 지원합니다.</p>
        </article>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="contact container" aria-labelledby="contact-title">
      <div class="section-head">
        <h2 id="contact-title">도입 상담</h2>
        <p class="sub">문의 남겨주시면 1–2 영업일 내 연락드립니다.</p>
      </div>
      <form class="contact__form" name="contact" onsubmit="return KTA.handleContact(event)">
        <label>
          회사/매장명
          <input type="text" name="company" required placeholder="예) KTA Korean BBQ" />
        </label>
        <label>
          담당자 이름
          <input type="text" name="name" required />
        </label>
        <label>
          연락처 (이메일 또는 전화)
          <input type="text" name="contact" required />
        </label>
        <label>
          관심 제품
          <select name="product">
            <option value="">선택하세요</option>
          </select>
        </label>
        <label>
          메시지
          <textarea name="message" rows="4" placeholder="매장 형태, 좌석 수, 조리 메뉴 등을 알려주세요."></textarea>
        </label>
        <button class="btn btn--primary" type="submit">문의 보내기</button>
        <p class="form-note">제출 시 로컬에서만 테스트용으로 콘솔에 출력됩니다.</p>
      </form>
    </section>
  </main>

  <footer class="site-footer container">
    <p>© <span id="year"></span> KTA auto kitchen · All rights reserved.</p>
    <p class="small">※ 일부 제품은 AGA/RCM 등 인증 진행 중일 수 있습니다. 판매/설치 시 호주 규정 준수.</p>
  </footer>

  <script defer src="js/app.js"></script>
</body>
</html>
[styles.css](https://github.com/user-attachments/files/21820156/styles.css)
[Uploading styles.css…]()
/* KTA auto kitchen — minimal, corporate, responsive */
:root{
  --bg: #0b1220;
  --card: #0f172a;
  --ink: #e5e7eb;
  --muted: #9aa4b2;
  --pri: #60a5fa;
  --acc: #22d3ee;
  --radius: 14px;
  --ring: 2px solid rgba(96,165,250,.45);
  --container: 1100px;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Apple SD Gothic Neo, Malgun Gothic, Arial, Helvetica, sans-serif;
  background: linear-gradient(180deg,#0a0f1c 0%, #0c1324 50%, #0f172a 100%);
  color: var(--ink);
  line-height:1.6;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
img{max-width:100%;display:block}
.container{width:100%;max-width:var(--container);margin-inline:auto;padding: clamp(16px,3vw,28px)}
.site-header{
  display:flex;align-items:center;justify-content:space-between;
  position:sticky;top:0;backdrop-filter: blur(8px);
  background: color-mix(in oklab, var(--card) 80%, transparent);
  border-bottom: 1px solid rgba(255,255,255,.06);
  z-index:50;
}
.brand{display:flex;align-items:center;gap:12px;text-decoration:none;color:inherit}
.brand__name{font-weight:700;letter-spacing:.3px}
.nav{display:flex;gap:18px}
.nav a{color:var(--ink);text-decoration:none;opacity:.85}
.nav a:hover{opacity:1}
.hero{display:grid;grid-template-columns:1.05fr .95fr;gap:28px;align-items:center}
@media (max-width:900px){.hero{grid-template-columns:1fr;gap:18px}}
.hero__copy h1{font-size:clamp(28px,4.6vw,48px);line-height:1.15;margin:0 0 8px}
.text-subtle{font-weight:500;color:var(--muted)}
.lead{color:var(--ink);opacity:.9;margin:.5rem 0 1rem}
.hero__cta{display:flex;gap:12px;margin:10px 0 8px}
.btn{
  appearance:none;border:none;background:#212a43;color:#fff;
  padding:10px 16px;border-radius:calc(var(--radius) - 6px);
  text-decoration:none;display:inline-flex;gap:8px;align-items:center;
  box-shadow: 0 0 0 1px rgba(255,255,255,.06) inset;
}
.btn:hover{transform: translateY(-1px)}
.btn:focus{outline: var(--ring)}
.btn--primary{background:linear-gradient(90deg,var(--pri), var(--acc)); color:#020617}
.hero__badges{display:flex;flex-wrap:wrap;gap:10px;margin:14px 0 0;padding:0;list-style:none}
.hero__badges li{
  font-size:13px;color:var(--ink);opacity:.85;border:1px solid rgba(255,255,255,.1);
  padding:6px 10px;border-radius:999px;background:rgba(255,255,255,.03)
}
.hero__media{border-radius:var(--radius);overflow:hidden;border:1px solid rgba(255,255,255,.08)}

.section-head{margin:30px 0 10px}
.section-head h2{margin:0 0 4px;font-size:clamp(22px,3.4vw,32px)}
.section-head .sub{color:var(--muted);margin:0}

.cases__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
@media (max-width:900px){.cases__grid{grid-template-columns:1fr 1fr}}
@media (max-width:640px){.cases__grid{grid-template-columns:1fr}}
.case-card{
  border:1px solid rgba(255,255,255,.08);border-radius:12px;overflow:hidden;
  background: var(--card);
}
.case-card__thumb{position:relative;aspect-ratio:16/9;display:block}
.case-card__thumb .play{
  position:absolute;inset:0;margin:auto;width:60px;height:60px;border-radius:999px;
  background: rgba(0,0,0,.45);display:grid;place-items:center;
  backdrop-filter: blur(2px);
}
.case-card__thumb .play:after{
  content:"";width:0;height:0;border-left:14px solid white;border-top:9px solid transparent;border-bottom:9px solid transparent;margin-left:4px
}
.case-card__body{padding:12px}
.case-card__title{margin:0 0 2px;font-size:15px}
.case-card__meta{margin:0;color:var(--muted);font-size:12px}

.products .product-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
@media (max-width:1000px){.products .product-grid{grid-template-columns:1fr 1fr}}
@media (max-width:640px){.products .product-grid{grid-template-columns:1fr}}
.product-card{
  background: var(--card); border:1px solid rgba(255,255,255,.08);
  border-radius: 14px; overflow:hidden; display:flex; flex-direction:column; min-height:100%;
}
.product-card__media{aspect-ratio:4/3;display:grid;place-items:center;padding:10px;background:rgba(255,255,255,.02)}
.product-card__body{padding:16px;display:flex;flex-direction:column;gap:10px}
.product-card h3{margin:0;font-size:18px}
.product-card p{margin:0;color:var(--muted)}
.product-card ul{margin:8px 0 0;padding-left:18px}
.product-card .cta{margin-top:auto;display:flex;gap:10px}
.badge{font-size:12px;border:1px solid rgba(255,255,255,.16);border-radius:999px;padding:4px 8px;color:#d1fae5;background:rgba(16,185,129,.12)}

.why__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
@media (max-width:900px){.why__grid{grid-template-columns:1fr 1fr}}
@media (max-width:640px){.why__grid{grid-template-columns:1fr}}
.why__grid article{
  background: var(--card);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px
}

.contact__form{
  background: var(--card);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px;display:grid;gap:12px;
  max-width:720px
}
.contact__form label{display:grid;gap:6px}
.contact__form input, .contact__form textarea, .contact__form select{
  background:#0b1220;border:1px solid rgba(255,255,255,.14);color:var(--ink);padding:10px;border-radius:8px
}
.contact__form input:focus, .contact__form textarea:focus, .contact__form select:focus{outline: var(--ring)}
.form-note{color:var(--muted);font-size:12px;margin:0}

.site-footer{color:var(--muted);border-top:1px solid rgba(255,255,255,.06);text-align:center}
.small{font-size:12px}

/* Lite YouTube style */
.yt-lite{position:relative;background:#0b1220}
.yt-lite::before{content:""; display:block; padding-top:56.25%}
.yt-lite > .lty-playbtn{
  width:68px; height:48px; position:absolute; cursor:pointer; top:50%; left:50%; transform:translate(-50%,-50%);
  border:0; border-radius:14px; background:rgba(0,0,0,.45);
}
.yt-lite > .lty-playbtn:before{
  content:""; display:block; width:0; height:0; margin: auto; border-left:22px solid #fff; border-top:12px solid transparent; border-bottom:12px solid transparent;
  transform: translateX(3px);
}
.y[app.js](https://github.com/user-attachments/files/21820158/app.js)
t-lite iframe{position:absolute; inset:0; width:100%; height:100%; border:0}


[Uploading app.js…]()
/* KTA auto kitchen — JS */
const KTA = (() => {
  const $ = (sel, el=document) => el.querySelector(sel);
  const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));

  // Utils
  const youtubeID = (url) => {
    // Supports youtu.be and youtube.com formats
    const re = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/;
    const m = String(url||"").match(re);
    return m ? m[1] : null;
  };

  const createLiteYT = (container, id, title="YouTube video") => {
    if (!container || !id) return;
    container.classList.add("yt-lite");
    // Poster as background
    container.style.background = `#0b1220 url(https://img.youtube.com/vi/${id}/hqdefault.jpg) center/cover no-repeat`;
    const btn = document.createElement("button");
    btn.className = "lty-playbtn";
    btn.setAttribute("aria-label", "Play video");
    container.appendChild(btn);
    btn.addEventListener("click", () => {
      container.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }, { once: true });
  };

  const renderCases = (list=[]) => {
    const wrap = $("#case-grid");
    if (!wrap) return;
    wrap.innerHTML = "";
    list.forEach(v => {
      const id = youtubeID(v.url);
      const thumb = id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "assets/product-placeholder.svg";
      const card = document.createElement("article");
      card.className = "case-card";
      card.setAttribute("role","listitem");
      card.innerHTML = `
        <a class="case-card__thumb" href="${v.url}" target="_blank" rel="noopener">
          <img src="${thumb}" alt="${v.title||'Case study'}" loading="lazy" />
          <span class="play" aria-hidden="true"></span>
        </a>
        <div class="case-card__body">
          <h3 class="case-card__title">${v.title||"Case study"}</h3>
          <p class="case-card__meta">${v.meta||""}</p>
        </div>
      `;
      wrap.appendChild(card);
    });
  };

  const renderProducts = (list=[]) => {
    const wrap = $("#product-grid");
    if (!wrap) return;
    wrap.innerHTML = "";
    // Fill contact select
    const select = document.querySelector('select[name="product"]');
    if (select) {
      const opt0 = document.createElement("option");
      opt0.value = "";
      opt0.textContent = "선택하세요";
      select.innerHTML = "";
      select.appendChild(opt0);
    }

    list.forEach(p => {
      const card = document.createElement("article");
      card.className = "product-card";
      card.setAttribute("role","listitem");
      const img = p.image || "assets/product-placeholder.svg";
      const bullets = (p.bullets||[]).map(t => `<li>${t}</li>`).join("");
      const badge = p.badge ? `<span class="badge">${p.badge}</span>` : "";
      card.innerHTML = `
        <div class="product-card__media">
          <img src="${img}" alt="${p.name}" loading="lazy" />
        </div>
        <div class="product-card__body">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
            <h3>${p.name}</h3>
            ${badge}
          </div>
          <p>${p.tagline||""}</p>
          <ul>${bullets}</ul>
          <div class="cta">
            <a class="btn btn--primary" href="#contact" data-sku="${p.sku}">상담 문의</a>
            <a class="btn" href="#" aria-disabled="true" title="가격은 문의 시 안내">가격: POA</a>
          </div>
        </div>
      `;
      wrap.appendChild(card);

      if (select) {
        const opt = document.createElement("option");
        opt.value = p.sku;
        opt.textContent = `${p.name} (${p.sku})`;
        select.appendChild(opt);
      }
    });

    // prefill product field when CTA clicked
    wrap.addEventListener("click", (e) => {
      const a = e.target.closest("a[data-sku]");
      if (!a) return;
      const sku = a.getAttribute("data-sku");
      const select = document.querySelector('select[name="product"]');
      if (select && sku) select.value = sku;
    });
  };

  const handleContact = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log("[KTA CONTACT FORM] Submitted:", data);
    alert("문의가 전송되었습니다. (데모: 콘솔에 저장됨)");
    e.target.reset();
    return false;
  };

  const boot = async () => {
    // year
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();

    // videos
    try {
      const res = await fetch("data/videos.json");
      const vdata = await res.json();
      const hero = document.getElementById("video-hero");
      const mainId = youtubeID(vdata.main);
      createLiteYT(hero, mainId, "KTA auto kitchen Demo");
      renderCases(vdata.caseStudies||[]);
    } catch(e){
      console.warn("videos.json load error", e);
    }

    // products
    try {
      const res = await fetch("data/products.json");
      const pdata = await res.json();
      renderProducts(pdata);
    } catch(e){
      console.warn("products.json load error", e);
    }
  };

  return { boot, handleContact };
})();

window.KTA = KTA;
window.addEventListener("DOMContentLoaded", KTA.boot);
[products.json](https://github.com/user-attachments/files/21820159/products.json)
[videos.json](https://github.com/user-attachments/files/21820161/videos.json)

![logo](https://github.com/user-attachments/assets/f6d962df-1cbd-4b99-a04a-91477edbeb16)
![product-placeholder](https://github.com/user-attachments/assets/0c745b8f-7840-4cea-813c-40ea61653df0)
