using System;

namespace Dia_01;

public class Rocket
{
    public string Name { get; set; }
    int _fuel { get; set; } = 0;
    public decimal Price { get; set; }

    int _maxFuel = 5000;

    public int FuelAsPercentage
    {
        get { return _fuel * 100 / _maxFuel; }
        set
        {
            if (value > 100 || value < 0)
                throw new ArgumentOutOfRangeException();

            _fuel = (value * _maxFuel) / 100;
        }
    }

    public Rocket(string name, decimal price)
    {
        Name = name;
        Price = price;
    }
}
