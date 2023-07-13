using System.ComponentModel.DataAnnotations;
namespace ChefDishes.Models;
public class Dish
{
    [Key]
    public int DishId { get; set; }
    [Required(ErrorMessage = "Name is required")]
    [MinLength(3, ErrorMessage = "Name must be at least 3 characters")]
    [MaxLength(50, ErrorMessage = "Name cannot be more than 50 characters")]
    public string Name { get; set; } 

    [Required(ErrorMessage = "Tastiness is required")]
    [Range(1, 5, ErrorMessage = "Tastiness must be between 1 and 5")]
    public int Tastiness { get; set; }
    
    [Required(ErrorMessage = "Calories are required")]
    [Range(1, int.MaxValue, ErrorMessage = "Calories must be greater than 0")]
    public int? Calories { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    [Required(ErrorMessage = "Chef is required")]
    public int ChefId { get; set; }

    public Chef? Creator { get; set; }
}