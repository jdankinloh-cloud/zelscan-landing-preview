# Промпты v3 для Nano Banana 2 — FLAT-иллюстрации для блока «Что умеет Zelscan»

Версия 3 — компромисс, который тебе нужен: **flat-вектор как в Figma** (никакого 3D, киношного света и «стеклянных сцен»), но НЕ скучная схема из одинаковых карточек. Приём простой: интересные метафоры + асимметричная композиция + слойность плоскими фигурами + точечные линии + один цветовой акцент. Тёмный фон #020202, зелёный #30C991, немного янтарного и красного только по смыслу.

Как пользоваться: копируешь промпт целиком → Nano Banana 2. Русские строки заданы буквально в блоке LABELS — модель обязана отрисовать их как есть.

---

## Промпт 1 — «Что читает сервис — и откуда»

**Метафора: одна воронка.** Сверху — большой плоский круг-источник, из него три пунктирных дуги несут маленькие фигурки (карточка профиля, пузыри сообщений, столбики статистики) в воронку, внизу из воронки выходит готовый файл-досье.

```
Modern flat vector illustration for a dark-mode tech landing page, square 1:1, centered composition.

GLOBAL STYLE (mandatory): flat 2D vector, Figma-style, crisp geometric shapes, NO 3D, NO perspective, NO gradients, NO glow, NO shadows except very subtle soft drop shadows under floating elements (max 8% opacity, short offset). Background: solid near-black #020202. Surfaces: rounded shapes filled with rgba(255,255,255,0.05) — subtle dark-grey on black, NEVER white or bright. Accent color: emerald green #30C991, used for small icons, dots and one highlighted element only. Tiny secondary accents: amber #F59E0B and blue #3B82F6, each appearing max once, small. Line details and dotted connectors: 1.5px strokes, color rgba(255,255,255,0.25). Typography: clean geometric grotesque (Inter style), primary text #EBEBEB, secondary #A8A8A8. Overall: premium minimal flat illustration, generous negative space, aligned to a clean grid feel.

COMPOSITION (vertical, top to bottom, asymmetric):
1. TOP: one large flat circle (diameter ~30% of canvas) — dark surface fill with a thin emerald ring inside and a small green globe line-icon at its center. Tiny caption to the right of the circle: «lolz.team».
2. THREE ARCS: from the circle, three thin DOTTED arc-paths curve downward, fanning out left-center-right. Along each arc travel 3–4 small flat items: on the left arc — tiny rounded ID-card glyphs and a calendar glyph; on the middle arc — tiny rounded speech-bubble glyphs; on the right arc — tiny flat bar-chart and sparkline glyphs. Each arc ends with a small arrowhead into the funnel.
3. CENTER: a large elegant flat funnel (two smooth trapezoid sides, surface fill, thin outline) occupying the middle of the canvas. Inside the funnel, the small glyphs visibly align into three tidy rows — order out of chaos. Small side captions next to funnel rows: «Профиль», «Контент», «Активность».
4. BOTTOM: from the funnel neck, a straight dotted line drops to ONE hero element: a flat rounded-rectangle dossier file, slightly larger than the glyphs, dark surface with a thin emerald left-edge bar (4px), three short grey text-lines inside and a small green check-badge in its corner. Caption under it: «Готовое досье».
5. A few tiny flat dots and plus-signs scattered sparsely in the background corners (max 6, very dim) for texture.

LABELS (render exactly, small, clean, no typos): «lolz.team», «Профиль», «Контент», «Активность», «Готовое досье». No other text.

NEGATIVE: no 3D, no isometric, no perspective, no glassmorphism, no glow, no gradients, no white cards, no bright fills, no drop-shadow abuse, no arrows everywhere, no clip-art people, no watermark, no gibberish text, no UI-mockup panels.

OUTPUT: crisp flat vector illustration, square 1:1, dark background to the edges.
```

---

## Промпт 2 — «Индекс доверия»

**Метафора: большой плоский полукруг-прибор.** Не карточка с гейджем — сам гейдж гигантский, из плоских секторов, стрелка-линия, три плоских «рельса» снизу подают данные.

