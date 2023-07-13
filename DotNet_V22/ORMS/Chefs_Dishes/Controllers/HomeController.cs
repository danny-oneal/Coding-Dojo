using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using ChefDishes.Models;
using Microsoft.AspNetCore.Identity;

using ChefDishes.Lib;

namespace ChefDishes.Controllers
{
    public class HomeController : Controller
    {
        private DBRepository db;
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger, DBRepository context)
        {
            _logger = logger;
            db = context;
        }

        public IActionResult Index()
        {

            List<ChefViewModel> chefs = db.Chefs.Select(c => new ChefViewModel
                (
                    c.FirstName + " " + c.LastName,
                    DateTime.Now.Year - c.Birthday.Value.Year - (DateTime.Now.DayOfYear < c.Birthday.Value.DayOfYear ? 1 : 0),
                    c.Dishes.Count
                )).ToList();

            return View(chefs);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

    }
}