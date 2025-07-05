import Loader from "@/components/Loader";
import { useCreateBooksMutation } from "@/redux/api/bookApi";
import type { IBook } from "@/types/bookTypes";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const genreOptions = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
] as const;

const AddBook = () => {
  const [createBooks, { isError, isLoading, isSuccess }] =
    useCreateBooksMutation();
  const navigate = useNavigate();
  useEffect(() => {
    if (isError) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong! Please try again.",
        icon: "error",
      });
    }
    if (isSuccess) {
      Swal.fire({
        title: "Success",
        text: "Book added successfully!",
        icon: "success",
      }).then(() => {
        navigate("/books");
      });
    }
  }, [isError, isSuccess, navigate]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBook>();

  if (isLoading) {
    return <Loader />;
  }

  const onSubmit: SubmitHandler<IBook> = async (data) => {
    await createBooks({
      ...data,
      isbn: String(data.isbn),
      copies: Number(data.copies),
      availbility: true,
    });
  };

  return (
    <div className="max-w-xl mx-auto min-h-[calc(100vh-133px)] py-8 px-2 sm:px-4 flex items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-7 bg-gradient-to-br from-blue-50/80 via-white/90 to-pink-50/80 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-8 rounded-2xl border border-primary/30 shadow-2xl backdrop-blur-md"
      >
        <h1 className="text-3xl text-center font-extrabold mb-8 text-primary dark:text-pink-400 tracking-tight drop-shadow-lg">
          📚 Add a New Book
        </h1>
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
            {...register("title", { required: "Title is required" })}
            className="w-full px-4 py-2 rounded-lg border border-primary/30 bg-white/80 dark:bg-slate-900/60 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition shadow-sm"
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
            {...register("author", { required: "Author is required" })}
            className="w-full px-4 py-2 rounded-lg border border-primary/30 bg-white/80 dark:bg-slate-900/60 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition shadow-sm"
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
            id="genre"
            {...register("genre", { required: "Genre is required" })}
            className="w-full px-4 py-2 rounded-lg border border-primary/30 bg-white/80 dark:bg-slate-900/60 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition shadow-sm"
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
            {...register("isbn", {
              required: "ISBN is required",
              validate: (value) =>
                String(value).length >= 13 || "ISBN must be at least 13 digits",
            })}
            className="w-full px-4 py-2 rounded-lg border border-primary/30 bg-white/80 dark:bg-slate-900/60 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition shadow-sm"
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
            id="description"
            {...register("description", {
              required: "Description is required",
              validate: (value) =>
                !/^\d+$/.test(value) ||
                "Description must be a text string or a mixture of text and number",
            })}
            className="w-full px-4 py-2 rounded-lg border border-primary/30 bg-white/80 dark:bg-slate-900/60 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition shadow-sm resize-none"
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
            id="copies"
            type="number"
            {...register("copies", {
              required: "Copies is required",
              min: { value: 1, message: "Copies must be at least 1" },
              valueAsNumber: true,
            })}
            className="w-full px-4 py-2 rounded-lg border border-primary/30 bg-white/80 dark:bg-slate-900/60 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition shadow-sm"
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
          className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg shadow-lg hover:from-pink-500 hover:to-primary transition-all duration-200"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
