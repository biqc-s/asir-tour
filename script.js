/**
 * ═══════════════════════════════════════════════════════════════
 * 🎯 JavaScript الرئيسي للموقع
 * ═══════════════════════════════════════════════════════════════
 * استخدام: ضع هذا الرابط في Settings → Code → Head:
 * <script src="https://raw.githack.com/biqc-s/asir-tour/refs/heads/main/script.js"></script>
 * ═══════════════════════════════════════════════════════════════
 */

// انتظر حتى يتم تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 تم تحميل السكريبت بنجاح من ملف منفصل');

  // ═══════════════════════════════════════════════════════════════
  // 📱 SIDEBAR MENU - القائمة الجانبية
  // ═══════════════════════════════════════════════════════════════

  const menuButton = document.getElementById('menuButton');
  const closeButton = document.getElementById('closeButton');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  // التحقق من وجود عناصر الـ Sidebar
  if (menuButton && sidebar && overlay) {
    console.log('✅ تم العثور على عناصر القائمة الجانبية');

    // دالة فتح/إغلاق القائمة
    function toggleSidebar() {
      const isActive = sidebar.classList.contains('active');

      if (isActive) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // إعادة التمرير
        console.log('🔒 تم إغلاق القائمة');
      } else {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // منع التمرير
        console.log('📂 تم فتح القائمة');
      }
    }

    // عند الضغط على زر القائمة
    menuButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('👆 تم الضغط على زر القائمة');
      toggleSidebar();
    });

    // عند الضغط على زر الإغلاق
    if (closeButton) {
      closeButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('👆 تم الضغط على زر الإغلاق');
        toggleSidebar();
      });
    }

    // عند الضغط على الخلفية (overlay)
    overlay.addEventListener('click', function() {
      console.log('👆 تم الضغط على الخلفية');
      toggleSidebar();
    });

    // عند الضغط على روابط القائمة - إغلاق القائمة
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        console.log('👆 تم الضغط على رابط في القائمة');
        setTimeout(function() {
          toggleSidebar();
        }, 300);
      });
    });

    console.log('🎉 تم تفعيل القائمة الجانبية بنجاح');
  } else {
    console.warn('⚠️ لم يتم العثور على عناصر القائمة الجانبية');
  }

  // ═══════════════════════════════════════════════════════════════
  // 📧 CONTACT FORM - نموذج التواصل (إذا وجد)
  // ═══════════════════════════════════════════════════════════════

  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    console.log('✅ تم العثور على نموذج التواصل');

    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('📧 تم إرسال نموذج التواصل');

      // يمكن إضافة كود إرسال البيانات هنا
      const formData = new FormData(contactForm);
      console.log('البيانات:', Object.fromEntries(formData));

      alert('✅ تم إرسال رسالتك بنجاح!');
      contactForm.reset();
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // 🎨 SMOOTH SCROLL - التمرير السلس
  // ═══════════════════════════════════════════════════════════════

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // تجاهل روابط مثل #home إذا كانت فارغة
      if (href === '#' || href === '') return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        // حساب المسافة مع مراعاة ارتفاع الـ Header
        const headerHeight = 70;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        console.log('🎯 التمرير إلى:', href);
      }
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // 🖼️ LAZY LOADING - تحميل الصور بشكل كسول
  // ═══════════════════════════════════════════════════════════════

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
            console.log('🖼️ تم تحميل صورة:', img.src);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(function(img) {
      imageObserver.observe(img);
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // 📱 WHATSAPP BUTTON TRACKING - تتبع نقرات الواتساب
  // ═══════════════════════════════════════════════════════════════

  document.querySelectorAll('.wa-btn, .wa-contact-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      console.log('📱 تم الضغط على زر الواتساب');
      // يمكن إضافة Google Analytics tracking هنا
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // ✅ FOOTER SOCIAL LINKS - روابط التواصل في الفوتر
  // ═══════════════════════════════════════════════════════════════

  document.querySelectorAll('.footer-social-link').forEach(function(link) {
    link.addEventListener('click', function() {
      const platform = this.getAttribute('aria-label') || this.title;
      console.log('🔗 تم الضغط على رابط:', platform);
    });
  });

  console.log('✨ تم تحميل جميع السكريبتات بنجاح');
});

// ═══════════════════════════════════════════════════════════════
// 💎 PROMO CARD - وظائف البطاقة الترويجية
// ═══════════════════════════════════════════════════════════════

/**
 * إغلاق البطاقة الترويجية
 */
function closePromo() {
  const promoBox = document.getElementById('promoCard');
  if (promoBox) {
    promoBox.style.animation = 'slideOutDown 0.5s ease-in';
    setTimeout(function() {
      promoBox.style.display = 'none';
      console.log('✅ تم إغلاق البطاقة الترويجية');

      // حفظ حالة الإغلاق في localStorage
   //   localStorage.setItem('promoCardClosed', 'true');
//    }, 500);
//  }
//}

// التحقق من حالة البطاقة الترويجية عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  const promoBox = document.getElementById('promoCard');

  if (promoBox) {
    // إذا كان المستخدم أغلق البطاقة سابقاً، لا تظهرها
    const wasClosed = localStorage.getItem('promoCardClosed');

    if (wasClosed === 'true') {
      promoBox.style.display = 'none';
      console.log('💎 البطاقة الترويجية مخفية (تم إغلاقها سابقاً)');
    } else {
      console.log('💎 تم عرض البطاقة الترويجية');
    }
  }
});

// ═══════════════════════════════════════════════════════════════
// 🚀 دالة احتياطية
// ═══════════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
  console.log('⏳ في انتظار تحميل الصفحة...');
} else {
  console.log('✅ الصفحة محملة بالفعل');
}
