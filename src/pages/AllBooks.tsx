import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "@/redux/api/bookApi";
import type { responseBookDataType } from "@/types/bookTypes";
import { Pencil, Trash2, BookOpen } from "lucide-react";

const AllBooks = () => {
    const {data, isLoading} = useGetBooksQuery(undefined);
    if(isLoading){
        return <Loader />;
    }
    console.log(data);
//   const books = [
//     {
//       id: 1,
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       genre: "Classic",
//       isbn: "978-0061120084",
//       copies: 5,
//       available: true,
//     },
//     {
//       id: 2,
//       title: "1984",
//       author: "George Orwell",
//       genre: "Dystopian",
//       isbn: "978-0451524935",
//       copies: 3,
//       available: true,
//     },
//     {
//       id: 3,
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       genre: "Classic",
//       isbn: "978-0743273565",
//       copies: 2,
//       available: false,
//     },
//   ];

  return (
    <div className="max-w-screen-xl mx-auto min-h-[calc(100vh-80px)] py-6 px-2 sm:px-4">
        {}
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-700">
        All Books
      </h1>

      <div className="w-full overflow-x-auto rounded-lg border border-border bg-card shadow-sm">
        <table className="w-full text-xs sm:text-sm border-collapse">
          <thead className="bg-muted/50 text-muted-foreground">
            <tr className="border-b border-border">
              <th className="p-2 sm:px-3 sm:py-2 text-left font-medium">#</th>
              <th className="p-2 sm:px-3 sm:py-2 text-left font-medium">
                Title
              </th>
              <th className="p-2 sm:px-3 sm:py-2 text-left font-medium">
                Author
              </th>
              <th className="p-2 sm:px-3 sm:py-2 text-left font-medium">
                Genre
              </th>
              <th className="p-2 sm:px-3 sm:py-2 text-left font-medium">
                ISBN
              </th>
              <th className="p-2 sm:px-3 sm:py-2 text-left font-medium">
                Copies
              </th>
              <th className="p-2 sm:px-3 sm:py-2 text-left font-medium">
                Status
              </th>
              <th className="p-2 sm:px-3 sm:py-2 text-center font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {data.data.map((book: responseBookDataType, index:number) => (
              <tr
                key={book._id}
                className="bg-card hover:bg-muted/50 transition-colors"
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
                    <Button
                      variant="outline"
                      size="sm"
                      className={`h-7 px-2 text-xs ${
                        !book.available ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={!book.available}
                    >
                      <BookOpen className="h-3 w-3 mr-1" />
                      <span>Borrow</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-blue-600 dark:text-blue-400"
                    >
                      <Pencil className="h-3 w-3" />
                    </Button>
                    <Button
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
