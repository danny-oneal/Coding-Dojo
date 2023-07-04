public class Attack
{
    private int _damageAmount;
    private string _name;
    public int DamageAmount
    {
        get { return _damageAmount; }
        set
        {
            if (value >= 5 && value <= 25)
            {
                _damageAmount = value;
            }
            else
            {
                _damageAmount = 5;
            };
        }
    }
    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }

    public Attack() { }
    public Attack(string name, int damage)
    {
        Name = name;
        DamageAmount = damage;
    }
}