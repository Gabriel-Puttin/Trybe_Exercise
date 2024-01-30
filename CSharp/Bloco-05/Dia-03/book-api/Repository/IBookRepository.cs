using book_api.Models;
using book_api.DTO;

namespace book_api.Repository
{
    public interface IBookRepository
    {
        Author AddAuthor(Author author);
        IEnumerable<Author> GetAuthors();

        Book AddBook(Book book);
        IEnumerable<BookDTO> GetBooks();
    }
}