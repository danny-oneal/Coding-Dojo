public class Enemy
{
    private string _name;
    protected int _health;
    private List<Attack> _attackList;

    public string Name { get { return _name; } set { _name = value; } }
    public int Health
    {
        get { return _health; }
        set
        {
            _health = value;
            if (_health < 0)
            {
                _health = 0;
            }
            else if (_health > 100)
            {
                _health = 100;
            }
            else
            {
                _health = value;
            }

        }
    }

    public List<Attack> AttackList { get { return _attackList; } }

    public Enemy() { }

    public Enemy(string name)
    {
        Name = name;
        _health = 100;
        _attackList = new List<Attack>();
    }

    public void RandomAttack()
    {
        Random random = new Random();
        int randomAttackIdx = random.Next(0, _attackList.Count);
        Attack randomAttack = _attackList[randomAttackIdx];
        Console.WriteLine($"{Name} attacked with {randomAttack.Name}!");
    }

    public void AddAttack(Attack attack)
    {
        _attackList.Add(attack);
    }

    public virtual void PerformAttack(Enemy Target, Attack ChosenAttack)
    {
        int oldHealth = Target.Health;
        Target._health -= ChosenAttack.DamageAmount;
        Console.WriteLine($"{this.Name} attacked {Target.Name} with {ChosenAttack.Name}! {Target.Name}'s health went from {oldHealth} to {Target.Health}.");
    }
}