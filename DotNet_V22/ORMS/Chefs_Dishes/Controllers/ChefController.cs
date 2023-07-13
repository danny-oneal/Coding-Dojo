using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using ChefDishes.Models;
using Microsoft.AspNetCore.Identity;

using ChefDishes.Lib;

namespace ChefDishes.Controllers
{
    [Route("chefs")]
    public class ChefController : Controller
    {
        private DBRepository db;
        private readonly ILogger<ChefController> _logger;

        public ChefController(ILogger<ChefController> logger, DBRepository context)
        {
            _logger = logger;
            db = context;
        }

        [HttpGet("new")]
        public IActionResult New()
        {
            return View();
        }

        [HttpPost("create")]
        public IActionResult Create(Chef chef)
        {
            if (ModelState.IsValid)
            {
                db.Add(chef);
                db.SaveChanges();
                return RedirectToAction("Index", "Home");
            }
            return View("New");
        }

    }
}