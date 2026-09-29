# CONTEXT — Zelscan landing: мобильные фиксы (для нового чата)

> Читай целиком перед работой. Текущая цель: **пользователь присылает список багов мобильной версии лендинга — фиксим по одному**. После каждого фикса: поднять версию `?v=N` → commit → push → юзер проверяет на телефоне по Pages-ссылке.

---

## 1. Где что лежит

```
C:\Users\domas\Downloads\zelscan-landing-two-blocks\
├── lendos\                        ← РАБОЧАЯ ПАПКА (лендинг, git-репо, деплоится на Pages)
│   ├── index.html                 ← ВСЁ главное: инлайн-стили головы, разметка всех блоков, инлайн-скрипты
│   ├── css\                       ← base, hero, block2..block7, footer, responsive, story-block, brand-logo
│   ├── js\                        ← hero, card-anim, faq, reviews, b3, oauth-login, story-block, brand-logo
│   ├── images\                    ← webp/svg/png (см. §4)
│   ├── fonts\                     ← SuisseIntl Regular/Medium/SemiBold/Bold (.otf)
│   ├── zelscan-moderation-minimal\ ← страница «Инфа для модеров» (отдельный сайт, не лендинг)
│   ├── themes-ideas.html          ← (служебное) идеи тем блока
│   ├── scheme-variants.html       ← (служебное) схемы
│   ├── prompts-nano-banana.md     ← (служебное) промпты для генерации экранов
│   └── PLAN-new-block.md          ← план блока «Что умеет Zelscan» (устарел местами, блок уже готов)
│
└── zelscan-deploy\                ← ИСХОДНИКИ РЕАЛЬНОГО ПРОЕКТА (панель после авторизации)
    ├── landing\                   ← РЕАЛЬНЫЕ HTML-страницы интерфейса (референс №1!)
    │   ├── zelscan.html           ← отчёт: hero + tiles + tabs + mcard (Big Five, триада)
    │   ├── zelscan_psychology.html← тайлы психологии (кольца, весы, эго, спарклайн)
    │   ├── zelscan_activity.html / zelscan_behavior.html / zelscan_analysis.html
    │   ├── my_dossiers_static2.html ← карточки досье (.dc), список «Мои досье»
    │   ├── public_dossiers.html / transactions.html / меню-файлы menu-v7-*
    │   └── assets\css\pages\*.css ← РЕАЛЬНЫЕ стили: zelscan.css, zelscan_psychology.css,
    │                                zelscan_behavior.css, report-hero.css, zelscan_dashboard.css...
    ├── landing\assets\js\pages\*.js ← РЕАЛЬНЫЕ рендеры: zelscan_psychology.2.js (формулы колец,
    │                                весов, эго-точек, спарклайна), zelscan.1.js, zelscan_analysis.2.js
    ├── cache\results\*.json       ← РЕАЛЬНЫЕ данные отчётов: root_duck = 8d07cccb76.json
    └── app\templates + app\static ← ⚠ СТАРЫЙ ДИЗАЙН (LOLZ//DOSSIER) — НЕ брать оттуда ничего!
```

**Железное правило юзера:** интерфейсные элементы брать 1:1 из `zelscan-deploy/landing` (реальные HTML/CSS/JS), ничего не придумывать и не рисовать своё. Если нужен экран — искать его реальную страницу или реальный элемент + минимальная правка.

## 2. Запуск и деплой

- **Локально:** `cd lendos && python -m http.server 8419` → http://localhost:8419/index.html
- **Деплой (превью для проверки с телефона):** репо `jdankinloh-cloud/zelscan-landing-preview`, ветка `main` → GitHub Pages:
  **https://jdankinloh-cloud.github.io/zelscan-landing-preview/**
- Порядок деплоя: правки → **поднять `?v=N` у изменённых css/js в index.html** → `git add -A && git commit -m "..." && git push` → ждать ~1–2 мин.
- **Кеш:** Pages/Fastly держит старый файл до 10 мин. Спасение — новый `?v=N` (новый URL = свежий файл). Если и новый URL отдал старьё — просто подождать 1–2 мин.
- **Гит-креды:** `gh` CLI НЕ установлен. Токен лежит в git credential manager: `printf "protocol=https\nhost=github.com\n\n" | git credential fill` → работает и для push (HTTPS), и для GitHub API (создание репо, Pages). SSH-ключи битые — не использовать.
- Ошибка API «rate limit exceeded» = запрос без токена; добавить `-H "Authorization: token $TOKEN"`.

## 3. Мобильные баги — контекст и правила

- **GPU-правило:** на мобиле НЕЛЬЗЯ `filter: blur(>~40px)` на больших элементах — мобильный GPU выкидывает слой при скролле → элемент мигает/пропадает (Chrome devtools-эмуляция это НЕ воспроизводит, там десктопный GPU!). Замена: предразмытый `radial-gradient` (визуал тот же, фильтра нет).
- Уже переведено на градиенты на мобиле (в `css/responsive.css`, блок `@media (max-width:767px)`, помечено комментом «FIX GPU-мигание»):
  - `.b5-cards::before` — glow тарифов: вся высота карточек (`top:0;height:100%`), ширина 170%/max 780px, центр эллипса `at 50% 48%`, альфы 0.78→0.46→0.18→0 на 80%. Юзеру нравится.
  - `.b4-glow` — glow отзывов: на мобиле `display:none` (юзеру не нравится, на десктопе остался из макета).
  - `.heroblock-day-glow` — hero day-glow → градиент.
  - `.b3-screen .swr-aurora::before` → градиент.
