# 📚 BookHub - Library Management System

<div align="center">

![BookHub Logo](https://i.postimg.cc/R0z3nmP5/lmslogo-removebg-preview.png)

**A modern, responsive Library Management System built with React, TypeScript, and Tailwind CSS**

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF.svg)](https://vitejs.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.8.2-764ABC.svg)](https://redux-toolkit.js.org/)

</div>

---

## 🚀 Features

### 📖 **Book Management**

- **View All Books**: Browse the complete library catalog with detailed information
- **Add New Books**: Create new book entries with comprehensive details
- **Edit Books**: Update book information including title, author, genre, ISBN, and copies
- **Delete Books**: Remove books from the library system
- **Book Details**: View individual book information in modal dialogs

### 🔄 **Borrowing System**

- **Borrow Books**: Borrow available books with quantity selection
- **Due Date Selection**: Choose return dates using an intuitive calendar interface
- **Availability Tracking**: Real-time book availability status
- **Borrow Summary**: View all borrowed books with aggregated information

### 🎨 **User Experience**

- **Responsive Design**: Fully responsive interface for desktop, tablet, and mobile
- **Dark/Light Mode**: Toggle between dark and light themes
- **Modern UI**: Beautiful, modern interface with smooth animations
- **Loading States**: Elegant loading indicators for better UX
- **Error Handling**: Comprehensive error handling with user-friendly messages

### 📱 **Navigation & Layout**

- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu
- **Active Route Highlighting**: Visual indication of current page
- **Smooth Transitions**: Seamless page transitions and animations

---

## 🛠️ Technologies & Frameworks

### **Frontend Technologies**

- **React 19.1.0** - Modern JavaScript library for building user interfaces
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **Vite 7.0.0** - Fast build tool and development server
- **React Router 7.6.3** - Client-side routing for single-page applications

### **State Management**

- **Redux Toolkit 2.8.2** - Modern Redux with simplified API
- **React Redux 9.2.0** - React bindings for Redux
- **RTK Query** - Powerful data fetching and caching solution

### **Styling & UI**

- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **DaisyUI 5.0.43** - Component library for Tailwind CSS
- **Radix UI** - Accessible UI primitives
  - Dialog, Dropdown Menu, Label, Popover, Select, Slot
- **Lucide React 0.525.0** - Beautiful & consistent icon toolkit
- **Class Variance Authority 0.7.1** - Type-safe component variants
- **CLSX 2.1.1** - Conditional className utility
- **Tailwind Merge 3.1.1** - Merge Tailwind CSS classes

### **Forms & Validation**

- **React Hook Form 7.59.0** - Performant forms with minimal re-renders
- **Zod 3.25.74** - TypeScript-first schema validation
- **Hookform Resolvers 5.1.1** - Validation resolvers for React Hook Form

### **Date & Time**

- **Date-fns 4.1.0** - Modern JavaScript date utility library
- **React Day Picker 9.7.0** - Flexible date picker component

### **Notifications & Alerts**

- **SweetAlert2 11.22.2** - Beautiful, responsive, customizable replacement for JavaScript's popup boxes

### **Development Tools**

- **ESLint 9.29.0** - Code linting and formatting
- **TypeScript ESLint 8.34.1** - TypeScript-specific linting rules
- **Vite Plugin React 4.5.2** - React support for Vite

---

## 🏗️ Project Structure

```
Library-Management-System-Client/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Base UI components (buttons, forms, etc.)
│   │   ├── BorrowModal.tsx # Book borrowing modal
│   │   ├── EditBookModal.tsx # Book editing modal
│   │   ├── Navbar.tsx      # Navigation component
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Landing page
│   │   ├── AllBooks.tsx    # Books listing page
│   │   ├── AddBook.tsx     # Add book form
│   │   └── BorrowSummary.tsx # Borrowed books summary
│   ├── redux/              # State management
│   │   ├── api/            # RTK Query API slices
│   │   ├── store.ts        # Redux store configuration
│   │   └── hook.ts         # Redux hooks
│   ├── types/              # TypeScript type definitions
│   ├── routes/             # Application routing
│   └── lib/                # Utility functions
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

---

## 🚀 Getting Started

### **Prerequisites**

- Node.js (version 18 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Library-Management-System-Client
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### **Available Scripts**

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Build for production

# Linting
npm run lint         # Run ESLint

# Preview
npm run preview      # Preview production build
```

---

## 🔧 Backend Integration

This frontend application connects to a Node.js/Express backend with the following features:

### **Backend Technologies**

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Zod** - Schema validation
- **CORS** - Cross-origin resource sharing

### **API Endpoints**

- `GET /api/books` - Retrieve all books
- `POST /api/books` - Create new book
- `GET /api/books/:id` - Get book by ID
- `PATCH /api/books/:id` - Update book
- `DELETE /api/books/:id` - Delete book
- `POST /api/borrow` - Borrow a book
- `GET /api/borrow` - Get borrowed books summary

---

## 🎯 Key Features in Detail

### **Book Management**

- **CRUD Operations**: Complete Create, Read, Update, Delete functionality
- **Real-time Updates**: Automatic UI updates when data changes
- **Form Validation**: Comprehensive client-side validation using Zod
- **Error Handling**: Graceful error handling with user-friendly messages

### **Borrowing System**

- **Quantity Selection**: Choose how many copies to borrow
- **Date Picker**: Intuitive calendar for due date selection
- **Availability Check**: Prevents borrowing unavailable books
- **Summary View**: Aggregated view of all borrowed books

### **User Interface**

- **Responsive Design**: Works seamlessly on all device sizes
- **Theme Toggle**: Switch between dark and light modes
- **Loading States**: Smooth loading indicators
- **Modal Dialogs**: Clean, accessible modal interfaces

---

## 🎨 Design System

### **Color Palette**

- **Primary**: Blue (#3B82F6) and Pink (#EC4899)
- **Background**: Light/Dark theme support
- **Text**: High contrast for accessibility

### **Typography**

- **Headings**: Bold, modern typography
- **Body Text**: Clean, readable fonts
- **Responsive**: Scales appropriately across devices

### **Components**

- **Buttons**: Multiple variants (primary, outline, ghost)
- **Forms**: Consistent styling with validation states
- **Cards**: Clean, modern card layouts
- **Tables**: Responsive data tables

---

## 🔒 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://library-management-system-server-puce.vercel.app/api
```

---

## 🚀 Deployment

### **Vercel (Recommended)**

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### **Netlify**

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

<div align="center">

**Made with ❤️ using React, TypeScript, and Tailwind CSS**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/library-management-system?style=social)](https://github.com/yourusername/library-management-system)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/library-management-system?style=social)](https://github.com/yourusername/library-management-system)

</div>
