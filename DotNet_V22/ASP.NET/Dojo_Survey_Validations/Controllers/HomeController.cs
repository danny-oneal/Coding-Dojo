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

        private void PopulateViewBag()
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
        }

        public IActionResult Index()
        {
            PopulateViewBag();  
            return View();
        }

        [HttpPost("process")]
        public IActionResult Process(Survey survey)
        {
            if (ModelState.IsValid)
            {
                _logger.LogInformation("model is valid");
                ViewBag.Survey = survey;
                return View("Result", survey);
            }
            else
            {
                _logger.LogInformation("model is invalid");
                _logger.LogInformation(survey.ToString());
                PopulateViewBag();
                return View("Index");
            }
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