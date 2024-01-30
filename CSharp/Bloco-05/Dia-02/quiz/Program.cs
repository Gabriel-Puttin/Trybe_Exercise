namespace Quiz.Models;
using Microsoft.EntityFrameworkCore;
public class Program
{
    public static void Main(string[] args)
    {
        DataContext context = new DataContext();

        var query = context.Quizzes.First();

        var titles = context.Entry(query).Collection(c => c.Questions).Query().Select(x => x.Title).ToList();

        Console.WriteLine(query.Description);

        foreach (var title in titles)
        {
            Console.WriteLine(title);
        }
    }
}