```
Modern flat vector illustration for a dark-mode tech landing page, square 1:1.

GLOBAL STYLE (mandatory): flat 2D vector, Figma-style, crisp geometry, NO 3D, NO perspective, NO gradients, NO glow. Background solid near-black #020202. Fills: rgba(255,255,255,0.05) dark surfaces, never white/bright. Accent emerald #30C991; zone colors: amber #F59E0B and red #EF4444 used ONLY as the two other gauge sectors, flat solid. Lines/dots rgba(255,255,255,0.25). Typography: geometric grotesque (Inter style), #EBEBEB primary, #A8A8A8 secondary. Premium minimal, lots of negative space.

COMPOSITION:
1. A HUGE flat semicircular gauge fills the lower 2/3 of the canvas: the 180° arc is three flat thick sectors — left emerald, middle amber, right red — with thin gaps between sectors (2px black gaps). Sectors sit on a dark surface semicircle (rgba white 5%).
2. One slim flat needle (a clean line with a small triangle tip, #EBEBEB) points at ~35% — into the emerald sector, just before its end. A tiny white dot marks the pivot.
3. In the concave center of the gauge: large number «35» (thin white type) with a smaller «/100» right of it; under the number a small flat amber pill with dark text «умеренно».
4. Under the gauge, THREE flat vertical rails (rounded 4px-wide bars, dark surface fill) rise from the bottom edge and touch the gauge's baseline, evenly spaced. Each rail has a small flat icon at its top and a tiny caption below: a star icon with «Репутация», a bolt icon with «Конфликты», a user-check icon with «Поведение». Icons are thin line style, emerald.
5. From each rail's top, 2–3 tiny flat dots float upward toward the gauge (data feeding in), dim white.
6. Upper third of canvas: nearly empty black with one small centered grey caption: «одна цифра перед сделкой».

LABELS (exact): «35», «/100», «умеренно», «Репутация», «Конфликты», «Поведение», «одна цифра перед сделкой». No other text.

NEGATIVE: no 3D, no volumetric light, no speedometer chrome, no glass, no gradient arc, no white background, no big icon soup, no watermark, no gibberish text, no dashboard cards.

OUTPUT: crisp flat vector illustration, square 1:1.
```

---

## Промпт 3 — «Досье — это 5 разделов»

**Метафора: пять плоских панелей-слайдов.** Пять высоких скруглённых панелей стоят лесенкой со сдвигом, активная — зелёная подсветка снизу и выехала вперёд; над каждой короткая подпись.

```
Modern flat vector illustration for a dark-mode tech landing page, square 1:1.

GLOBAL STYLE (mandatory): flat 2D vector, Figma-style, crisp rounded shapes, NO 3D, NO perspective, NO gradients, NO glow. Background solid near-black #020202. Panels: tall rounded rectangles (radius 20px) filled rgba(255,255,255,0.05); the active panel slightly brighter rgba(255,255,255,0.08) with a 4px emerald bottom bar. Accent emerald #30C991 for small icons and the active state; each inactive panel gets ONE small muted color hint inside (amber / cool blue / violet / teal), used only on its tiny icon, everything else stays grey. Lines rgba(255,255,255,0.25). Typography: geometric grotesque, #EBEBEB / #A8A8A8. Premium minimal, airy.

COMPOSITION (staircase layout, left to right, slight vertical offsets — NOT a boring equal grid):
1. Five tall rounded panels of EQUAL width (~16% of canvas each) arranged in a gentle staggered staircase: panels 1–5 rise slightly step by step, the first panel shifted lowest and forward (slightly larger scale), creating rhythm.
2. Panel 1 (ACTIVE, «Обзор»): brightest surface, emerald bottom bar, inside — a small flat avatar square, one bold grey name-line and three short stat rows with tiny emerald dots.
3. Panel 2 («Активность»): inside — tiny flat bar-chart columns and a small clock glyph, icon tinted cool blue.
4. Panel 3 («Поведение»): inside — two tiny speech bubbles and a small triangle glyph, icon tinted amber.
5. Panel 4 («Психология»): inside — a tiny flat constellation of connected dots and a small lattice glyph, icon tinted violet.
6. Panel 5 («Анализ»): inside — a tiny flat half-circle gauge glyph, icon tinted teal.
7. Each panel has a small thin line-icon at its top and a caption label BELOW the panel: «Обзор» (white, active), «Активность», «Поведение», «Психология», «Анализ» (dim grey).
8. A thin dotted horizontal line runs behind all panels connecting them, with five tiny nodes at each panel — one continuous report.
9. Between panels, a couple of tiny flat plus-signs and dots, very dim.

LABELS (exact): «Обзор», «Активность», «Поведение», «Психология», «Анализ». No other text.

NEGATIVE: no browser window, no tab bar, no 3D perspective, no glass, no gradients, no white cards, no equal boring grid with no offsets, no people, no watermark, no gibberish text.

OUTPUT: crisp flat vector illustration, square 1:1.
```

