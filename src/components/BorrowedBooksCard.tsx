import type { BorrowedBooksCardProps } from "@/types/borrowTypes";
const BorrowedBooksCard = ({ totalQuantity, book }: BorrowedBooksCardProps) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-slate-900 border border-primary/20 dark:border-slate-700 rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-primary dark:text-pink-400">
          {book.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <span className="font-semibold">ISBN:</span> {book.isbn}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Total Borrowed Copies:</span> {totalQuantity}
        </p>
      </div>
    </div>
  );
};

export default BorrowedBooksCard;
