using System;
using System.Threading.Tasks;

public class SayHello {
    public static void SaySyncHello() {
        Thread.Sleep(10000);
        Console.WriteLine("Hello, World!");
    }

    public static async Task SayAsyncHello() {
        Thread.Sleep(1000);
        Console.WriteLine("Hello, World!");
    }

    public static void Main(){
        Console.WriteLine("Instrução 1");
        Thread.Sleep(500);
        Console.WriteLine("Instrução 2");
        Thread.Sleep(500);
        Console.WriteLine("Instrução 3");
        Thread.Sleep(500);

        // SaySyncHello();
        Task.Run(() => SayAsyncHello());
    
        Console.WriteLine("Instrução 4");
        Thread.Sleep(500);
        Console.WriteLine("Instrução 5");
        Thread.Sleep(500);
        Console.WriteLine("Instrução 6");
    }
}
