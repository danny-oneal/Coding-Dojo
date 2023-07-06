public class MagicCaster : Enemy
{
    public MagicCaster(string name) : base(name)
    {
        _health = 80;
        AddAttack(new Attack("Fireball", 25));
        AddAttack(new Attack("Lightning Bolt", 20));
        AddAttack(new Attack("Staff Strike", 10));
    }

    public void Heal(Enemy Target)
    {
        int oldHealth = Target.Health;
        Target.Health += 40;
        Console.WriteLine($"{this.Name} healed {Target.Name}! {Target.Name} went from {oldHealth} to {Target.Health} health.");
    }
}