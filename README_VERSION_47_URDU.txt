MHA VERSION 47 — BACKUP / ORDER CANCEL / PAYMENT PATCH

اہم تبدیلیاں:
1) Backup & Restore میں Save Backup to Phone کا نیا بٹن شامل ہے۔ یہ JSON backup فائل موبائل کے Downloads میں ڈاؤن لوڈ کرتا ہے۔ Android browser کی اجازت کے مطابق اسے MHA Backups فولڈر میں منتقل/محفوظ کریں۔ ویب ایپ خود بخود کسی بھی فولڈر میں خاموشی سے فائل نہیں لکھ سکتی۔
2) مقامی JSON بیک اپ Supabase Storage bucket کے بغیر بھی بنایا جا سکتا ہے۔ Cloud Backup اختیاری ہے اور اس کے لیے Supabase Storage میں mha-cloud-backups bucket اور درست policies ضروری ہیں۔
3) Orders میں Cancel Order کا بٹن شامل ہے۔ Cancel شدہ order فعال sales/stock calculations سے خارج ہوتا ہے، جبکہ payment history audit کے لیے برقرار رہتی ہے۔ Admin کے لیے مستقل Delete بھی موجود ہے؛ یہ linked payment history بھی ہٹاتا ہے، اس لیے احتیاط کریں۔
4) Invoice Payments میں Add Payment، Full Payment اور Cancel موجود ہیں۔
5) Archive صاف کرنے کا bulk action صرف archive list entries ہٹاتا/چھپاتا ہے؛ اصل orders، sales اور received-payment records برقرار رہتے ہیں۔
6) App Settings سے رنگ/تھیم اور currency کے انتخاب ہٹا دیے گئے؛ currency اندرونی طور پر Rs. مقرر ہے۔
7) موجودہ editable Excel invoice template برقرار ہے: MHA_Editable_Invoice_Template.xlsx

ٹیسٹ:
- app.js پر Node JavaScript syntax check چلایا گیا۔
- ZIP integrity check چلایا گیا۔
- Live Supabase login, RLS, Storage bucket/policies, Android browser download path اور حقیقی database writes اس ماحول میں live test نہیں کیے گئے۔

نوٹ: اس ZIP کو اپنے موجودہ GitHub Pages project کی مکمل فائلوں کے ساتھ deploy کریں۔ موجودہ Supabase database کو reset یا SUPABASE_SETUP.sql دوبارہ run نہ کریں۔
