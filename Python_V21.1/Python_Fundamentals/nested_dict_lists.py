x = [[5, 2, 3], [10, 8, 9]]
students = [
    {"first_name": "Michael", "last_name": "Jordan"},
    {"first_name": "John", "last_name": "Rosales"},
]
sports_directory = {
    "basketball": ["Kobe", "Jordan", "James", "Curry"],
    "soccer": ["Messi", "Ronaldo", "Rooney"],
}
z = [{"x": 10, "y": 20}]

# 1

x[1][0] = 15
students[0]["last_name"] = "Bryant"
sports_directory["soccer"][0] = "Andres"
z[0]["y"] = 30

print(x, students, sports_directory, z)


# 2
def iterateDictionary(some_list):
    for i in range(len(some_list)):
        record = ""
        items = some_list[i].items()
        items_length = len(items)
        item_idx = 0
        for key, value in items:
            record += (
                key + " - " + value + (", " if item_idx < items_length - 1 else "")
            )
            item_idx += 1
        print(record)


iterateDictionary(
    [
        {"first_name": "Michael", "last_name": "Jordan"},
        {"first_name": "John", "last_name": "Rosales"},
        {"first_name": "Mark", "last_name": "Guillen"},
        {"first_name": "KB", "last_name": "Tonel"},
    ]
)


# 3
def iterateDictionary2(key_name, some_list):
    for val in some_list:
        print(val[key_name])


iterateDictionary2(
    "first_name",
    [
        {"first_name": "Michael", "last_name": "Jordan"},
        {"first_name": "John", "last_name": "Rosales"},
        {"first_name": "Mark", "last_name": "Guillen"},
        {"first_name": "KB", "last_name": "Tonel"},
    ],
)


# 4
def printInfo(some_dict):
    for key, list_values in some_dict.items():
        print(f"{len(list_values)} {key.upper()}")
        for value in list_values:
            print(value)
        print()


dojo = {
    "locations": ["San Jose", "Seattle", "Dallas", "Chicago", "Tulsa", "DC", "Burbank"],
    "instructors": [
        "Michael",
        "Amy",
        "Eduardo",
        "Josh",
        "Graham",
        "Patrick",
        "Minh",
        "Devon",
    ],
}
printInfo(dojo)
