using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("pokemon")]
public class PokemonController : ControllerBase
{
    HttpClient _httpClient;

    public PokemonController(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    [HttpGet("{name}")]
    public async Task<IActionResult> GetPokemon(string name)
    {
        var response = await _httpClient.GetAsync($"https://pokeapi.co/api/v2/pokemon/{name}");
        try
        {
            response.EnsureSuccessStatusCode();
            var content = await response.Content.ReadAsStringAsync();
            return Content(content, "application/json");
        }
        catch (HttpRequestException)
        {
            return NotFound("Pokemon not found");
        }
    }
}