using System.ComponentModel.DataAnnotations;
namespace ProductsCategories.Models;
public class Category
{
    [Key]
    public int CategoryId { get; set; }
    [Required(ErrorMessage = "Name is required")]
    [MinLength(3, ErrorMessage = "Name must be at least 3 characters")]
    [MaxLength(50, ErrorMessage = "Name cannot be more than 50 characters")]
    public string Name { get; set; } 

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    public List<ProductCategory>? Products { get; set; } = new List<ProductCategory>();
}