# ПЛАН: блок «Возможности» на лендинге Zelscan — по референсу summation.com

> Полная постановка для нового чата. Прочитай целиком перед работой.
> Проект: лендинг Zelscan (OSINT-досье по публичной активности юзеров Lolzteam), тёмная премиум-тема.
> Референс снят с живого DOM https://www.summation.com/ (блок «The Summation Platform») — все числа ниже реальные, сайт открывать не нужно.

---

## 1. АНАТОМИЯ РЕФЕРЕНСА (реальный DOM, Framer)

**Структура:**
```
[Заголовок секции: «The Summation Platform» — 30px, weight 300, ls -1.2px, по центру]
[ОБЛОЛОЧКА #F7F7F7, radius 16px, padding ≈24px, занимает всю ширину контейнера]
 ├─ LEFT (колонка ~500px)
 │   ├─ LIST — 5 аккордеон-пунктов, вертикально, зазор ~10px
 │   │    каждый пункт:
 │   │    · СВЁРНУТЫЙ («Collapsed»): белый #FFF, radius 29px, padding 16px 24px;
 │   │      слева заголовок (цвет #0B0B0B), справа круглая кнопка 32×32 #F4F4F4
 │   │      с плюсом 16×16 (#0B0B0B), позиционируется absolute справа;
 │   │      внутри есть скрытый (opacity 0) блок с текстом описания — он нужен для анимации высоты
 │   │    · РАЗВЁРНУТЫЙ («Expanded»): тот же белый, radius 20px (меньше!), виден абзац
 │   │      описания (#969696), кнопка-плюс скрыта (opacity 0), высота вырастает до ~190px
 │   └─ CTA: чёрная пилюля #0B0B0B, radius 100px, h 42px, padding 8px 20px,
 │      текст «Explore the product» белый; стоит под списком слева, margin-top ~20px
 └─ RIGHT (колонка ~680px, height 700px)
     └─ 5 изображений, АБСОЛЮТНО позиционированы друг на друге, каждое 680×700,
        radius 16px; переключение — кроссфейд opacity (активная 1, остальные 0),
        активная синхронна с пунктом аккордеона
```

**Поведение:** пункты переключаются автоматически каждые ~4с; при переключении: старый пункт схлопывается (высота→57px, плюс появляется), новый раскрывается (высота→~190px, плюс скрывается, текст описания проявляется), справа картинка кроссфейдится. Клик/тап по пункту — ручное переключение (и сброс таймера). Пункты фокусируемы с клавиатуры (tabindex).

**Нюанс референса:** угловые засечки (corner ticks) и подпись с замком «Governed access» на рефе ЗАПЕЧАТЛЕНЫ В САМИХ КАРТИНКАХ (в DOM их нет). Мы делаем их CSS-оверлеем — так рамка останется, когда позже вставим свои фото.

---

## 2. ЧТО УДАЛИТЬ ИЗ ЛЕНДОСА (мусор от прошлой итерации)

Файл `lendos/index.html`. Три фрагмента (мои старые «4 варианта», признаны плохими):

1. **HTML.** Комментарий `<!-- ═══ ... НОВЫЙ БЛОК — 4 визуальных варианта между Block 3 и отзывами...` → удалить всё от него до (не включая) `<!-- ═══ BLOCK 4 — REVIEWS ═══ -->`. Внутри четыре `<section class="sx" data-sx>`.
2. **CSS.** В `<head>` инлайновый `<style>`, начинающийся с `/* STORY BLOCK — 4 визуальных варианта ...` → удалить весь тег `<style>…</style>` (стоит сразу после `<link href="css/responsive.css?v=26">`).
3. **JS.** Инлайновый `<script>` перед `</body>`, начинающийся с `/* ─── STORY BLOCKS: reveal, живой скан...` → удалить весь тег.

Проверка: `grep -c "sx-" lendos/index.html` → **0**.
Файлы `lendos/css/blocks-extra.css` и `lendos/js/blocks-extra.js` нигде не подключены (остатки ещё более старых zx-блоков) → удалить физически.

