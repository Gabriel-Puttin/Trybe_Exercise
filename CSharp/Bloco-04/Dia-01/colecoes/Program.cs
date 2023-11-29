namespace colecoes;

internal class Artist
{
    public string? name { get; set; }
    public int listeners { get; set; }
}
public class Program
{
    public static void Main(string[] args)
    {
        List<string> vehicles = new List<string>() { "moto", "carro", "avião" };
        vehicles.Add("navio");
        vehicles.Remove("navio");
        vehicles.RemoveAt(2);
        vehicles.Sort();

        foreach (var item in vehicles)
        {
            Console.WriteLine(item);
        }
        Console.WriteLine(vehicles.IndexOf("moto"));

        string[] games = { "Fortnite", "Valorant", "Destiny", "Call of Duty", "World of Warcraft" };

        IEnumerable<string> filteredGames = from game in games
                                            where game.Contains('a')
                                            select game;
        foreach (var game in filteredGames)
        {
            Console.WriteLine(game);
        }

        var artists = new List<Artist>
        {
            new Artist { name = "Raul Seixas", listeners = 50000 },
            new Artist { name = "Mozart", listeners = 15000 },
            new Artist { name = "Elvis Presley", listeners = 25000 },
            new Artist { name = "Bob Dylan", listeners = 30000 },
            new Artist { name = "Guns N' Roses", listeners = 40000 },
        };

        var topListeners =
               from artist in artists
               where artist.listeners > 30000
               select artist.name;

        foreach (var artist in topListeners)
        {
            Console.WriteLine(artist);
        }
        List<Customer> customers = new List<Customer>
        {
            new Customer { Id = 1, Name = "Rebeca", City = "Recife", Password =  "706632"},
            new Customer { Id = 2, Name = "José", City = "Manaus", Password =  "128620"},
            new Customer { Id = 3, Name = "Sandra", City = "Salvador", Password =  "043407"}
        };
        var customersList = from customer in customers
                            select new CustomerBasicData { Name = customer.Name, City = customer.City };

        foreach (CustomerBasicData customer in customersList)
        {
            Console.WriteLine(customer.Name + " - City: " + customer.City);
        }

        List<Author> authors = new List<Author>
        {
            new Author { Id = 1, Name = "Clarice Lispector"},
            new Author { Id = 2, Name = "Jorge Amado" }
        };
        List<Book> books = new List<Book>
        {
            new Book { Name = "Capitães da Areia", AuthorId = 2},
            new Book { Name = "Água Viva", AuthorId = 1},
            new Book { Name = "A hora da Estrela", AuthorId = 1},
            new Book { Name = "Cacau", AuthorId = 2},
        };
        var booksList = from book in books
                        from author in authors
                        where author.Id == book.AuthorId
                        orderby author.Name
                        select new BookDTO { BookName = book.Name, AuthorName = author.Name };

        foreach (BookDTO book in booksList)
        {
            Console.WriteLine(book.BookName + " - Author: " + book.AuthorName);
        }
    }
}