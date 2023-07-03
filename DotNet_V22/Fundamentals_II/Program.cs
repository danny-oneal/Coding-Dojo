// Three Basic Arrays

int[] intArr = new int[10];

for (int i = 0; i < intArr.Length; i++)
{
    intArr[i] = i;
}

string[] strArr = new string[] { "Tim", "Martin", "Nikki", "Sara" };

bool[] boolArr = new bool[10];
bool val = true;
for (int i = 0; i < boolArr.Length; i++)
{
    boolArr[i] = val;
    val = !val;
}


Array.ForEach(intArr, Console.WriteLine);
Array.ForEach(strArr, Console.WriteLine);
Array.ForEach(boolArr, Console.WriteLine);

// List of Flavors
List<string> iceCreamFlavors = new List<string>();

iceCreamFlavors.Add("Vanilla");
iceCreamFlavors.Add("Chocolate");
iceCreamFlavors.Add("Butter Pecan");
iceCreamFlavors.Add("Mint Chocolate Chip");
iceCreamFlavors.Add("Strawberry");

Console.WriteLine(iceCreamFlavors.Count);
Console.WriteLine(iceCreamFlavors[2]);
iceCreamFlavors.RemoveAt(3);
Console.WriteLine(iceCreamFlavors.Count);

// User Dictionary
Dictionary<string, string> userIceCreamPref = new Dictionary<string, string>();
Random rand = new Random();
foreach (string name in strArr)
{
    userIceCreamPref.Add(name, iceCreamFlavors[rand.Next(iceCreamFlavors.Count)]);
}

foreach (KeyValuePair<string, string> kvp in userIceCreamPref)
{
    Console.WriteLine("{0} - {1}", kvp.Key, kvp.Value);
}



