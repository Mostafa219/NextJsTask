import { books } from "./mybooks";

export async function GET() {
  return new Response(JSON.stringify({ data: books }), { status: 200 });
}

export async function POST(request) {
  const book = await request.json();
  let newBook = {
    title: book.title,
    description: book.description,
    id: books.length + 1,
  };
  books.push(newBook);

  return new Response(JSON.stringify(newBook));
}
export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get("id"));

  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books.splice(index, 1);
    return new Response("book deleted successfully", { status: 200 });
  }

  return new Response("book not found", { status: 404 });
}

export async function PUT(request) {
  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get("id"));
  const updatedBook = await request.json();

  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books[index] = { ...books[index], ...updatedBook };
    return new Response("book updated successfully", { status: 200 });
  }

  return new Response("book not found", { status: 404 });
}
