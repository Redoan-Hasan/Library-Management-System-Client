import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useFindOneBookQuery } from "@/redux/api/bookApi";
import { Eye } from "lucide-react";
import Loader from "./Loader";

const SingleBookViewModal = ({ id }: { id: string }) => {
  const { data, isLoading } = useFindOneBookQuery(id);
  const book = data?.data;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 text-emerald-600 dark:text-emerald-400"
        >
          <Eye className="h-3 w-3" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0 bg-gradient-to-br from-blue-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-0 shadow-2xl rounded-2xl">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-extrabold text-primary dark:text-pink-400 mb-2">
              Book Details
            </DialogTitle>
            <DialogDescription className="text-center text-sm mb-4 text-blue-700 dark:text-pink-300 font-medium tracking-wide">
              Detailed information about this book including author, genre,
              ISBN, copies, and availability.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-blue-700 dark:text-pink-300">
                Title:
              </span>
              <span className="text-foreground">{book.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-blue-700 dark:text-pink-300">
                Author:
              </span>
              <span className="text-foreground">{book.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-blue-700 dark:text-pink-300">
                Genre:
              </span>
              <span className="text-foreground">
                {book.genre.replace("_", " ")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-blue-700 dark:text-pink-300">
                ISBN:
              </span>
              <span className="text-foreground">{book.isbn}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-blue-700 dark:text-pink-300">
                Copies:
              </span>
              <span className="text-foreground">{book.copies}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-blue-700 dark:text-pink-300">
                Availability:
              </span>
              <span
                className={`inline-block min-w-[90px] text-center px-2 py-0.5 rounded-full text-xs font-semibold ${
                  book.available
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                }`}
              >
                {book.available ? "Available" : "Borrowed"}
              </span>
            </div>
            <div>
              <span className="font-semibold text-blue-700 dark:text-pink-300">
                Description:
              </span>
              <p className="mt-1 text-foreground text-sm bg-muted/50 dark:bg-muted/30 rounded-lg p-2">
                {book.description}
              </p>
            </div>
          </div>
          <DialogClose asChild>
            <Button
              className="w-full mt-6 py-2 rounded-xl font-bold text-lg shadow-lg transition-all duration-200
                bg-gradient-to-r from-primary to-pink-500 text-white
                dark:from-pink-700 dark:to-primary dark:text-white"
            >
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default SingleBookViewModal;
