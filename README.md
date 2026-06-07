# Support AI 🤖

An AI-powered customer support chatbot platform that allows businesses to create, customize, and embed intelligent support assistants on their websites.

## ✨ Features

- User Authentication with ScaleKit
- Business-specific AI Chatbot
- Custom Knowledge Base
- Gemini AI Integration
- Embeddable Chat Widget
- MongoDB Database
- Dashboard for Chatbot Configuration
- Real-time Customer Support Responses
- Website Integration via Script Tag
- Secure API Routes

---

## 🛠 Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

### Backend
- Next.js API Routes
- MongoDB
- Mongoose

### Authentication
- ScaleKit

### AI
- Google Gemini API

---

## 📂 Project Structure

```bash
src/
│
├── app/
│   ├── api/
│   │   ├── auth/
│   │   ├── chat/
│   │   └── settings/
│   │
│   ├── dashboard/
│   └── page.tsx
│
├── components/
│
├── lib/
│   ├── db.ts
│   └── scalekit.ts
│
├── model/
│
└── middleware/
```

---

## 🚀 Installation

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/support-ai.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env.local` file:

```env
# MongoDB
MONGODB_URL=your_mongodb_connection_string

# Gemini
GEMINI_API_KEY=your_gemini_api_key

# ScaleKit
SCALEKIT_ENVIRONMENT_URL=your_scalekit_environment_url
SCALEKIT_CLIENT_ID=your_client_id
SCALEKIT_CLIENT_SECRET=your_client_secret

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Run Development Server

```bash
npm run dev
```

Project will be available at:

```bash
http://localhost:3000
```

---

## 🤖 How It Works

1. User logs in using ScaleKit.
2. Business owner configures:
   - Business Name
   - Support Email
   - Knowledge Base
3. Settings are stored in MongoDB.
4. Customer messages are sent to Gemini AI.
5. Gemini answers using only the provided business knowledge.
6. Chatbot can be embedded into any website.

---

## 💬 Example Knowledge Base

```text
Support Email: support@company.com

Refund Policy:
7-day return policy available.

Delivery:
3-5 business days.

Payment:
Cash on Delivery available.
```

---

## 🔌 Chat Widget Integration

Embed the chatbot on any website:

```html
<script
  src="https://your-domain.com/widget.js"
  data-owner-id="YOUR_OWNER_ID">
</script>
```

---

## 📸 Screenshots

- Landing Page
- Dashboard
- Chat Widget
- Embedded Chat Experience

---

## 🔒 Security

- Secure Authentication using ScaleKit
- Environment Variables for Secrets
- Server-side API Validation
- MongoDB Connection Protection

---

## Future Improvements

- Chat History Storage
- Analytics Dashboard
- Multi-language Support
- Lead Collection
- Theme Customization
- Human Handoff Support
- Multiple AI Models

---

## Author

**Ritik Singh**

Content Creator • Web Developer

---

## License

This project is licensed under the MIT License.