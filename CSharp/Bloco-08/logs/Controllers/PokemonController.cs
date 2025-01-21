using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("pokemon")]
public class PokemonController : ControllerBase
{
    HttpClient _httpClient;
    ILogger<PokemonController> _logger;

    public PokemonController(HttpClient httpClient, ILogger<PokemonController> logger)
    {
        _httpClient = httpClient;
        _logger = logger;
    }

    [HttpGet("{name}")]
    public async Task<IActionResult> GetPokemon(string name)
    {
        var response = await _httpClient.GetAsync($"https://pokeapi.co/api/v2/pokemon/{name}");
        try
        {
            response.EnsureSuccessStatusCode();
            var content = await response.Content.ReadAsStringAsync();
            _logger.LogInformation($"Pokemon found: {name}");
            return Content(content, "application/json");
        }
        catch (HttpRequestException)
        {
            _logger.LogWarning($"Pokemon not found: {name}");
            return NotFound("Pokemon not found");
        }
    }
}