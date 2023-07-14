#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ProductsCategories.Models;
public class Product
{
    [Key]
    public int ProductId { get; set; }

    [Required(ErrorMessage = "Name is required")]
    [MinLength(2, ErrorMessage = "Name must be at least 2 characters")]
    public string Name { get; set; }

    [Required(ErrorMessage = "Description is required")]
    [MinLength(20, ErrorMessage = "Description must be at least 20 characters")]
    public string Description { get; set; }

    [Required(ErrorMessage = "Price is required")]
    [Range(typeof(decimal), "0", "1000000", ErrorMessage = "Price must be a positive number")]
    public decimal? Price { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    public List<ProductCategory>? Categories { get; set; } = new List<ProductCategory>();
}
