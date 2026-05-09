# URL Shortener — DevCamp 2026 Frontend Assignment

---

## Caution

Please do this assignment by yourself. Using AI should only be for generating your learning path, not for completing the assignment directly.

### Example prompts to ask AI for learning guidance:

1. "Given the URL Shortener frontend assignment, can you outline a step-by-step learning plan for me to follow? What topics should I study first, and what skills are most important?"

2. "What are the essential React and TypeScript concepts I need to understand to build a URL shortener app from scratch? Please explain them in beginner-friendly terms."

3. "How can I break down the URL Shortener assignment into smaller, manageable tasks? Can you suggest a checklist or roadmap for building the UI and integrating the API?"

4. "What are some common mistakes beginners make when building a React app like this, and how can I avoid them?"

5. "What are the best practices I should follow when coding with React and TypeScript?"

---

## Part A: Getting Started

### About This Project

This is the **URL Shortener** frontend assignment for **DevCamp 2026 Frontend Training**. You will build a complete URL shortening web application — from UI to full API integration.

> **Note on CSS:** The tech stack below is recommended to make your Capstone project easier. However, you are **not required to strictly follow Tailwind CSS** — feel free to use your preferred CSS solution (e.g. CSS Modules, SCSS, styled-components, etc.).

---

### Tech Stack