## 3. КУДА ВСТАВИТЬ НОВЫЙ БЛОК

Одно место: сразу после закрывающего `</section>` секции `b3-outer` (последний комментарий внутри — `</div><!-- /b3-cards -->`) и ПЕРЕД `<!-- ═══ BLOCK 4 — REVIEWS ═══ -->`.

---

## 4. СТИЛЬ ПРОЕКТА (обязательные правила)

- Фон страницы `#020202`. Секции: `margin-top:var(--section-gap)` (=120px, мобайл 72px), боковые `padding:0 var(--pad-x)` (=13px). Контейнер `max-width:1331px; margin:0 auto`.
- **Никаких border/обводок** — разделение только заливками поверх фона.
- Акцент `#30C991` (зелёный), ошибки `#EF4444`. Зелёный — только акцентом.
- Заголовки — `'SuisseIntl'` (`--font-suisse`, @font-face уже подключён в index.html), текст — Inter (`--font-inter`).
- Крупный заголовок секции = копия `.b4-h2`: `font-weight:700; font-size:72px; line-height:85%; letter-spacing:-0.065em; color:#fff; transform:rotate(-0.29deg); text-align:center;` строки — `<span style display:block>`, вторую строку можно приглушить `rgba(255,255,255,0.35)`. На 1024px → `clamp(48px,6.3vw,68px)`, на 768px → `clamp(38px,10.5vw,48px)` (как в responsive.css).
- Кнопка-пилюля как `.btn-try` (css/block2.css): белая, `color:#0B0B0D`, radius ~100px, h 44–52px, weight 600.
- Переменные из `css/base.css`: `--section-gap`, `--pad-x`, `--font-suisse`, `--font-inter`, `--ease-soft`.
- Брейкпоинты проекта: 1024 и 768 (плюс 1280 в responsive.css).

## 5. ПЕРЕВОД ЦВЕТОВ РЕФ → НАША ТЁМНАЯ ТЕМА

| Референс (светлый) | Наш вариант (тёмный) |
|---|---|
| Оболочка #F7F7F7, r16 | `#0A0A0B`, radius 20px, padding 24px |
| Пилюля белая #FFF, r29, padding 16×24 | `rgba(255,255,255,0.05)`, radius 29px, padding 16px 24px |
| Развёрнутая #FFF, r20 | `rgba(255,255,255,0.085)` (ярче пилюли = активная), radius 20px |
| Заголовок пункта #0B0B0B | `#FFFFFF`, 17px/600, Suisse |
| Описание #969696 | `rgba(255,255,255,0.45)`, 15px/22px, Inter |
| Круг с плюсом #F4F4F4, 32×32, плюс #0B0B0B | круг `rgba(255,255,255,0.08)`, 32×32, плюс `#fff` (SVG 16×16) |
| CTA чёрная #0B0B0B, r100, h42 | БЕЛАЯ пилюля (стиль .btn-try): `#fff`, текст `#0B0B0D`, r100, h46, padding 8px 22px |
| Картинки 680×700, r16, кроссфейд | пустышки `rgba(255,255,255,0.03)`, r16, кроссфейд + рамка-оверлей (см. п.6) |

## 6. КОНТЕНТ (наши тексты)

Заголовок секции (72px, стиль b4-h2, 2 строки):
```
Что умеет
Zelscan        ← приглушить rgba(255,255,255,0.35)
```
Подзаголовок: `Собирает досье по публичной активности на Lolzteam — и объясняет каждый вывод.` (15px, rgba(255,255,255,0.55), по центру, над оболочкой, margin-bottom 56px)

5 пунктов аккордеона (заголовок + описание):