---

## Промпт 4 — «Поведение: как человек на самом деле общается»

**Метафора: чипы-типажи + лента цитат.** Не спираль: большая диагональная лента из плоских цитат-пузырей, неровная, как живая речь; внизу — чипы «Токсик/Шарит/Тролль/Душа» и плоский блок триггеров.

```
Modern flat vector illustration for a dark-mode tech landing page, square 1:1.

GLOBAL STYLE (mandatory): flat 2D vector, Figma-style, crisp shapes, NO 3D, NO perspective, NO gradients, NO glow. Background solid near-black #020202. Surfaces rgba(255,255,255,0.05), never white. Accent emerald #30C991; one red #EF4444 accent allowed ONLY on a tiny flare glyph; one amber #F59E0B on one chip. Lines rgba(255,255,255,0.25). Typography: geometric grotesque, #EBEBEB primary, #A8A8A8 secondary. Premium minimal flat.

COMPOSITION (diagonal rhythm, top-left to bottom-right):
1. TOP-LEFT: heading «Поведение» with small grey sub-line «как человек на самом деле общается».
2. MAIN: a lively diagonal chain of FIVE flat rounded speech-bubble cards of DIFFERENT sizes and widths, stepping down from top-left to bottom-right like a staircase of chat messages — each bubble offset and slightly rotated (−2° to +2°) for organic feel. Bubbles contain short italic quote lines (exact texts below) and small meta-lines under the text. One bubble (the flare-up) has a tiny red zigzag spark glyph at its corner.
3. A thin dotted line threads through the bubbles in an S-curve, connecting them, with tiny nodes.
4. BOTTOM-LEFT under the chain: a row of four flat pill chips: «Токсик» (subtle red-tinted surface), «Шарит» (emerald-tinted), «Тролль» (amber-tinted), «Душа» (grey).
5. BOTTOM-RIGHT: one wide flat card with a thin line icon (warning triangle, emerald) and label «Триггеры», containing two short grey rows: «критика сделки», «вопросы о сроках».
6. A few tiny flat dots scattered sparsely.

LABELS (exact, quotes are italic): «да бывает такое что не…», «у вас бывает такие косяки?», «я гангстер», «Соболезную», «по делу, без воды» — chips: «Токсик», «Шарит», «Тролль», «Душа» — triggers card: «Триггеры», «критика сделки», «вопросы о сроках» — heading: «Поведение», «как человек на самом деле общается». No other readable text.

NEGATIVE: no 3D, no DNA helix, no people or faces, no emoji, no gradients, no white bubbles, no chat-app mockup, no purple, no watermark, no gibberish text.

OUTPUT: crisp flat vector illustration, square 1:1.
```

---

## Промпт 5 — «Чего Zelscan не делает — никогда»

**Метафора: зелёная линия-рубеж.** Плоская изогнутая зелёная линия делит кадр; сверху к ней летят пять тёмных сгустков с подписями и рассыпаются на серые точки; снизу — спокойный зелёный щит-значок и одна строка.

