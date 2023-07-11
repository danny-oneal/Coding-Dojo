List<Eruption> eruptions = new List<Eruption>()
{
    new Eruption("La Palma", 2021, "Canary Is", 2426, "Stratovolcano"),
    new Eruption("Villarrica", 1963, "Chile", 2847, "Stratovolcano"),
    new Eruption("Chaiten", 2008, "Chile", 1122, "Caldera"),
    new Eruption("Kilauea", 2018, "Hawaiian Is", 1122, "Shield Volcano"),
    new Eruption("Hekla", 1206, "Iceland", 1490, "Stratovolcano"),
    new Eruption("Taupo", 1910, "New Zealand", 760, "Caldera"),
    new Eruption("Lengai, Ol Doinyo", 1927, "Tanzania", 2962, "Stratovolcano"),
    new Eruption("Santorini", 46, "Greece", 367, "Shield Volcano"),
    new Eruption("Katla", 950, "Iceland", 1490, "Subglacial Volcano"),
    new Eruption("Aira", 766, "Japan", 1117, "Stratovolcano"),
    new Eruption("Ceboruco", 930, "Mexico", 2280, "Stratovolcano"),
    new Eruption("Etna", 1329, "Italy", 3320, "Stratovolcano"),
    new Eruption("Bardarbunga", 1477, "Iceland", 2000, "Stratovolcano")
};
// Example Query - Prints all Stratovolcano eruptions
// IEnumerable<Eruption> stratovolcanoEruptions = eruptions.Where(c => c.Type == "Stratovolcano");
// PrintEach(stratovolcanoEruptions, "Stratovolcano eruptions.");
// Execute Assignment Tasks here!

// Helper method to print each item in a List or IEnumerable. This should remain at the bottom of your class!
static void PrintEach(IEnumerable<Eruption> items, string msg = "")
{
    Console.WriteLine("\n" + msg);
    foreach (Eruption item in items)
    {
        Console.WriteLine(item.ToString());
    }
}


Eruption firstEruptionInChile = eruptions.Where(e => e.Location == "Chile").OrderBy(e => e.Year).FirstOrDefault();
Console.WriteLine(firstEruptionInChile);

Eruption firstEruptionInHawaii = eruptions.Where(e => e.Location == "Hawaiian Is").OrderBy(e => e.Year).FirstOrDefault();
Console.WriteLine(firstEruptionInHawaii != null ? firstEruptionInHawaii : "No Hawaiian Is Eruption found.");

Eruption firstEruptionInGreenland = eruptions.Where(e => e.Location == "Greenland").OrderBy(e => e.Year).FirstOrDefault();
Console.WriteLine(firstEruptionInGreenland != null ? firstEruptionInGreenland : "No Greenland Eruption found.");

Eruption firstEruptionInNewZealand = eruptions.Where(e => e.Location == "New Zealand" && e.Year > 1900).First();
Console.WriteLine(firstEruptionInNewZealand);

IEnumerable<Eruption> above2000Meters = eruptions.Where(e => e.ElevationInMeters > 2000);
PrintEach(above2000Meters, "Eruptions above 2000 meters.");

IEnumerable<Eruption> startsWithL = eruptions.Where(e => e.Volcano.StartsWith("L"));
PrintEach(startsWithL, $"Volcanos that start with L ({startsWithL.Count()})");

int maxElevation = eruptions.Max(e => e.ElevationInMeters);
Console.WriteLine($"Max Elevation: {maxElevation}");

Eruption highestVolcano = eruptions.Where(e => e.ElevationInMeters == maxElevation).First();
Console.WriteLine($"Highest Volcano: {highestVolcano}");

IEnumerable<Eruption> sortedByVolcano = eruptions.OrderBy(e => e.Volcano);
PrintEach(sortedByVolcano, "Sorted by Volcano");

int sumOfElevations = eruptions.Sum(e => e.ElevationInMeters);
Console.WriteLine($"Sum of Elevations: {sumOfElevations}");

bool hasEruptedIn2000 = eruptions.Any(e => e.Year == 2000);
Console.WriteLine($"There {(!hasEruptedIn2000 ? "was not" : "was")} an eruption in 2000.");

IEnumerable<Eruption> threeStratovolcanoes = eruptions.Where(e => e.Type == "Stratovolcano").Take(3);
PrintEach(threeStratovolcanoes, "Three Stratovolcanoes");

IEnumerable<Eruption> eruptionsBefore1000 = eruptions.Where(e => e.Year < 1000).OrderBy(e => e.Volcano);
PrintEach(eruptionsBefore1000, "Eruptions before 1000");

eruptions
    .Where(e => e.Year < 1000)
    .OrderBy(e => e.Volcano)
    .Select(e => e.Volcano)
    .ToList()
    .ForEach(e => Console.WriteLine(e));

