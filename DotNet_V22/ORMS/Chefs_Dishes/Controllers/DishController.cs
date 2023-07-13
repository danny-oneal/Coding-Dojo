using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using ChefDishes.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

using ChefDishes.Lib;

namespace ChefDishes.Controllers
{
    [Route("dishes")]
    public class DishController : Controller
    {
        private DBRepository db;
        private readonly ILogger<DishController> _logger;

        public DishController(ILogger<DishController> logger, DBRepository context)
        {
            _logger = logger;
            db = context;
        }

        public IActionResult Index()
        {
            List<DishViewModel> dishes = db.Dishes
                .Include(d => d.Creator)
                .Select(d => new DishViewModel
                (
                    d.Name,
                    d.Creator.FirstName + " " + d.Creator.LastName,
                    d.Tastiness,
                    d.Calories.Value
                )).ToList();

            return View(dishes);
        }

        [HttpGet("new")]
        public IActionResult New()
        {
            ViewBag.Chefs = db.Chefs
                .Select(c => new
                {
                    ChefId = c.ChefId,
                    FullName = c.FirstName + " " + c.LastName
                }).ToList();

            return View();
        }

        [HttpPost("create")]
        public IActionResult Create(Dish chef)
        {
            if (ModelState.IsValid)
            {
                db.Add(chef);
                db.SaveChanges();
                return RedirectToAction("Index", "Home");
            }
            ViewBag.Chefs = db.Chefs
                .Select(c => new
                {
                    ChefId = c.ChefId,
                    FullName = c.FirstName + " " + c.LastName
                }).ToList();
            return View("New");
        }

    }
}