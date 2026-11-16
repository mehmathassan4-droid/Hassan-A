MHA VERSION 43 — اردو انسٹالیشن ہدایات

اس ZIP میں مکمل ویب ایپ ایک ہی فولڈر میں ہے۔ فائلیں الگ الگ اپ لوڈ نہ کریں۔ ZIP Extract کریں اور اس کے اندر موجود تمام فائلیں اور .nojekyll فائل GitHub repository کے Root (سب سے اوپر) میں اپ لوڈ کریں۔ کسی اضافی فولڈر کے اندر index.html نہ چھوڑیں۔

GitHub Pages:
1) Repository > Settings > Pages کھولیں۔
2) Build and deployment میں Deploy from a branch منتخب کریں۔
3) Branch: main اور Folder: /(root) منتخب کرکے Save کریں۔
4) Actions میں Pages deployment مکمل ہونے کا انتظار کریں۔
5) Settings > Pages میں جو اصل published URL دکھے، اسی کو کھولیں۔

اگر Vercel استعمال کر رہے ہیں تو یہی Root files repository میں commit کریں؛ Vercel میں Root Directory کو repository root رکھیں اور نیا deployment مکمل ہونے دیں۔ GitHub Pages اور Vercel دونوں پر یہ فائلیں relative paths استعمال کرتی ہیں۔

اہم: صرف app.js اپ لوڈ کرنا کافی نہیں۔ index.html, app.js, supabase-adapter.js, sw.js, manifest.webmanifest اور چار icon فائلیں سب ایک ساتھ اپ لوڈ ہوں۔

صفحات: ہر اندرونی صفحے پر Back Arrow برقرار ہے؛ اوپر والی افقی scrolling navigation strip ہٹا دی گئی ہے، جبکہ Dashboard کے tiles برقرار ہیں۔

آئیکنز: صرف چار canonical فائلیں ہیں: icon-32.png, icon-192.png, icon-512.png, apple-touch-icon.png۔ کوئی icon-green یا duplicate icon فائل نہیں۔

Firebase: اس build میں Firebase SDK، Firebase URL یا Firebase database connection شامل نہیں۔ پرانے app.js کی اندرونی compatibility calls کو supabase-adapter.js، Supabase کے public.mha_documents table میں منتقل کرتا ہے؛ یہ پرانے Firebase ڈیٹا کو import نہیں کرتا۔

نئی خالی شروعات: خالی ڈیٹا کے لیے نیا Supabase project استعمال کریں، اس کے Project URL اور publishable key کو supabase-adapter.js میں تبدیل کریں، پھر SUPABASE_SETUP.sql اسی نئے project کے SQL Editor میں ایک بار چلائیں۔ یہ SQL موجودہ ڈیٹا کو خود سے delete/reset نہیں کرتا۔ پرانے Firebase یا موجودہ Supabase project پر کوئی reset نہ چلائیں۔ service_role/secret key کبھی browser code میں نہ ڈالیں۔

اگر Repository پہلے سے پرانی app کے لیے service worker چلا چکی ہے تو نئی URL کھول کر ایک بار hard refresh کریں، یا browser site settings میں اسی site کا cache/site data صاف کرکے دوبارہ کھولیں۔

اس پیکج میں Live Supabase login، RLS اور موبائل push notification کی production verification شامل نہیں؛ پہلے GitHub Pages/Vercel Preview میں test کریں۔