| Technology                                                                                            | Purpose                            |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [React 19](https://react.dev)                                                                         | UI library                         |
| [TypeScript](https://www.typescriptlang.org)                                                          | Type safety                        |
| [Vite](https://vite.dev)                                                                              | Build tool & dev server            |
| [Tailwind CSS v4](https://tailwindcss.com)                                                            | Utility-first styling _(optional)_ |
| [React Router DOM v7](https://reactrouter.com)                                                        | Client-side routing                |
| [Axios](https://axios-http.com)                                                                       | HTTP client                        |
| [ESLint](https://eslint.org)                                                                          | Code linting                       |
| [Prettier](https://prettier.io)                                                                       | Code formatting                    |
| [Husky](https://typicode.github.io/husky) + [lint-staged](https://github.com/lint-staged/lint-staged) | Pre-commit hooks                   |

---

### Setup

```bash
# Install dependencies
yarn

# Start development server
yarn dev

# Build for production
yarn build
```

---

### Commands to Know

| Command             | Description                                       |
| ------------------- | ------------------------------------------------- |
| `yarn dev`          | Start local dev server at `http://localhost:5173` |
| `yarn build`        | Type-check + production build                     |
| `yarn lint`         | Run ESLint across the project                     |
| `yarn format`       | Auto-format source files with Prettier            |
| `yarn format:check` | Check formatting without writing (CI-friendly)    |
| `yarn preview`      | Serve the production build locally                |

---

### Pre-commit Rules

Every `git commit` automatically:

1. **Checks your branch name** — must follow the convention below
2. **Runs lint-staged** — formats and lints only staged files

**For Devmembers — your branch must be named after yourself:**

```
feature/<your_email>

```

**Examples:**

```
feature/john_doe@example.com
```

---

## Part B: Assignment

> Details and Figma file will be provided separately.

The assignment has **2 phases**:

### Phase 1 — Build the UI

Implement the application UI based on the provided **Figma design file**. Focus on:

- Pixel-accurate layout and components
- Clean component structure
- Using hooks and state management effectively
- Using TypeScript for type safety

### Phase 2 — API Integration

Connect your UI to the backend built in the **companion BE assignment** to create a complete working flow:

- Shorten a URL
- Redirect via short URL

---

## Part C: Requirements

### Must Have

| #   | Requirement             | Details                                                            |
| --- | ----------------------- | ------------------------------------------------------------------ |
| 1   | **Clean & accurate UI** | Follows the Figma design; easy to use and visually consistent      |
| 2   | **Input field**         | Accepts user input; handles focus state (focused/unfocused styles) |
| 3   | **Shorten button**      | Has hover and focus effects; clicking it opens a result modal      |
| 4   | **Copy button**         | Copies the shortened link to the user's clipboard                  |

### Nice to Have

| #   | Requirement              | Details                                                                                              |
| --- | ------------------------ | ---------------------------------------------------------------------------------------------------- |
| 1   | **Responsive UI**        | Layout adapts gracefully to different screen sizes                                                   |
| 2   | **Success notification** | Shows a notification/toast when a link is successfully shortened                                     |
| 3   | **BE integration**       | Full end-to-end flow connected to the backend API _(requires completing the BE training assignment)_ |

> **Note:** BE integration is **optional** and requires completing the companion Backend training assignment first.

---

## Part D: Grading Evaluation

| Criteria              | Description                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| **UI**                | Visual accuracy compared to Figma, attention to detail                                         |
| **Functionality**     | All must-have features work correctly (input, shorten button, copy button)                     |
| **Coding Style**      | Clean, readable code; consistent formatting; meaningful naming, utilize TypeScript effectively |
| **Project Structure** | Logical file/folder organization; separation of concerns                                       |

> **Important:** BE integration is **not graded** and does **not count toward your score**. It exists purely as extra practice for students who complete the BE assignment. Only the UI and frontend functionality are evaluated.

---

## Part E: Submission

### Requirements

- [ ] Record and attach a **demo video** showing your working application
- [ ] Open a **Pull Request into the `main` branch** of this repository

### Pull Request

When opening your PR, fill in the provided template:

- **Name** — your full name
- **Email** — the email address you used to register for DevCamp
- **Changes** — what you built or changed
- **Demo Video** — link or attachment of your demo recording

- Naming your PR: `feat: add URL Shortener frontend assignment by <your_email>` (e.g. `feat: add URL Shortener frontend assignment by john_doe@example.com`)

> PRs without a demo video will not be accepted.



Ý tưởng đột phá cho dự án "SkillLink":
Để dự án này không chỉ là một cái vỏ giao diện, Thành hãy tích hợp thêm 3 tính năng "ăn tiền" này:

1. Hệ thống "Smart Match" (Cá nhân hóa)
Logic: Thay vì học viên phải bơi trong hàng nghìn gia sư, Thành code một bộ lọc thông minh dựa trên kỹ năng đang thiếu (kết nối với tư duy CareerGPS của bạn).

Frontend: Sử dụng các Tag Chips (như C++, Verilog, React) để người dùng chọn nhanh.

2. Video Call Integration (Học Online trực tiếp)
Tính năng: Nút "Mở phòng học" (như trong ảnh bạn gửi) sẽ kích hoạt một phòng họp online.

Tech: Thành có thể tìm hiểu về Jitsi Meet SDK hoặc ZegoCloud (rất dễ nhúng vào React) để làm tính năng gọi video ngay trên web mà không cần dùng Zoom bên ngoài.

3. Real-time Notifications (Thông báo thời gian thực)
Tính năng: Khi có người nhấn "Chấp nhận" yêu cầu kết nối, gia sư và học viên sẽ nhận được thông báo ngay lập tức.

Tech: Sử dụng Socket.io (Thành có thể tận dụng luôn cái Backend Node.js vừa làm ở bài tập URL Shortener để phát triển lên).

🛠️ Kế hoạch thực hiện trên máy LENOVO cho @TienThanh-68:
Giai đoạn 1 (Layout): Dùng Vite + React dựng khung Dashboard giống hệt ảnh mẫu. Tập trung vào việc làm cho nó Responsive (chạy tốt cả trên điện thoại).

Giai đoạn 2 (State Management): Dùng useState hoặc Context API để quản lý việc nhấn nút "Chấp nhận/Từ chối" làm thay đổi danh sách yêu cầu.

Giai đoạn 3 (Backend & DB):

MongoDB: Lưu User profile (Gia sư/Học viên) và Lịch dạy (Slots).

Node.js: Viết API để lấy dữ liệu đổ vào các Card.