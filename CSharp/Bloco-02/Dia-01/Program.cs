using System;

namespace Dia_01;

public class Program
{
    static void Main(string[] args)
    {
        var rocket1 = new Rocket("Apollo 17", 99);
        Console.WriteLine(rocket1.Name);

        Console.WriteLine(Trybe.NumberOfStudents);
        Trybe.Students = new string[] { "Leticia", "Silvio" };

        Trybe.PrintStudents();
    }
}
