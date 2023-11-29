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
    }
}