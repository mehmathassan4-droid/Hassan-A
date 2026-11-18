-- MHA V45 Cloud Backup migration
-- Run this separately in Supabase SQL Editor as project owner.
-- This creates a PRIVATE bucket and admin-only object policies.
-- It does NOT delete, reset, or modify existing MHA business records.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('mha-cloud-backups', 'mha-cloud-backups', false, 52428800, array['application/json'])
on conflict (id) do update set public=false, file_size_limit=52428800, allowed_mime_types=array['application/json'];

drop policy if exists "MHA V45 admins read cloud backups" on storage.objects;
drop policy if exists "MHA V45 admins upload cloud backups" on storage.objects;
drop policy if exists "MHA V45 admins delete cloud backups" on storage.objects;

create policy "MHA V45 admins read cloud backups"
on storage.objects for select to authenticated
using (bucket_id='mha-cloud-backups' and public.mha_is_admin(auth.uid()));

create policy "MHA V45 admins upload cloud backups"
on storage.objects for insert to authenticated
with check (bucket_id='mha-cloud-backups' and public.mha_is_admin(auth.uid()));

create policy "MHA V45 admins delete cloud backups"
on storage.objects for delete to authenticated
using (bucket_id='mha-cloud-backups' and public.mha_is_admin(auth.uid()));
