public class RangedFighter : Enemy
{
    private int _distance;
    public int Distance { get { return _distance; } }
    public RangedFighter(string name) : base(name)
    {
        _distance = 5;
        AddAttack(new Attack("Shoot an Arrow", 20));
        AddAttack(new Attack("Throw a Knife", 15));
    }

    public override void PerformAttack(Enemy Target, Attack ChosenAttack)
    {
        if (_distance >= 10)
        {
            base.PerformAttack(Target, ChosenAttack);
        }
        else
        {
            Console.WriteLine($"{this.Name}'s attacked failed! Character must be further away to attack!");
        }
    }

    public void Dash()
    {
        _distance = 20;
    }

}