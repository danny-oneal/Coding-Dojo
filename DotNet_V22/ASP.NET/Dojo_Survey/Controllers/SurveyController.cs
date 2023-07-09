using Microsoft.AspNetCore.Mvc;
using DojoSurvey.Models;

namespace DojoSurvey.Controllers;

public class SurveyController : Controller
{
    private readonly ILogger<SurveyController> _logger;

    public SurveyController(ILogger<SurveyController> logger)
    {
        _logger = logger;
    }

    [HttpPost("process")]
    public IActionResult Process(Survey survey)
    {
        _logger.LogInformation(survey.ToString());
        ViewBag.Survey = survey;
        return View("Result");
    }
}