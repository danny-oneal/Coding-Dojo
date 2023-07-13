#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ChefDishes.Models;

using ChefDishes.Lib;
public class Chef
{
    [Key]
    public int ChefId { get; set; }

    [Required(ErrorMessage = "First Name is required")]
    [MinLength(2, ErrorMessage = "First Name must be at least 2 characters")]
    public string FirstName { get; set; }

    [Required(ErrorMessage = "Last Name is required")]
    [MinLength(2, ErrorMessage = "Last Name must be at least 2 characters")]
    public string LastName { get; set; }

    [Required(ErrorMessage = "Birthdate is required")]
    [AtLeastEighteen]
    public DateTime? Birthday { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    public List<Dish>? Dishes { get; set; } = new List<Dish>();
}
