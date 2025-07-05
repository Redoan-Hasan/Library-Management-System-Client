import BorrowedBooksCard from "@/components/BorrowedBooksCard";
import { useGetBorrowsQuery } from "@/redux/api/borrowApi";
import type { BorrowBookResponse } from "@/types/borrowTypes";
import { Loader } from "lucide-react";

const BorrowSummary = () => {
  const { data, isLoading, isError } = useGetBorrowsQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader className="animate-spin w-12 h-12 text-primary" />
      </div>
    );
  }

  if (isError || !data?.data || data.data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
          alt="No Data"
          className="w-32 h-32 mb-4 opacity-60"
        />
        <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
          No borrowed books found!
        </h2>
      </div>
    );
  }

  const borrowedSummary = data.data;

  return (
    <div className="max-w-screen-xl mx-auto min-h-[calc(100vh-133px)] px-2 sm:px-5 py-8">
      <h1 className="text-3xl font-bold text-primary dark:text-pink-400 mb-8 text-center">
        Borrowed Books Summary
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
        {borrowedSummary.map((borrow:BorrowBookResponse) => (
          <BorrowedBooksCard
            key={borrow._id}
            totalQuantity={borrow.totalQuantity}
            book={borrow.book}
          />
        ))}
      </div>
    </div>
  );
};

export default BorrowSummary;