1. **Сотни параметров** — Конфликтность, токсичность, пики активности, круг общения, тональность постов. По каждой цифре — короткое объяснение, откуда она взялась.
3. **Психопрофиль** — Большая пятёрка и тёмная триада по модели OCEAN. Формулировки осторожные: это интерпретация текстов, а не диагноз.
3. **Красные флаги** — Детектор рисков перед сделкой: конфликты, агрессия, шаблоны обмана. Видно то, что в переписке за пару минут не разглядеть.
4. **Проверяемость** — Каждый вывод в отчёте ведёт на конкретное сообщение или ветку форума. Ничего «на глаз» и ничего без источника.

CTA: `Проверить профиль` → `https://app.zelscan.xyz/app?oauth_start=1`.

Подписи под кадром (внизу картинки, с иконкой замка 13px, `rgba(255,255,255,0.45)`, 12.5px) — синхронны с активным пунктом:
1. «Каждая цифра — с объяснением» 2. «Без диагнозов» 3. «Флаги и риски» 4. «Ссылка на каждый вывод»

**Правый кадр (ВАЖНО):** пока пустышки — квадратные панели `rgba(255,255,255,0.03)` (позже заказчик вставит реальные скриншоты проекта как `<img>`). Поверх каждой — CSS-оверлей «фокус-кадра»: 4 угловые Г-засечки (22×22, 1.5px, `rgba(255,255,255,0.25)`, выступают за углы) + внизу подпись с замком. Архитектура: замена пустышки на картинку не должна требовать правок CSS/JS.

## 7. ФАЙЛЫ

Создать:
- `lendos/css/story-block.css` — все стили, префикс классов `zw-`
- `lendos/js/story-block.js` — логика, vanilla IIFE

Подключить в `lendos/index.html`:
- `<link href="css/story-block.css?v=1" rel="stylesheet">` — после `responsive.css` в `<head>`
- `<script src="js/story-block.js" defer></script>` — с остальными скриптами перед `</body>`

## 8. HTML-СКЕЛЕТ (готовый к копированию)

```html
<!-- ═══ STORY BLOCK — возможности (реф: summation.com, план: PLAN-new-block.md) ═══ -->
<section class="zw">
  <div class="zw-head">
    <h2 class="zw-h2"><span class="zw-h2-ln">Что умеет</span><span class="zw-h2-ln dim">Zelscan</span></h2>
    <p class="zw-sub">Собирает досье по публичной активности на Lolzteam — и объясняет каждый вывод.</p>
  </div>

  <div class="zw-shell">
    <div class="zw-left">
      <div class="zw-list">
        <article class="zw-item is-on">                      <!-- is-on = развёрнут -->
          <button class="zw-btn" type="button" aria-expanded="true">
            <span class="zw-title">Живой скан профиля</span>
            <span class="zw-plus" aria-hidden="true">
              <svg viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
            </span>
          </button>
          <div class="zw-body"><p>Воркер читает только публичные страницы lolz.team: посты, репутацию, отзывы и статистику активности. Полная история аккаунта собирается за 10–30 секунд.</p></div>
        </article>
        <!-- ещё 4 пункта тем же шаблоном, БЕЗ класса is-on, aria-expanded="false" -->
      </div>
      <a class="zw-cta" href="https://app.zelscan.xyz/app?oauth_start=1">Проверить профиль</a>
    </div>

    <div class="zw-right" aria-hidden="true">
      <figure class="zw-shot is-on"><div class="zw-shot-ph"></div></figure>  <!-- ×5; .zw-shot-ph — пустышка, позже сюда <img class="zw-shot-img"> -->
      <span class="zw-tick tl"></span><span class="zw-tick tr"></span>
      <span class="zw-tick bl"></span><span class="zw-tick br"></span>
      <figcaption class="zw-cap">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="2"/></svg>
        <span data-zw-cap>Только публичные данные</span>
      </figcaption>
    </div>
  </div>
</section>
```

## 9. CSS (ключевые правила — дословно)

