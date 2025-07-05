import BorrowModal from "@/components/BorrowModal";
import EditBookModal from "@/components/EditBookModal";
import Loader from "@/components/Loader";
import SingleBookViewModal from "@/components/SingleBookViewModal";
import { Button } from "@/components/ui/button";
import { useDeleteBookMutation, useGetBooksQuery } from "@/redux/api/bookApi";
import type { responseBookDataType } from "@/types/bookTypes";
import { Trash2 } from "lucide-react";
import { useEffect } from "react";
import Swal from "sweetalert2";

const AllBooks = () => {
  const { data, isLoading } = useGetBooksQuery("", {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  console.log(data);
  const [deleteBook, { isError }] = useDeleteBookMutation();
  useEffect(() => {
    if (isError) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong! Please try again.",
        icon: "error",
      });
    }
  }, [isError]);
  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBook(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="max-w-screen-xl mx-auto min-h-[calc(100vh-133px)] py-6 px-2 sm:px-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-700">
        All Books
      </h1>
      <div className="w-full overflow-x-auto rounded-lg border border-border bg-card shadow-sm">
        <table className="w-full text-xs sm:text-sm border-collapse">
          <thead className="bg-muted/50 text-muted-foreground">
            <tr className="border-b border-border">
              <th className="p-2 sm:px-3 sm:py-2 font-medium text-center">#</th>
              <th className="p-2 sm:px-3 sm:py-2 font-medium text-center">
                Title
              </th>
              <th className="p-2 sm:px-3 sm:py-2 font-medium text-center">
                Author
              </th>
              <th className="p-2 sm:px-3 sm:py-2 font-medium text-center">
                Genre
              </th>
              <th className="p-2 sm:px-3 sm:py-2 font-medium text-center">
                ISBN
              </th>
              <th className="p-2 sm:px-3 sm:py-2 font-medium text-center">
                Copies
              </th>
              <th className="p-2 sm:px-3 sm:py-2 font-medium text-center">
                Status
              </th>
              <th className="p-2 sm:px-3 sm:py-2 font-medium text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {data?.data?.map((book: responseBookDataType, index: number) => (
              <tr
                key={book._id}
                className="bg-card hover:bg-muted/50 transition-colors text-center"
              >
                <td className="p-2 sm:px-3 sm:py-2 text-foreground">
                  {index + 1}
                </td>
                <td className="p-2 sm:px-3 sm:py-2 text-foreground">
                  {book.title}
                </td>
                <td className="p-2 sm:px-3 sm:py-2 text-foreground">
                  {book.author}
                </td>
                <td className="p-2 sm:px-3 sm:py-2 text-foreground">
                  {book.genre}
                </td>
                <td className="p-2 sm:px-3 sm:py-2 text-muted-foreground">
                  {book.isbn}
                </td>
                <td className="p-2 sm:px-3 sm:py-2 text-foreground">
                  {book.copies}
                </td>
                <td className="p-2 sm:px-3 sm:py-2">
                  <span
                    className={`inline-flex items-center rounded-full px-1.5 py-0.5 text-xs font-medium ${
                      book.available
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {book.available ? "Available" : "Borrowed"}
                  </span>
                </td>
                <td className="p-2 sm:px-3 sm:py-2">
                  <div className="flex items-center justify-center gap-1">
                    <BorrowModal availability={book.available} bookId={book._id} bookCopies={book.copies} />
                    <SingleBookViewModal id={book._id} />
                    <EditBookModal id={book._id} />
                    <Button
                      onClick={() => handleDelete(book?._id)}
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-red-600 dark:text-red-400"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooks;
