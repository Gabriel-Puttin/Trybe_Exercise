namespace Dia_01;

public class Rocket
{
    string Name { get; set; }
    int Fuel { get; set; } = 0;
    decimal Price { get; set; }

    public Rocket(string name, decimal price, int v)
    {
        Name = name;
        Price = price;
    }
}
