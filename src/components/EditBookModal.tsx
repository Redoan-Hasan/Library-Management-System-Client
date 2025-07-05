import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useFindOneBookQuery, useUpdateBookMutation } from "@/redux/api/bookApi";
import { Pencil } from "lucide-react";
import Loader from "./Loader";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { IBook } from "@/types/bookTypes";
import Swal from "sweetalert2";
import { useEffect } from "react";

const genreOptions = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
] as const;
const EditBookModal = ({ id }: { id: string }) => {
  const { data, isLoading , isError, isSuccess } = useFindOneBookQuery(id);
  const[updateBook,{isSuccess : updateSuccess,isError:updateError,isLoading: updateLoading}] = useUpdateBookMutation();
  const bookData = data?.data;

    useEffect(() => {
      if (isError || updateError) {
        Swal.fire({
          title: "Error",
          text: "Something went wrong! Please try again.",
          icon: "error",
        });
      }
      if ( updateSuccess) {
        Swal.fire({
          title: "Success",
          text: "Book updated successfully!",
          icon: "success",
        })
      }
    }, [isError, isSuccess, updateSuccess,updateError]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBook>();

    const onSubmit: SubmitHandler<IBook> = async (data) => {
    const mainData = {...data,id}
    console.log(mainData);
    await updateBook(mainData)

  };
  if (isLoading || updateLoading) {
    return <Loader />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 text-blue-600 dark:text-blue-400"
        >
          <Pencil className="h-3 w-3" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-3 bg-gradient-to-br from-blue-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 shadow-2xl rounded-2xl max-h-[90vh] overflow-auto ">
        <div className="p-3">
          <DialogHeader>
            <DialogTitle className="text-3xl text-center font-extrabold  text-primary dark:text-pink-400 tracking-tight drop-shadow-lg">
              Edit Book Details
            </DialogTitle>
            <DialogDescription className="text-center text-sm text-primary dark:text-pink-400 font-medium tracking-wide">
              Wanna edit the book details? You can do it here.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full rounded-2xl backdrop-blur-md"
          >
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block font-semibold mb-1 text-primary dark:text-pink-300"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                defaultValue={bookData?.title}
                {...register("title", { required: "Title is required" })}
                className="w-full px-4 py-2 mb-4 rounded-lg border border-primary/30 bg-white/80 dark:bg-slate-900/60 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition shadow-sm"
                placeholder="Book Title"
              />
              {errors.title && (
                <span className="text-xs text-red-500 dark:text-red-400 mt-1 block">
                  {errors.title.message}
                </span>
              )}
            </div>
            {/* Author */}
            <div>
              <label
                htmlFor="author"
                className="block font-semibold mb-1 text-primary dark:text-pink-300"
              >
                Author
              </label>
              <input
                id="author"
                type="text"
                defaultValue={bookData?.author}
                {...register("author", { required: "Author is required" })}
                className="w-full px-4 py-2 mb-4 rounded-lg border border-primary/30 bg-white/80 dark:bg-slate-900/60 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition shadow-sm"
                placeholder="Author Name"
              />
              {errors.author && (
                <span className="text-xs text-red-500 dark:text-red-400 mt-1 block">
                  {errors.author.message}
                </span>
              )}
            </div>
            {/* Genre */}
            <div>
              <label
                htmlFor="genre"
                className="block font-semibold mb-1 text-primary dark:text-pink-300"
              >
                Genre
              </label>
              <select
                defaultChecked={bookData?.genre}
                defaultValue={bookData?.genre}
                id="genre"
                {...register("genre", { required: "Genre is required" })}
                className="w-full px-4 py-2 mb-4 rounded-lg border border-primary/30 bg-white/80 dark:bg-slate-900/60 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition shadow-sm"
              >
                {genreOptions.map((g) => (
                  <option key={g} value={g}>
                    {g.replace("_", " ")}
                  </option>
                ))}
              </select>
              {errors.genre && (
                <span className="text-xs text-red-500 dark:text-red-400 mt-1 block">
                  {errors.genre.message}
                </span>
              )}
            </div>
            {/* ISBN */}
            <div>
              <label
                htmlFor="isbn"
                className="block font-semibold mb-1 text-primary dark:text-pink-300"
              >
                ISBN
              </label>
              <input
                id="isbn"
                type="number"
                defaultValue={bookData?.isbn}
                {...register("isbn", {
                  required: "ISBN is required",
                  validate: (value) =>
                    String(value).length >= 13 ||
                    "ISBN must be at least 13 digits",
                })}
                className="w-full px-4 py-2 mb-4 rounded-lg border border-primary/30 bg-white/80 dark:bg-slate-900/60 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition shadow-sm"
                placeholder="ISBN Number"
                min={1}
                step={1}
              />
              {errors.isbn && (
                <span className="text-xs text-red-500 dark:text-red-400 mt-1 block">
                  {errors.isbn.message}
                </span>
              )}
            </div>
            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block font-semibold mb-1 text-primary dark:text-pink-300"
              >
                Description
              </label>
              <textarea
                defaultValue={bookData?.description}
                id="description"
                {...register("description", {
                  required: "Description is required",
                  validate: (value) =>
                    !/^\d+$/.test(value) ||
                    "Description must be a text string or a mixture of text and number",
                })}
                className="w-full px-4 py-2 mb-4 rounded-lg border border-primary/30 bg-white/80 dark:bg-slate-900/60 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition shadow-sm resize-none"
                placeholder="Book Description"
                rows={3}
              />
              {errors.description && (
                <span className="text-xs text-red-500 dark:text-red-400 mt-1 block">
                  {errors.description.message}
                </span>
              )}
            </div>
            {/* Copies */}
            <div>
              <label
                htmlFor="copies"
                className="block font-semibold mb-1 text-primary dark:text-pink-300"
              >
                Copies
              </label>
              <input
              defaultValue={bookData?.copies}
                id="copies"
                type="number"
                {...register("copies", {
                  required: "Copies is required",
                  min: { value: 1, message: "Copies must be at least 1" },
                  valueAsNumber: true,
                })}
                className="w-full px-4 py-2 mb-4 rounded-lg border border-primary/30 bg-white/80 dark:bg-slate-900/60 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition shadow-sm"
                placeholder="Number of Copies"
                min={1}
                step={1}
              />
              {errors.copies && (
                <span className="text-xs text-red-500 dark:text-red-400 mt-1 block">
                  {errors.copies.message}
                </span>
              )}
            </div>

              <button
                type="submit"
                className="w-full py-2 mb-4 rounded-xl bg-gradient-to-r from-primary mt-4 to-pink-500 text-white font-bold text-lg shadow-lg hover:from-pink-500 hover:to-primary transition-all duration-200"
              >
                Add Book
              </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default EditBookModal;
