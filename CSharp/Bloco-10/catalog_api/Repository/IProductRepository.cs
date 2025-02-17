public interface IProductRepository

{
    public bool DeleteProduct(int id);
    public List<Product> GetProducts();
}