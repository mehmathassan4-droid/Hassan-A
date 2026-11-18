MHA VERSION 46 — PHARMA MASTER CORRECTION

یہ پیکیج موجودہ Version 45 پر مبنی ہے، نیا پروجیکٹ نہیں۔

اس ورژن میں Pharma کا درست طریقہ:
1) Pharma Company صرف Product Master میں پروڈکٹ بناتے/اپڈیٹ کرتے وقت درج ہوگی۔
2) Order بناتے وقت Pharma کا کوئی فیلڈ، انتخاب یا دوبارہ اندراج نہیں ہوگا۔ Order item میں pharmaCompany snapshot بھی محفوظ نہیں کیا جاتا۔
3) Invoice بناتے وقت ایپ Product Master میں productId کے ذریعے اصل پروڈکٹ تلاش کرکے اسی کا pharmaCompany پڑھے گی اور اسی حساب سے invoice items گروپ کرے گی۔ پرانے Orders بھی اسی lookup سے گروپ ہوں گے۔ اگر Product Master میں پروڈکٹ نہ ملے تو Unspecified Pharma دکھے گا۔

Version 45 کی Cloud Backup UI، Storage migration، archive invoice deletion اور admin order deletion اسی پیکیج میں برقرار ہیں۔ Cloud Backup چلانے کے لیے Supabase SQL Editor میں صرف MHA_V45_CLOUD_BACKUP_SETUP.sql ایک مرتبہ چلائیں۔ SUPABASE_SETUP.sql دوبارہ نہ چلائیں۔

اہم: یہ پیکیج مکمل universal delete system نہیں ہے۔ Supplier Payments، Employee Salary، Finance، Returns، تمام approval rows اور ہر collection کے edit/delete controls ابھی مکمل طور پر implement/verify نہیں ہیں۔ ان حصوں کے لیے مزید کام درکار ہے۔ موجودہ Version 45 کے audit report میں درج live Supabase/RLS، backup policies، Android/PWA، printing اور multi-user ٹیسٹ بھی اس ماحول میں نہیں کیے گئے۔

انسٹال/اپلوڈ: ZIP extract کریں اور اندرونی MHA_VERSION_44_PATCHED/MHA_VERSION_43_GITHUB_READY فولڈر کے اندر کی تمام فائلیں اپنے GitHub Pages repository کے publish root میں رکھیں۔
