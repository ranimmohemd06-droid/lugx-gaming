# LUGX Gaming — React + Vite

## التشغيل

```bash
npm install
npm run dev
```

افتح الرابط اللي بيظهر (غالبًا http://localhost:5173).

## هيكل المشروع

```
src/
├── main.jsx            نقطة البداية: بيركّب <App /> جوه الـ div اللي id بتاعه root
├── App.jsx             بيرتّب الأقسام ورا بعض بس
├── App.css             ستايل كل الأقسام (مقسّم بتعليقات)
├── index.css           المتغيرات (الألوان) والستايل العام
├── data/games.js       كل الداتا: الألعاب، اللينكات، الكاتيجوريز
└── components/
    ├── Header.jsx          الهيدر
    ├── Banner.jsx          الـ hero الأزرق + البحث
    ├── Features.jsx        الأربع كروت اللي تحت الـ banner
    ├── Trending.jsx        Trending Games
    ├── MostPlayed.jsx      Most Played
    ├── Categories.jsx      Top Categories
    ├── Cta.jsx             Pre-Order + Newsletter
    ├── Footer.jsx          الفوتر
    ├── SectionHeading.jsx  عنوان القسم (بيتكرر 3 مرات)
    └── Cover.jsx           صورة اللعبة (بيتكرر في كل الأقسام)
```

## المفاهيم المستخدمة وين تلاقيها

| المفهوم | المكان |
|---|---|
| Components | كل ملف في `components/` |
| Props | `SectionHeading` (label, title, showButton) و `Cover` (game, className) |
| `map()` لعرض قايمة + `key` | `Trending`, `MostPlayed`, `Categories`, `Features`, `Header` |
| `useState` | `Header` (scrolled, menuOpen, activeId)، `Banner` (search)، `Cta` (email) |
| `useEffect` + cleanup | `Header` (الاستماع للـ scroll) |
| Controlled input | حقل البحث في `Banner` وحقل الإيميل في `Cta` |
| Conditional rendering | `Trending` (السعر القديم)، `Header` (أيقونة القائمة)، `SectionHeading` (زرار View All) |
| Event handling | `onClick`, `onChange`, `onSubmit` مع `e.preventDefault()` |
| Import / export للداتا | `data/games.js` |

## إزاي تحط صور حقيقية بدل الألوان

1. انسخ الصور من فولدر التمبلت (`assets/images`) إلى `public/images/`.
2. في `src/data/games.js` غيّر `image: null` إلى `image: '/images/اسم-الصورة.jpg'`.

`Cover.jsx` هيعرض الصورة تلقائيًا بدل الخلفية الملونة.

## تمارين تثبّت الفهم

1. ضيف لعبة خامسة في `trendingGames` وشوف الكارت بيظهر لوحده.
2. خلّي زرار الكارت يزوّد عدّاد في الهيدر (`useState` في `App` وتمرّره بالـ props).
3. اعمل فلتر للـ Most Played بحسب الـ category.
4. حوّل اللينكات لـ React Router بدل `href="#..."`.