- Остальные `backdrop-filter: blur(10–18px)` — мелкие элементы (поиск, FAQ, кнопки), обычно ок; если юзер принесёт баг — смотреть в эту сторону.
- Проверка мобилки: только через Pages-ссылку на реальном телефоне юзера. Локально на 390px можно смотреть раскладку (IAB), но GPU-баги так не ловятся.

## 4. Блок «Что умеет Zelscan» (новый, между b3 и отзывами)

- Классы `zw-*`. Файлы: `css/story-block.css`, `js/story-block.js`, HTML в index.html (комментарий `STORY BLOCK`).
- Структура: заголовок «Что умеет Zelscan» (одна строка, 100% белый, инлайн в голове? нет — в HTML) + shell-сетка 500px/1fr: слева аккордеон 4 пункта (Что читает сервис / О досье / Индекс доверия / Отчёт живёт по ссылке), справа чёрный кадр (#000) с фоном `images/bg.webp` (засветы) и PNG-иллюстрацией.
- 4 кадра: `shema.webp` → `about.webp` → `index-doveria.webp` → `link.webp`. **Все иллюстрации собраны в единый фрейм 743×640 (размер bg.png), контент по центру, фон прозрачный** — `.zw-shot-img{position:absolute;inset:0;object-fit:fill}`. Прозрачный webp (quality 80–82, exact=True).
- JS: автосмена 4.2с, пауза при hover/focus, клик по пункту — ручное переключение; все иллюстрации предзагружаются; вход кадра — fade + zoom (scale .96→1, translateY 12→0).
- Мобильные правила блока (в конце story-block.css): media сверху (`order:-1`), CTA `.zw-cta` скрыт на ≤768px, заголовок `clamp(30px,7.6vw,44px)` в одну строку.

## 5. Анимированный лого (перенесён из панели)

- `css/brand-logo.css` (копия header-logo.css из деплоя), `js/brand-logo.js` (копия header-logo.js: играет один раз за сессию, sessionStorage `zelscan-logo-entered`), `images/text.svg` (вордмарк).
- В HTML: шапка — `<a class="brand-logo brand-logo--header">` с инлайновым SVG 4 лепестков + `<img class="brand-text">`; футер — то же с `--footer`. CSS подключён ПОСЛЕ responsive.css (перебивает `width:auto!important`).

## 6. Стиль проекта (не нарушать)

- Фон `#020202`, поверхности `rgba(255,255,255,0.03–0.085)`, **никаких border** — только заливки.
- Акцент `#30C991` / `#34D399`; ошибка `#EF4444`; янтарный `#F59E0B`.
- Заголовки SuisseIntl (var `--font-suisse`): крупный стиль = `font-weight:700; font-size:72px; line-height:85%; letter-spacing:-0.065em; color:#fff; transform:rotate(-0.29deg)`. Текст Inter (var `--font-inter`).
- Радиусы: shell 48px, кадры/карточки 24–32px, пилюли 100px. Секция: `margin-top:var(--section-gap)`, `padding:0 var(--pad-x)`, контейнер `max-width:1331px`.
- Переменные и ресет — `css/base.css`. Брейкпоинты адаптива: 1024 и 768 (в `css/responsive.css`).
- **Версионирование:** любое изменение css/js в index.html сопровождать бампом `?v=N` (сейчас: responsive v30, story-block v7, brand-logo v1, block* — свои).

## 7. Структура index.html (блоки сверху вниз)

promo → hero (видео, поиск) → block2 (скан «Один ник — полное досье») → b3 (превью отчёта в mac-окне + 3 карточки) → **zw (блок «Что умеет Zelscan»)** → b4 (отзывы, sticky-скролл) → b5 (тарифы ₽49/₽99, таймер) → b7 (FAQ) → footer (анимированный лого) → модалка профиля. Глобальный reveal `[data-reveal]` (IntersectionObserver) — в инлайн-скрипте внизу index.html.

## 8. Реальные данные (для честных моков, если понадобятся)

- Отчёт root_duck (ID 5254256): `zelscan-deploy/cache/results/8d07cccb76.json` — конфликтность 1/10, токсичность 1%, нейтральных 96%, репутация 35/100, уверенность 16%, Big Five (8/3/4/6/2), триада (2/5/4), 216 сообщений, 298 тем, 385 лайков, топ-темы («Патч выйдет сегодня?» 1863 просмотра...).
- Отчёт karandawww: `f8b559b99b.json`.
- Формулы отрисовки (кольца, весы, спарклайн, эго-точки) — `zelscan-deploy/landing/assets/js/pages/zelscan_psychology.2.js`.

## 9. Как фиксить мобильный баг (процесс)

1. Воспроизвести локально на 390px (IAB/devtools) — понять раскладку (GPU-мигание так не ловится).
2. Править css/js; мобайл-правила складывать в `css/responsive.css` (блок ≤767px, рядом с комментом «FIX GPU-мигание») или в конец css самого блока.
3. Бампнуть `?v=N` в index.html.
4. Commit + push → сказать юзеру «обнови Pages-ссылку на телефоне».
5. Ссылка для юзера: https://jdankinloh-cloud.github.io/zelscan-landing-preview/

## 10. Служебное / грабли

- IAB-скриншоты часто падают по таймауту: ждать 40–60с, открывать НОВУЮ вкладку, перед скрином глушить анимации (инжект `<style>*{animation:none!important;transition:none!important}</style>`) и ставить `mouseenter` на `.zw-shell`/останавливать видео.
- Cookie-баннер на скринах — можно игнорировать или принять.
- `десктоп ≠ мобилка по GPU` — любые «на эмуляторе работает» не аргумент для юзера.
- В index.html остались служебные файлы (themes-ideas, scheme-variants, prompts, PLAN) — можно не трогать, они в гите.
- Планировщик/воркеры прода: `data-oauth-app-origin="https://app.zelscan.xyz"` (кнопки ведут туда).
