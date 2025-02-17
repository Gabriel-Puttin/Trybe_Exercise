using Microsoft.AspNetCore.Mvc;

public class PokemonController : ControllerBase
{
    private readonly IPokemonService _pokemonService;

    public PokemonController(IPokemonService pokemonService)
    {
        _pokemonService = pokemonService;
    }

    [HttpGet]
    [Route("pokemon/{name}")]
    public async Task<IActionResult> GetPokemonAsync(string name)
    {
        try
        {
            var pokemon = await _pokemonService.GetPokemonAsync(name);

            return Ok(pokemon);
        }
        catch (HttpRequestException ex)
        {
            return NotFound(new { message = ex.Message });
        }
    }
}