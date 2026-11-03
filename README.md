# Nền Tảng English – Luyện thi Aptis

Web tĩnh, không cần cài đặt hay build.

- `index.html` – giao diện web
- `content.json` – toàn bộ bài luyện (Core, Reading, Listening, Writing, Speaking, Từ vựng)
- `vercel.json` – để web luôn tải bản content.json mới nhất
- `audio/` – file mp3 cho Listening (chép từ thư mục audio của trang b2 cũ)

## Nội dung hiện có
- Listening: Test 1–5 (mỗi đề Part 1–4) và bộ bài mẫu
- Writing: 16 câu lạc bộ (Music, Television, English, Social, Technology, Community, Language, Photography, Film, Home Living, Fashion, Fitness, Walking, Beautiful Homes, Book, Car) + khung bài viết Part 1–4
- Speaking: Part 1 (9 bộ), Part 2 (5 bộ), Part 3 (7 bộ), Part 4 (28 đề) kèm câu trả lời mẫu
- Core, Reading, Từ vựng

## Đưa lên Vercel lần đầu
1. Tạo repo mới trên GitHub (github.com/new), ví dụ `luyen-thi-aptis`.
2. Trong repo: **Add file → Upload files**, kéo các file và thư mục `audio` (đã chép mp3 vào) vào, bấm **Commit changes**.
   Cách nhanh hơn: dùng luôn repo của trang b2 – xóa index.html, app.js, data.js, listening-app.js, listening-data.js, style.css cũ, giữ thư mục audio, rồi tải index.html, content.json, vercel.json mới lên.
3. Vào vercel.com → **Add New → Project** → chọn repo vừa tạo → Framework Preset: **Other** → **Deploy**.

## Cập nhật bài
1. Mở web, kéo xuống cuối trang, bấm **Quản lý tài liệu** (hoặc thêm `#quan-ly` vào cuối link).
2. Thêm, sửa, xóa bài. Thay đổi lưu thành bản nháp trên trình duyệt của bạn.
3. Bấm **Xuất file content.json**.
4. Trên GitHub: **Add file → Upload files** → kéo file `content.json` mới vào (ghi đè file cũ) → **Commit changes**.
5. Khoảng 1 phút sau, Vercel tự cập nhật web cho học viên.
