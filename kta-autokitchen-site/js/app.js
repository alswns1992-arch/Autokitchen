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
