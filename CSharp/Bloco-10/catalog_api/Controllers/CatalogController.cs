using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class CatalogController : ControllerBase
{

    private readonly IProductRepository _productRepository;
    public CatalogController(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_productRepository.GetProducts());
    }

    [HttpDelete("{id:int}")]
    public IActionResult Delete(int id)
    {
        var productDeleted = _productRepository.DeleteProduct(id);
        return productDeleted ? NoContent() : NotFound();
    }
}