namespace book_api.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Book
    {
        [Key]
        public int BookId { get; set; }
        public string? Title { get; set; }
        public int ReleaseYear { get; set; }
        public Author? Author { get; set; }

        [ForeignKey("AuthorId")]
        public int AuthorId { get; set; }
    }
}
