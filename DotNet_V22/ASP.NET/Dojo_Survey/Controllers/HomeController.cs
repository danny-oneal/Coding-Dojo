using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using DojoSurvey.Models;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace DojoSurvey.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            List<string> dojoLocations = new List<string>()
            {
                "Seattle",
                "New York",
                "Chicago",
                "Dallas",
                "Miami"
            };

            List<string> languages = new List<string>()
            {
                "C#",
                "Java",
                "JavaScript",
                "TypeScript",
                "Go"
            };

            ViewBag.DojoLocation = new SelectList(dojoLocations);
            ViewBag.Language = new SelectList(languages);
            return View();
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