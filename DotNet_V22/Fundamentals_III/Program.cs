static void PrintList<T>(List<T> MyList)
{
    foreach (T item in MyList)
    {
        Console.WriteLine(item);
    }
}
List<string> TestStringList = new List<string>() { "Harry", "Steve", "Carla", "Jeanne" };
PrintList(TestStringList);

static void SumOfNumbers(List<int> IntList)
{
    int sum = 0;
    foreach (int item in IntList)
    {
        sum += item;
    }
    Console.WriteLine(sum);
}
List<int> TestIntList = new List<int>() { 2, 7, 12, 9, 3 };
// You should get back 33 in this example
SumOfNumbers(TestIntList);

static int FindMax(List<int> IntList)
{
    int max = IntList[0];

    foreach (int item in IntList)
    {
        if (item > max)
        {
            max = item;
        }
    }

    return max;
}
List<int> TestIntList2 = new List<int>() { -9, 12, 10, 3, 17, 5 };
// You should get back 17 in this example
FindMax(TestIntList2);

static List<int> SquareValues(List<int> IntList)
{
    List<int> result = new List<int>();

    foreach (int item in IntList)
    {
        result.Add(item * item);
    }

    PrintList(result);
    return result;
}
List<int> TestIntList3 = new List<int>() { 1, 2, 3, 4, 5 };
// You should get back [1,4,9,16,25], think about how you will show that this worked
SquareValues(TestIntList3);

static int[] NonNegatives(int[] IntArray)
{
    for (int i = 0; i < IntArray.Length; i++)
    {
        if (IntArray[i] < 0)
        {
            IntArray[i] = 0;
        }
    }
    Array.ForEach(IntArray, Console.WriteLine);
    return IntArray;
}
int[] TestIntArray = new int[] { -1, 2, 3, -4, 5 };
// You should get back [0,2,3,0,5], think about how you will show that this worked
NonNegatives(TestIntArray);

static void PrintDictionary<T>(Dictionary<string, T> MyDictionary)
{
    MyDictionary.ToList().ForEach(x => Console.WriteLine(x.Key + " - " + x.Value));
}
Dictionary<string, string> TestDict = new Dictionary<string, string>();
TestDict.Add("HeroName", "Iron Man");
TestDict.Add("RealName", "Tony Stark");
TestDict.Add("Powers", "Money and intelligence");
PrintDictionary(TestDict);

static bool FindKey(Dictionary<string, string> MyDictionary, string SearchTerm)
{
    return MyDictionary.ContainsKey(SearchTerm);
}
// Use the TestDict from the earlier example or make your own
// This should print true
Console.WriteLine(FindKey(TestDict, "RealName"));
// This should print false
Console.WriteLine(FindKey(TestDict, "Name"));

// Ex: Given ["Julie", "Harold", "James", "Monica"] and [6,12,7,10], return a dictionary
// {
//	"Julie": 6,
//	"Harold": 12,
//	"James": 7,
//	"Monica": 10
// } 
static Dictionary<string, int> GenerateDictionary(List<string> Names, List<int> Numbers)
{
    Dictionary<string, int> result = new Dictionary<string, int>();

    for (int i = 0; i < Names.Count; i++)
    {
        result.Add(Names[i], Numbers[i]);
    }

    return result;
}

List<string> Names = new List<string>() { "Julie", "Harold", "James", "Monica" };
List<int> Numbers = new List<int>() { 6, 12, 7, 10 };
Dictionary<string, int> Test = GenerateDictionary(Names, Numbers);
PrintDictionary(Test);
// We've shown several examples of how to set your tests up properly, it's your turn to set it up!
// Your test code here