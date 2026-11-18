MHA VERSION 45 — محدود مگر اہم اصلاحات

بنیاد: صارف کی فراہم کردہ MHA_VERSION_44_PATCHED.zip
یہ نیا پروجیکٹ نہیں؛ اسی موجودہ GitHub Pages پروجیکٹ کی فائلیں ہیں۔

اس ورژن میں شامل تبدیلیاں:
1) Product Form میں Pharma Company کا لازمی فیلڈ شامل کیا گیا۔
2) Product list میں Pharma Company دکھائی جاتی ہے اور سرچ میں بھی شامل ہے۔
3) نیا Order بناتے وقت ہر item کے ساتھ Pharma Company کا snapshot محفوظ ہوتا ہے۔
4) Invoice print میں items کو Pharma Company کے نام کے تحت گروپ کیا جاتا ہے۔ پرانے Orders میں اگر item پر pharma snapshot موجود نہ ہو تو موجودہ Product record سے نام لینے کی کوشش ہوتی ہے؛ اگر وہ بھی دستیاب نہ ہو تو Unspecified Pharma دکھے گا۔
5) Backup & Restore میں Supabase Storage پر Cloud Backup upload، list، download، ایک backup delete اور تمام cloud backups delete کے controls شامل کیے گئے ہیں۔
6) Invoice Archive میں ایک archived invoice یا تمام archived invoices delete کرنے کا Admin control شامل ہے؛ متعلقہ invoicePayments پہلے delete ہوتے ہیں۔
7) Orders list میں Admin کے لیے order delete شامل کیا گیا ہے؛ اس کے linked invoicePayments بھی delete کیے جاتے ہیں۔ Stock اس ایپ میں active orders سے calculate ہوتا ہے، اس لیے order delete ہونے پر sold quantity calculation سے نکل جاتی ہے۔
8) اہم bug fix: successful Supabase fetch کے بعد empty product/store result کو پرانی localStorage cache سے دوبارہ merge/fallback نہیں کیا جاتا۔ اس سے حذف شدہ Product/Store کے refresh کے بعد واپس آنے کا ایک بڑا سبب ختم ہوتا ہے۔ Offline fetch failure پر local cache fallback برقرار ہے۔
9) Service Worker اور asset cache version 45 پر bump کیے گئے ہیں۔

لازمی Supabase مرحلہ:
- MHA_V45_CLOUD_BACKUP_SETUP.sql کو Supabase SQL Editor میں ایک مرتبہ Run کریں۔
- یہ private `mha-cloud-backups` bucket بناتا ہے اور صرف approved Admins کو cloud backup objects پڑھنے، اپلوڈ اور حذف کرنے دیتا ہے۔
- یہ migration موجودہ business data کو delete/reset نہیں کرتی۔
- جب تک SQL migration نہ چلائی جائے، Cloud Backup upload/list/delete کام نہیں کرے گا۔

GitHub Pages اپلوڈ:
- ZIP extract کریں۔
- `MHA_VERSION_44_PATCHED/MHA_VERSION_43_GITHUB_READY/` کے اندر موجود تمام فائلیں repository کے اصل publish root میں اپلوڈ کریں (اندرونی فولڈر سمیت نہ رکھیں)۔
- SUPABASE_SETUP.sql دوبارہ نہ چلائیں۔ صرف اوپر دی گئی V45 migration چلائیں۔
- Deployment کے بعد Chrome میں hard refresh کریں؛ PWA پرانی cache رکھے تو Site Settings > Storage سے صرف MHA site data clear کرکے دوبارہ کھولیں۔

اہم حدود / ابھی مکمل نہ ہونے والے کام:
- اس ZIP میں Supplier Payments، Employee Salary، Returns، Finance entries اور ہر دوسری collection کے لیے مکمل universal Edit/Delete workflow ابھی implement نہیں ہوا۔
- Worker/Admin کی مکمل row-level data isolation، approval delete controls، invoice template designer، globally sequential invoice counter، atomic multi-record delete/reversal، and all related ledger recalculation ابھی مکمل طور پر verify/implement نہیں ہوئے۔
- Cloud Backup UI اس migration کے بعد Admin-only policy کے ساتھ ہے۔
- Live Supabase auth/RLS/storage, actual user accounts, real database delete persistence, browser/Android install, and printing must be tested in the user's Supabase/GitHub deployment. This package has not been live-tested against the user's Supabase project.
- Permanent deletion is irreversible. Create a cloud backup before using Delete All. Do not delete products/stores referenced by live stock/orders until a safe dependency workflow is added.

Verification performed for this package:
- `node --check app.js`
- Manifest JSON parse
- ZIP integrity test
- Required icon files present
No claim is made that live Supabase behavior has been tested.