```
Modern flat vector illustration for a dark-mode tech landing page, vertical 4:5.

GLOBAL STYLE (mandatory): flat 2D vector, Figma-style, crisp shapes, NO 3D, NO perspective, NO gradients, NO glow. Background solid near-black #020202. Surfaces rgba(255,255,255,0.05). Accent emerald #30C991 for the barrier line, shield icon and calm side; muted red #EF4444 ONLY for the five incoming blobs (dim, desaturated). Grey dust: rgba(255,255,255,0.25) small dots. Typography: geometric grotesque, #EBEBEB / #A8A8A8. Premium minimal, serious, lots of black space.

COMPOSITION (strict diagonal divide):
1. ONE elegant emerald arc-line (4px, smooth curve) sweeps across the full canvas from lower-left to upper-right, dividing it in two. The line has a tiny emerald dot at each end. This is the barrier — calm, unbroken.
2. UPPER side (the "never" zone): FIVE small dark-red flat blobs (soft rounded amoeba shapes, dim, desaturated red) scattered along the barrier, each mid-disintegration: the half closer to the line crumbles into 6–10 small grey dots falling away. Each blob has a tiny thin white caption beside it: «имя и адрес», «телефон и почта», «переписки», «соцсети», «деанон».
3. LOWER side (the calm zone): clean and minimal — one small flat emerald shield line-icon (thin stroke, elegant) with a check inside, placed lower-center; beneath it one calm light-green caption line: «Работаем только с публичными данными».
4. A few dim grey dots drifting on the lower side, sparse.

LABELS (exact): «имя и адрес», «телефон и почта», «переписки», «соцсети», «деанон», «Работаем только с публичными данными». No other text.

NEGATIVE: no 3D, no lightning, no big red X stamps, no list of bullet rows, no shield-crest heraldry, no gradients, no glow, no gore, no skulls, no watermark, no gibberish text.

OUTPUT: crisp flat vector illustration, vertical 4:5.
```

---

## Промпт 6 — «Отчёт, которым можно поделиться»

**Метафора: карточка-досье и три моста.** Большая плоская карточка досье слева, от неё три пунктирные дуги-моста к трём маленьким аватар-кружкам, у карточки — пилюля со ссылкой и кнопка «Поделиться».

```
Modern flat vector illustration for a dark-mode tech landing page, square 1:1.

GLOBAL STYLE (mandatory): flat 2D vector, Figma-style, crisp rounded shapes, NO 3D, NO perspective, NO gradients, NO glow. Background solid near-black #020202. Surfaces rgba(255,255,255,0.05), never white. Accent emerald #30C991 for the share button, link pill and small icons. Dotted connectors rgba(255,255,255,0.25). Typography: geometric grotesque, #EBEBEB primary, #A8A8A8 secondary. Premium minimal flat.

COMPOSITION (asymmetric, card left, bridges fanning right):
1. LEFT-CENTER: one large flat dossier card (rounded rect ~40% of canvas width, slight −3° tilt): dark surface; at top-left a flat rounded-square avatar placeholder with a small duck glyph; next to it the name «root_duck» in white and a grey meta-line «на форуме 4 года · ID 5254256»; under them three short grey content lines with tiny emerald dots; at the card's right edge a small flat green button with a share-nodes icon and label «Поделиться».
2. From the card's right edge, THREE dotted arc-paths fan out to the right at different heights, each ending with a small arrowhead into a small flat circle-avatar (three circles of slightly different sizes, dark surface with thin grey ring; inside each a tiny thin line icon: one user, one users-group, one paper-plane).
3. Tiny flat dots travel along each dotted path (2–3 per path, dim white) — the link being shared.
4. BOTTOM-CENTER under the card: one flat pill styled as an address bar: small lock icon + text «zelscan.xyz/d/ZS-CD626639» in tiny monospace, thin grey outline, emerald lock icon.
5. A few tiny plus-signs and dots in corners, very dim.

LABELS (exact): «root_duck», «на форуме 4 года · ID 5254256», «Поделиться», «zelscan.xyz/d/ZS-CD626639». No other readable text.

NEGATIVE: no browser window frame, no phone mockup, no social-media logos, no 3D, no glass, no gradients, no white cards, no purple, no watermark, no gibberish text.

OUTPUT: crisp flat vector illustration, square 1:1.
```

---

## Советы

- Русские строки короткие специально — если всё равно поехали: перегенерируй или выброси блок LABELS (получишь чистую иллюстрацию без текста).
- Скучно/шаблонно? Добавь в конец: «make the composition more asymmetric and playful, increase negative space».
- Утащило в 3D/кино? Добавь: «STRICTLY FLAT 2D VECTOR, like a Figma illustration, absolutely no 3D, no depth, no lighting».
- Вставка в кадр блока: фон #020202 совпадает с фоном лендинга — `border-radius:24px; overflow:hidden` и всё.
