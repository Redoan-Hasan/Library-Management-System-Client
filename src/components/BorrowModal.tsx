import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { DialogDescription } from "@radix-ui/react-dialog";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { BookOpen, CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import { useGetBorrowsMutation } from "@/redux/api/borrowApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const BorrowModal = ({
  availability,
  bookId,
  bookCopies,
}: {
  availability: boolean;
  bookId: string;
  bookCopies: number;
}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [getBorrows,{isError,isSuccess}] = useGetBorrowsMutation();
  const form = useForm({
    defaultValues: {
      quantity: "",
      dueDate: undefined,
    },
  });

  useEffect(()=>{
    if(isError){
      Swal.fire("Something went wrong");
    }
    if(isSuccess){
      Swal.fire("Book borrowed successfully");
    }
  },[isError,isSuccess])
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const borrowData = {
      book: bookId,
      quantity: Number(data.quantity),
      dueDate: data.dueDate.toISOString(),
    };
    await getBorrows(borrowData);
    navigate("/borrow-summary");
    setOpen(false);
    form.reset();
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "h-7 px-2 text-xs",
            !availability && "opacity-50 cursor-not-allowed"
          )}
          disabled={!availability}
        >
          <BookOpen className="h-3 w-3 mr-1" />
          <span>Borrow</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-3 bg-gradient-to-br from-blue-50/80 via-white/90 to-pink-50/80 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl border border-primary/30 shadow-2xl backdrop-blur-md max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center font-extrabold mb-1 text-primary dark:text-pink-400 tracking-tight drop-shadow-lg">
            Borrow Book
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-center text-sm text-primary dark:text-pink-400 font-medium tracking-wide mb-1">
          Wanna Borrow Book? Fill the details.
        </DialogDescription>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
            {/*copies field */}
            <FormField
              control={form.control}
              name="quantity"
              rules={{
                required: "Quantity is required",
                validate: (value) =>
                  Number(value) <= bookCopies ||
                  `Only ${bookCopies} copies available`,
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block font-semibold mb-1 text-primary dark:text-pink-300">
                    Quantity
                  </FormLabel>
                  <FormControl>
                    <input
                      type="number"
                      placeholder="How many copy you want to borrow?"
                      className="w-full px-4 py-2 rounded-lg border border-primary/30 bg-white/80 dark:bg-slate-900/60 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition shadow-sm"
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.quantity && (
                    <span className="text-xs text-red-500 dark:text-red-400 mt-1 block">
                      {form.formState.errors.quantity.message as string}
                    </span>
                  )}
                </FormItem>
              )}
            />

            {/* dueDate field  */}
            <FormField
              control={form.control}
              name="dueDate"
              rules={{ required: "Due date is required." }}
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="block font-semibold mb-1 text-primary dark:text-pink-300">
                    Due Date
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          type="button"
                          className={cn(
                            "w-full pl-3 text-left font-normal bg-white/80 dark:bg-slate-900/60",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className={cn(
                        "w-auto p-0 rounded-xl border-0 shadow-lg",
                        "bg-white/90 dark:bg-slate-900/95"
                      )}
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        captionLayout="dropdown"
                        startMonth={new Date("2020-01-01")}
                        endMonth={new Date("2035-12-31")}
                        disabled={(date) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0))
                        }
                      />
                    </PopoverContent>
                  </Popover>
                  {form.formState.errors.dueDate && (
                    <span className="text-xs text-red-500 dark:text-red-400 mt-1 block">
                      {form.formState.errors.dueDate.message as string}
                    </span>
                  )}
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg shadow-lg hover:from-pink-500 hover:to-primary transition-all duration-200"
              >
                Borrow Book
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BorrowModal;
