using Microsoft.AspNetCore.Mvc;
public class CepService : ICepService
{
    private readonly HttpClient _httpClient;
    private const string _baseUrl = "https://viacep.com.br/ws/";

    public CepService(HttpClient httpClient)
    {
        _httpClient = httpClient;
        _httpClient.BaseAddress = new Uri(_baseUrl);
    }
    public async Task<object> GetCep(string cep)
    {
        var response = await _httpClient.GetAsync($"{cep}/json/");
    
        if (!response.IsSuccessStatusCode)
            throw new HttpRequestException("CEP não encontrado");

        var result = await response.Content.ReadFromJsonAsync<object>();
        return result!;
    }
}