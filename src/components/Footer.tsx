const Footer = () => {
  return (
    <footer className="w-full mt-auto py-4 px-4 bg-gradient-to-r from-blue-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-t border-primary/10 dark:border-slate-700 shadow-inner">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center">
        <span className="text-sm text-gray-600 dark:text-gray-300 font-medium text-center">
          &copy; {new Date().getFullYear()} Library Management System. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;