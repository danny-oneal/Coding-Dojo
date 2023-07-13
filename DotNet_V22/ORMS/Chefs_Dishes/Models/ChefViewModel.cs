public class ChefViewModel
{
    public ChefViewModel(string fullName, int age, int numOfDishes)
    {
        FullName = fullName;
        Age = age;
        NumOfDishes = numOfDishes;
    }
    public string FullName { get; set; }
    public int Age { get; set; }
    public int NumOfDishes { get; set; }
}