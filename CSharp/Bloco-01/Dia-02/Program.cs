using System.Collections.Concurrent;
using System.Diagnostics.Metrics;

public class Program
{
  public static int[] intArr = new int[4] { 0, 1, 2, 3 };
  public static void Main()
  {
    long someIntNumber = 51;
    int longNumberCast = (int)someIntNumber;
    // int longNumberCast = Convert.ToInt32(someIntNumber);

    Console.WriteLine(longNumberCast);

    Console.WriteLine("Informe o raio de um círculo (deve ser um número inteiro)");
    string? response = Console.ReadLine();
    int radius = 0;
    bool canConvert = Int32.TryParse(response, out radius);

    if (canConvert)
    {
      const double pi = 3.14159;

      double circumference = pi * (2 * radius);

      Console.WriteLine("A circunferência de um circulo com raio " + radius + " é igual a " + circumference);
    }
    else
    {
      Console.WriteLine("O texto digitado não é um número inteiro.");
    }

    Program.Counter();
    Program.UseFor();
    Program.IndexOf(intArr, 3);
    Program.CountOf(intArr, 3);
    Program.CountEvenNumbers(intArr);
  }

  private static void Counter()
  {
    var count = 0;
    while (count <= 10)
    {
      Console.WriteLine("count " + count);
      count++;
    }

    /*var count = 0;
    do
    {
      Console.WriteLine("count " + count);
      count++;
    }
    while (count < 10);*/
  }

  private static void UseFor()
  {
    // for (int count = 0; count <= 3; count++)
    //   Console.WriteLine("count " + count);
    foreach (int count in intArr)
      Console.WriteLine("count " + count);
  }

  private static int CountOf(int[] numbers, int value)
  {
    var count = 0;

    foreach (var number in numbers)
    {
      if (number == value) count++;
    }

    return count;
  }

  private static int IndexOf(int[] numbers, int value)
  {
    var position = -1;

    for (int i = 0; i < numbers.Count(); i++)
    {
      if (numbers[i] == value)
      {
        position = i;
        break;
      }
    }

    return position;
  }

  private static int CountEvenNumbers(int[] numbers)
  {
    var count = 0;

    foreach (var number in numbers)
    {
      if (number % 2 != 0) continue;
      count++;
    }

    return count;
  }
}