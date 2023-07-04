
Enemy enemy = new Enemy("Opp 1");
enemy.AddAttack(new Attack("Uppercut", 15));
enemy.AddAttack(new Attack("Head Kick", 20));
enemy.AddAttack(new Attack("Crane Kick", 25));

for (int i = 0; i < 10; i++)
{
    enemy.RandomAttack();
}
