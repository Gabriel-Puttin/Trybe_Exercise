using System.Collections.ObjectModel;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace Quiz.Models;
public class Quiz
{
    public int QuizId { get; set; }
    public string Description { get; set; } = default!;

    private Collection<Question> _questions = new Collection<Question>();
    public virtual Collection<Question> Questions
    {
        get => _lazyLoader?.Load(this, ref _questions);
        set => _questions = value;
    }


    private readonly ILazyLoader _lazyLoader;
    public Quiz(ILazyLoader lazyLoader)
    {
        _lazyLoader = lazyLoader;
    }
}