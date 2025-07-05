import React from "react";

interface BorrowedBooksCardProps {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
    author?: string;
    coverImage?: string;
    genre?: string;
  };
}

const BorrowedBooksCard: React.FC<BorrowedBooksCardProps> = ({ totalQuantity, book }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-br from-white via-blue-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-primary/20 dark:border-slate-700 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
      {book.coverImage && (
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-48 object-cover object-center"
        />
      )}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-primary dark:text-pink-400 mb-2 truncate">{book.title}</h2>
          {book.author && (
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
              <span className="font-semibold">Author:</span> {book.author}
            </p>
          )}
          {book.genre && (
            <span className="inline-block bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 text-xs px-2 py-1 rounded-full mb-2">
              {book.genre}
            </span>
          )}
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold">ISBN:</span> {book.isbn}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs px-3 py-1 rounded-full font-semibold">
            Borrowed: {totalQuantity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBooksCard;