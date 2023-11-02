using System;

namespace Dia_01;

public class Program
{
    public static void Main()
    {
        Rocket rocket1 = new Rocket("Apollo 17", 99,99);
        Console.WriteLine("Nome do foquete é " + rocket1.Name);
    }
}