```css
.zw{margin-top:var(--section-gap);padding:0 var(--pad-x);}
.zw-head{display:flex;flex-direction:column;align-items:center;gap:24px;margin-bottom:56px;}
.zw-h2{font-weight:700;font-size:72px;line-height:85%;text-align:center;letter-spacing:-0.065em;color:#fff;transform:rotate(-0.29deg);margin:0;}
.zw-h2-ln{display:block;}
.zw-h2-ln.dim{color:rgba(255,255,255,0.35);}
.zw-sub{font-size:15px;font-weight:500;line-height:22px;color:rgba(255,255,255,0.55);text-align:center;max-width:520px;}

.zw-shell{max-width:1331px;margin:0 auto;background:#0A0A0B;border-radius:20px;padding:24px;
  display:grid;grid-template-columns:500px 1fr;gap:24px;align-items:stretch;}

/* левая колонка */
.zw-left{display:flex;flex-direction:column;min-width:0;}
.zw-list{display:flex;flex-direction:column;gap:10px;flex:1;}
.zw-item{background:rgba(255,255,255,0.05);border-radius:29px;overflow:hidden;
  transition:background .4s,border-radius .4s;}
.zw-item.is-on{background:rgba(255,255,255,0.085);border-radius:20px;}
.zw-btn{display:flex;align-items:center;width:100%;background:none;border:0;cursor:pointer;
  padding:16px 64px 16px 24px;text-align:left;position:relative;}
.zw-title{font-family:var(--font-suisse);font-size:17px;font-weight:600;letter-spacing:-0.02em;color:#fff;}
.zw-plus{position:absolute;right:12px;top:50%;transform:translateY(-50%);
  width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.08);
  display:flex;align-items:center;justify-content:center;color:#fff;
  transition:opacity .3s,transform .45s cubic-bezier(.2,0,0,1);}
.zw-plus svg{width:14px;height:14px;}
.zw-item.is-on .zw-plus{opacity:0;transform:translateY(-50%) rotate(45deg);}   /* плюс «превращается» в × и гаснет */
.zw-body{max-height:0;opacity:0;overflow:hidden;padding:0 24px;
  transition:max-height .55s cubic-bezier(.2,0,0,1),opacity .4s ease,padding .45s;}
.zw-item.is-on .zw-body{max-height:200px;opacity:1;padding:0 24px 20px;}
.zw-body p{font-size:15px;line-height:22px;color:rgba(255,255,255,0.45);}

.zw-cta{align-self:flex-start;margin-top:20px;display:inline-flex;align-items:center;
  height:46px;padding:0 22px;border-radius:100px;background:#fff;color:#0B0B0D;
  font-size:14px;font-weight:600;text-decoration:none;transition:transform .25s;}
.zw-cta:hover{transform:translateY(-2px);}

/* правая колонка */
.zw-right{position:relative;min-height:640px;border-radius:16px;overflow:hidden;}
.zw-shot{position:absolute;inset:0;margin:0;opacity:0;transform:scale(.985);
  transition:opacity .65s ease,transform .8s cubic-bezier(.2,0,0,1);}
.zw-shot.is-on{opacity:1;transform:scale(1);}
.zw-shot-ph{position:absolute;inset:0;border-radius:16px;background:rgba(255,255,255,0.03);}
.zw-shot-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:16px;display:none;}

/* угловые засечки */
.zw-tick{position:absolute;width:22px;height:22px;pointer-events:none;}
.zw-tick::before,.zw-tick::after{content:'';position:absolute;background:rgba(255,255,255,0.25);}
.zw-tick::before{width:100%;height:1.5px;top:0;left:0;}
.zw-tick::after{width:1.5px;height:100%;top:0;left:0;}
.zw-tick.tl{top:18px;left:18px;}
.zw-tick.tr{top:18px;right:18px;transform:scaleX(-1);}
.zw-tick.bl{bottom:18px;left:18px;transform:scaleY(-1);}
.zw-tick.br{bottom:18px;right:18px;transform:scale(-1);}

.zw-cap{position:absolute;left:50%;bottom:26px;transform:translateX(-50%);
  display:flex;align-items:center;gap:8px;font-size:12.5px;color:rgba(255,255,255,0.5);
  white-space:nowrap;transition:opacity .25s;}

/* адаптив */
@media(max-width:1024px){
  .zw-h2{font-size:clamp(48px,6.3vw,68px);}
  .zw-shell{grid-template-columns:1fr;}
  .zw-right{min-height:420px;order:-1;}
}
@media(max-width:768px){
  .zw{margin-top:72px;padding:0 14px;}
  .zw-head{margin-bottom:36px;}
  .zw-h2{font-size:clamp(38px,10.5vw,48px);}
  .zw-shell{padding:14px;border-radius:16px;}
  .zw-right{min-height:340px;}
  .zw-btn{padding:14px 56px 14px 20px;}
  .zw-cap{bottom:14px;font-size:11px;}
}
```

