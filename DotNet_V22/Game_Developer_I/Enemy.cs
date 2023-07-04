public class Enemy
{
    private string _name;
    private int _health;
    private List<Attack> _attackList;

    public string Name { get { return _name; } set { _name = value; } }
    public int Health { get { return _health; } }

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
}