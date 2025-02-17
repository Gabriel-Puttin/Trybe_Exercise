using Microsoft.AspNetCore.Mvc;

public class PokemonService : IPokemonService
{
    private readonly HttpClient _httpClient;
    private const string _baseUrl = "https://pokeapi.co/api/v2/pokemon/";

    public PokemonService(HttpClient httpClient)
    {
        _httpClient = httpClient;
        _httpClient.BaseAddress = new Uri(_baseUrl);
    }

    public async Task<object> GetPokemonAsync(string name)
    {
        var response = await _httpClient.GetAsync(name);

        if (!response.IsSuccessStatusCode)
        {
            throw new HttpRequestException($"Pokemon '{name}' not found");
        }

        var result = await response.Content.ReadFromJsonAsync<object>();

        return result!;
    }
}