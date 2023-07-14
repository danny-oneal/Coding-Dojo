using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using ProductsCategories.Models;
using Microsoft.AspNetCore.Identity;

using ProductsCategories.Lib;

namespace ProductsCategories.Controllers
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
            return RedirectToAction("New", "Product");
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