public class MeleeFighter : Enemy
{
    public MeleeFighter(string name) : base(name)
    {
        AddAttack(new Attack("Punch", 20));
        AddAttack(new Attack("Kick", 15));
        AddAttack(new Attack("Tackle", 25));
    }

    public void Rage(Enemy Target)
    {
        Random random = new Random();
        int randomAttackIdx = random.Next(0, AttackList.Count);
        Attack randomAttack = AttackList[randomAttackIdx];
        randomAttack.DamageAmount += 10;
        PerformAttack(Target, randomAttack);
    }
}