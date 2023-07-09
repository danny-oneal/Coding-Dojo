#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace DojoSurvey.Models;
public class Survey
{
    public string Name {get; set;}
    public string DojoLocation {get; set;}

    public string FavoriteLanguage {get; set;}
    public string Comment {get; set;}

    public override string ToString() => ($"Name: {Name}, Dojo Location: {DojoLocation}, Favorite Language: {FavoriteLanguage}, Comment: {Comment}");
}