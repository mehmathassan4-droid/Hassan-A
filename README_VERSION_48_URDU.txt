MHA VERSION 48 — FAST DATE & TOP-OF-PAGE PATCH

اہم:
- ZIP کھولنے پر تمام فائلیں براہ راست اسی جگہ موجود ہیں؛ اندر nested folders نہیں ہیں۔
- ہر app screen render ہونے پر صفحہ اوپر (scroll position 0) سے شروع ہوتا ہے۔
- تمام HTML date fields کے ساتھ Month اور Year کے فوری انتخاب والے dropdown شامل کیے گئے ہیں۔
- اصل date input برقرار ہے، اس لیے موجودہ app logic اور Supabase date values ISO YYYY-MM-DD ہی رہتی ہیں۔
- موبائل کے native date picker/keyboard کو برقرار رکھا گیا ہے؛ quick month/year dropdown سے سال یا مہینہ فوراً تبدیل کیا جا سکتا ہے۔
- موجودہ Supabase project settings اور business data کو تبدیل یا reset نہیں کیا گیا۔

تبدیلی کی حد:
یہ ورژن Version 47 پر مبنی ہے۔ JavaScript syntax اور ZIP integrity چیک کیے گئے ہیں۔
Supabase live writes، Android device picker rendering، اور حقیقی business workflows کا مکمل live test اس build environment میں ممکن نہیں تھا۔
