# 🌐 Asir Tour - موقع المرشد السياحي

مشروع موقع احترافي للمرشدين السياحيين باستخدام Carrd.co

---

## 📦 الملفات الأساسية

```
asir-tour/
├── styles.css               # جميع التنسيقات
├── script.js                # جميع السكريبتات
├── header-html-only.html    # كود الهيدر
├── footer-html-only.html    # كود الفوتر
└── promo-card.html          # البطاقة الترويجية (اختياري)
```

---

## 🚀 طريقة التركيب (3 خطوات)

### الخطوة 1️⃣: Head Code

في **Settings → Code → Head** الصق هذا:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
<link rel="stylesheet" href="https://raw.githack.com/biqc-s/asir-tour/refs/heads/claude/debug-carrd-integration-fOtCT/styles.css">
<script src="https://raw.githack.com/biqc-s/asir-tour/refs/heads/claude/debug-carrd-integration-fOtCT/script.js"></script>
```

### الخطوة 2️⃣: الهيدر

**Add Element → Embed → Inline**

الصق محتوى `header-html-only.html`

### الخطوة 3️⃣: الفوتر

**Add Element → Embed → Inline**

الصق محتوى `footer-html-only.html`

### الخطوة 4️⃣: البطاقة الترويجية (اختياري)

**Add Element → Embed → Inline**

الصق محتوى `promo-card.html`

---

## ⚙️ التعديلات المطلوبة

### في header-html-only.html:
- اسم المرشد: `عبدالله السلمان`
- رقم الترخيص: `12345678`
- رقم الواتساب: `966XXXXXXXXX`

### في footer-html-only.html:
- اسم المرشد
- رقم الترخيص
- أرقام التواصل (واتساب، تلفون، ايميل)
- روابط السوشل ميديا (5 روابط)

### في promo-card.html:
- عنوان العرض
- النص الترويجي
- السعر
- رقم الواتساب

---

## 🎨 تغيير الألوان

افتح `styles.css` وعدّل:

```css
:root {
  --primary-color: #1B365D;    /* اللون الأساسي */
  --secondary-color: #8B2635;   /* اللون الثانوي */
  --wa-color: #27A148;          /* لون الواتساب */
}
```

بعد التعديل:
```bash
git add styles.css
git commit -m "تحديث الألوان"
git push origin claude/debug-carrd-integration-fOtCT
```

---

## 🧪 الاختبار

افتح موقعك واضغط `F12` → Console، يجب أن ترى:

```
🚀 تم تحميل السكريبت بنجاح من ملف منفصل
✅ تم العثور على عناصر القائمة الجانبية
🎉 تم تفعيل القائمة الجانبية بنجاح
✨ تم تحميل جميع السكريبتات بنجاح
```

---

## ✨ المميزات

### الهيدر:
- ✅ Header ثابت (Fixed)
- ✅ Sidebar منزلق
- ✅ زر واتساب
- ✅ بطاقة الترخيص
- ✅ Responsive

### الفوتر:
- ✅ 3 أقسام احترافية
- ✅ 5 أيقونات سوشل ميديا
- ✅ Gradient background
- ✅ Hover effects
- ✅ Responsive

### البطاقة الترويجية:
- ✅ Fixed في الزاوية اليمنى
- ✅ Slide-in/out animation
- ✅ localStorage (لا تظهر بعد الإغلاق)
- ✅ Responsive

---

## 🔗 الروابط

**CSS:**
```
https://raw.githack.com/biqc-s/asir-tour/refs/heads/claude/debug-carrd-integration-fOtCT/styles.css
```

**JavaScript:**
```
https://raw.githack.com/biqc-s/asir-tour/refs/heads/claude/debug-carrd-integration-fOtCT/script.js
```

---

## 📞 ملاحظات

- ✅ **CSS و JS منفصلين**: سهل التعديل مستقبلاً
- ✅ **HTML في embeds**: كل قسم منفصل
- ✅ **GitHack CDN**: تحديثات سريعة (1-2 دقيقة)
- ✅ **localStorage**: البطاقة الترويجية لا تظهر بعد الإغلاق

---

**تم بواسطة Claude** 🤖
