namespace colecoes;
public class Program
{
    public static void Main(string[] args)
    {
        List<string> vehicles = new List<string>(){ "moto", "carro", "avião" };
        vehicles.Add("navio");
        vehicles.Remove("navio");
        vehicles.RemoveAt(2);
        vehicles.Sort();

        foreach (var item in vehicles)
        {
            Console.WriteLine(item);
        }
        Console.WriteLine(vehicles.IndexOf("moto"));

        
    }
}