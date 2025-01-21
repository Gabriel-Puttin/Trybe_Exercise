using Microsoft.AspNetCore.Mvc;

public class CepController : ControllerBase
{
    private readonly ICepService _cepService;

    public CepController(ICepService cepService)
    {
        _cepService = cepService;
    }

    [HttpGet]
    [Route("cep/{cep}")]
    public async Task<object> GetCep(string cep)
    {
        try
        {
            var address = await _cepService.GetCep(cep);
            return Ok(address);
        }
        catch (HttpRequestException e)
        {
            return NotFound(new { message = e.Message });
        }
    }
}
