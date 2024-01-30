namespace Quiz.Models;
using Microsoft.EntityFrameworkCore;

public class DataContext : DbContext
{
  public DbSet<Quiz> Quizzes { get; set; }

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    //aqui alteramos a conexão para a sua base de dados ;)
    optionsBuilder.UseSqlServer(@"Server=127.0.0.1;Database=model;User=SA;Password=Password123!;");
  }
}