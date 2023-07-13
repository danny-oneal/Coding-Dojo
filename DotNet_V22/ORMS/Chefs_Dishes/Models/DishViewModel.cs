public class DishViewModel
{
    public DishViewModel(string name, string chefFullName, int tastiness, int calories)
    {
        Name = name;
        ChefFullName = chefFullName;
        Tastiness = tastiness;
        Calories = calories;
    }
    public string Name { get; set; }
    public string ChefFullName { get; set; }
    public int Tastiness { get; set; }
    public int Calories { get; set; }
}