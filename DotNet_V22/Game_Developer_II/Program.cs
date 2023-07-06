// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
MeleeFighter meleeFighter = new MeleeFighter("Melee Fighter");
RangedFighter rangedFighter = new RangedFighter("Ranged Fighter");
MagicCaster magicCaster = new MagicCaster("Magic Caster");

meleeFighter.PerformAttack(rangedFighter, meleeFighter.AttackList.Find(attack => attack.Name == "Kick")!);
meleeFighter.Rage(magicCaster);
rangedFighter.PerformAttack(magicCaster, rangedFighter.AttackList.Find(attack => attack.Name == "Shoot an Arrow")!);
rangedFighter.Dash();
rangedFighter.PerformAttack(magicCaster, rangedFighter.AttackList.Find(attack => attack.Name == "Shoot an Arrow")!);
magicCaster.PerformAttack(meleeFighter, magicCaster.AttackList.Find(attack => attack.Name == "Fireball")!);
magicCaster.Heal(rangedFighter);
magicCaster.Heal(magicCaster);