using Microsoft.AspNetCore.Mvc;
using book_api.Models;
using book_api.Repository;

namespace book_api.Controllers
{
    [ApiController]
    [Route("books")]

    public class BookController : Controller
    {
        protected readonly IBookRepository _repository;
        public BookController(IBookRepository repository)
        {
            _repository = repository;
        }

        [HttpPost]
        public IActionResult Add([FromBody] Book book)
        {
            return Created("", _repository.AddBook(book));
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_repository.GetBooks());
        }
    }
}
