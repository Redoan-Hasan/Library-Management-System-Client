export interface BorrowedBooksCardProps {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}

export interface BorrowBookResponse {
  _id: string;
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}