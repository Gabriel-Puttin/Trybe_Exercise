namespace Quiz.Models;
public class Question
{
    public int QuestionId { get; internal set; }
    public int QuizId { get; set; }
    public string? Title { get; set; }
}