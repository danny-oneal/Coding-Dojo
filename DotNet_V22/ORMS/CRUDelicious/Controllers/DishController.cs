// Using statements
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CRUDelicious.Models;

namespace CRUDelicious.Controllers;
[
    Route("dishes")
]
public class DishController : Controller
{
    private readonly ILogger<Dish> _logger;
    // Add a private variable of type DBContext (or whatever you named your context file)
    private DBContext db;
    // Here we can "inject" our context service into the constructor 
    // The "logger" was something that was already in our code, we're just adding around it   
    public DishController(ILogger<Dish> logger, DBContext context)
    {
        _logger = logger;
        // When our Dish is instantiated, it will fill in _context with context
        // Remember that when context is initialized, it brings in everything we need from DbContext
        // which comes from Entity Framework Core
        db = context;
    }

    [HttpGet("new")]
    public IActionResult New()
    {
        return View();
    }

    [HttpPost("create")]
    public IActionResult Create(Dish newDish)
    {
        if (ModelState.IsValid)
        {
            db.Dishes.Add(newDish);
            db.SaveChanges();
            return RedirectToAction("Index", "Home");
        }
        else
        {
            return View("New");
        }
    }

    [HttpGet("{dishId}")]
    public IActionResult View(int dishId)
    {
        Dish dish = db.Dishes.FirstOrDefault(d => d.DishId == dishId);
        if (dish == null)
        {
            return RedirectToAction("Index", "Home");
        }
        else
        {
            return View(dish);
        }
    }

    [HttpGet("{dishId}/edit")]
    public IActionResult Edit(int dishId)
    {
        Dish dish = db.Dishes.FirstOrDefault(d => d.DishId == dishId);
        if (dish == null)
        {
            return RedirectToAction("Index", "Home");
        }
        else
        {
            return View(dish);
        }
    }

    [HttpPost("{dishId}/update")]
    public IActionResult Update(int dishId, Dish updatedDish)
    {
        if (ModelState.IsValid)
        {
            Dish dish = db.Dishes.FirstOrDefault(d => d.DishId == dishId);
            if (dish == null)
            {
                _logger.LogError("Dish not found");
                return RedirectToAction("Index", "Home");
            }

            dish.Name = updatedDish.Name;
            dish.Chef = updatedDish.Chef;
            dish.Tastiness = updatedDish.Tastiness;
            dish.Calories = updatedDish.Calories;
            dish.Description = updatedDish.Description;
            dish.UpdatedAt = DateTime.Now;

            db.SaveChanges();

            return RedirectToAction("Index", "Home");
        }
        else
        {
            return View("Edit");
        }
    }

    [HttpPost("{dishId}/destroy")]
    public IActionResult Delete(int dishId)
    {
        Dish dish = db.Dishes.FirstOrDefault(d => d.DishId == dishId);

        if (dish == null)
        {
            _logger.LogError("Dish not found");
            return RedirectToAction("Index");
        }

        db.Dishes.Remove(dish);
        db.SaveChanges();

        return RedirectToAction("Index", "Home");
    }

}