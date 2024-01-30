namespace book_api.Models
{
    using System.ComponentModel.DataAnnotations;
    public class Author
    {
        [Key]
        public int AuthorId { get; set; }
        public string? Name { get; set; }
        public ICollection<Book>? books {get; set;} = null;
    }
}
