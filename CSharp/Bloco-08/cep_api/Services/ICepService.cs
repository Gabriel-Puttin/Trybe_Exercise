public interface ICepService
{
    Task<object> GetCep(string cep);
}