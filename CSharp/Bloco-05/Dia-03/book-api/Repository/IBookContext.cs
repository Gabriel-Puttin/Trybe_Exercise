using Microsoft.EntityFrameworkCore;
using book_api.Models;

namespace book_api.Repository
{
    public interface IBookContext
    {
        public DbSet<Author> Authors { get; set; }
        public DbSet<Book> Books { get; set; }
        public int SaveChanges();
    }
}