## 10. JS (`js/story-block.js`)

```js
(function(){
  'use strict';
  var section=document.querySelector('.zw');
  if(!section)return;
  var items=[].slice.call(section.querySelectorAll('.zw-item'));
  var shots=[].slice.call(section.querySelectorAll('.zw-shot'));
  var cap=section.querySelector('[data-zw-cap]');
  var captions=['Каждая цифра — с объяснением','Без диагнозов','Флаги и риски','Ссылка на каждый вывод'];
  var reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cur=0,timer=null,DELAY=4200;

  function set(i){
    cur=i;
    items.forEach(function(it,k){it.classList.toggle('is-on',k===i);
      var b=it.querySelector('.zw-btn');if(b)b.setAttribute('aria-expanded',k===i?'true':'false');});
    shots.forEach(function(s,k){s.classList.toggle('is-on',k===i);});
    if(cap){
      cap.style.opacity='0';
      setTimeout(function(){cap.textContent=captions[i]||'';cap.style.opacity='1';},180);
    }
  }
  function play(){if(reduced)return;stop();timer=setInterval(function(){set((cur+1)%items.length);},DELAY);}
  function stop(){if(timer){clearInterval(timer);timer=null;}}

  items.forEach(function(it,k){
    it.querySelector('.zw-btn').addEventListener('click',function(){set(k);play();});
  });
  var shell=section.querySelector('.zw-shell');
  shell.addEventListener('mouseenter',stop);
  shell.addEventListener('mouseleave',play);
  shell.addEventListener('focusin',stop);
  shell.addEventListener('focusout',play);
  set(0);play();
})();
```

## 11. КРИТЕРИИ ПРИЁМКИ

- Блок между `b3-outer` и отзывами; `grep -c "sx-" index.html` → 0; `blocks-extra.css/js` удалены.
- Оболочка #0A0A0B на всю ширину контейнера, внутри слева список+CTA, справа кадр 640–700px высотой.
- Активный пункт раскрыт (текст виден, плюс скрыт, radius 20), остальные — пилюли с плюсом (radius 29). Автосмена каждые 4.2с, кроссфейд картинки, подпись синхронна. Пауза при наведении/фокусе. Клик — переключение.
- В стилях НИ ОДНОГО `border` — только заливки.
- Правые кадры — пустышки `rgba(255,255,255,0.03)` с засечками и подписью; вставка `<img class="zw-shot-img">` внутрь `.zw-shot` (и `display:block` в css) подключит фото без правок JS.
- Заголовок 72px Suisse с наклоном −0.29deg; CTA — белая пилюля на app.zelscan.xyz.
- 1440 / 1024 / 390px — без горизонтального скролла; на мобиле кадр сверху, оболочка 16px.
- `prefers-reduced-motion` — автосмена отключена.

## 12. ПОЛЕЗНЫЕ ФАКТЫ

- Глобальный reveal `[data-reveal]` уже есть (инлайновый скрипт внизу index.html) — можно вешать на `.zw` или не использовать.
- Изображения для будущих кадров: `images/b3-card-bg-1..3.webp`, скриншоты отчёта из Block 3, `images/darkk.webp`.
- Шрифты SuisseIntl подключены в инлайновом `<style>` `<head>` (lendos/fonts/*.otf).
- `.btn-try` (css/block2.css:24) — референс стиля кнопки.
