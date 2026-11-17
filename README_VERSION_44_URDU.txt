MHA VERSION 44 — انسٹالیشن نوٹس

یہ Version 43 ZIP سے تیار کیا گیا محدود اصلاحی پیکج ہے۔

تبدیلیاں:
- Login پر Password Show/Hide بٹن شامل کیا گیا۔
- Footer کریڈٹ: Software Developed by Muhammad Hassan Arain
- Date Format میں DD-MM-YY شامل کیا گیا۔
- Icon paths کو ZIP میں موجود اصل icon-32.png، icon-192.png، icon-512.png اور apple-touch-icon.png سے جوڑا گیا۔
- Service Worker cache version 44 کیا گیا تاکہ پرانی cache دوبارہ نہ کھلے۔

اپ لوڈ: تمام فائلیں ZIP سے نکال کر GitHub repository کے root میں ایک ہی commit میں اپ لوڈ کریں۔
SUPABASE_SETUP.sql دوبارہ نہ چلائیں۔

حدود: اس پیکج میں draggable/custom-position Invoice Template Designer یا cross-device sequential invoice counter کی نئی implementation شامل نہیں۔ موجودہ invoice print/edit fields اور موجودہ order number behavior برقرار ہیں۔ یہ چیزیں الگ محفوظ implementation اور database migration/test مانگتی ہیں۔
Live Supabase، RLS، auth، push notification اور حقیقی موبائل PWA install اس static audit میں test نہیں ہوئے۔
