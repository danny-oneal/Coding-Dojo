#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace DojoSurvey.Models;
public class Survey
{
    [MinLength(2, ErrorMessage="Name must be at least 2 characters!")]
    public string Name {get; set;}
    [Required(ErrorMessage="Location is required!")]
    public string DojoLocation {get; set;}
    [Required(ErrorMessage="Language is required!")]

    public string FavoriteLanguage {get; set;}
    // not required
    [MinLength(20, ErrorMessage="Comment must be at least 20 characters!")]
    public string? Comment {get; set;}

    public override string ToString() => ($"Name: {Name}, Dojo Location: {DojoLocation}, Favorite Language: {FavoriteLanguage}, Comment: {Comment}");
}