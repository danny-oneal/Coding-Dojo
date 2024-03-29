using System.ComponentModel.DataAnnotations;
namespace ProductsCategories.Models;
public class ProductCategory
{
    [Key]
    public int ProductCategoryId { get; set; }

    public int ProductId { get; set; }
    public int CategoryId { get; set; }

    public Product? Product { get; set; }
    public Category? Category { get; set; }
}