public interface IPokemonService
{
    Task<object> GetPokemonAsync(string name);
}