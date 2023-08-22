# print("Hello World")


# list1 = [100, 200, 300, 400, 500]
# print(list1[::-1])


# numbers = [1, 2, 3, 4, 5, 6, 7]
# for num in numbers:
#     print(num**2)
# # print([x**2 for x in numbers])


# list1 = [10, 20, [300, 400, [5000, 6000], 500], 30, 40]
# list1[2][2].append(7000)
# print(list1)


# list1 = [10,20,30,40]
# list2 = [100,200,300,400]
# reversed_list2 = list2[::-1]
# list3 = list1 + reversed_list2
# print(list3)


# list1 = [10, 20, 30, 40]
# list2 = [100, 200, 300, 400]
# for item1, item2 in zip(list1, reversed(list2)):
#     print(item1, item2)


# list1 = ["Mike", "", "Emma", "Aisha", "", "Dalante"]
# list2 = []
# for name in list1:
#     if name != "":
#         list2.append(name)
# print(list2)


# list1 = ["a", "b", ["c", ["d", "e", ["f", "g"], "k"], "l"], "m", "n"]
# sub_list = ["h", "i", "j"]
# list1[2][1][2].extend(sub_list)
# print(list1)


# def is_palindrome(word):
#     if word == word[::-1]:
#         print("True")
#         return True
#     else:
#         print("False")
#         return False

# word = "racecar"
# is_palindrome(word)


# def can_skydive(age, has_consent_form):
#     if age >= 18 or has_consent_form:
#         return True
#     else:
#         return False

# age = 20
# has_consent_form = False

# print(can_skydive(age, has_consent_form))


# def can_make_pasta(ingredients):
#     if "flour" in ingredients and "eggs" in ingredients and "oil" in ingredients:
#         print("True")
#         return True
#     else:
#         print("False")
#         return False

# ingredients=["flour", "eggs", "oil"]
# can_make_pasta(ingredients)


# def is_inside_bounds(x, y):
#     if x <= 10 and y <= 10:
#         print("True")
#         return True
#     else:
#         print("False")
#         return False

# is_inside_bounds(10, 10)


# def is_inside_bounds(x, y, rect_x, rect_y, rect_width, rect_height):
#     if x >= rect_x and y >= rect_y and x <= (rect_x + rect_width) and y <= (rect_y + rect_height):
#         print("True")
#         return True
#     else:
#         print("False")
#         return False

# is_inside_bounds(20, 20, 20, 20, 20, 20)


# def has_quorum(attendees_list, members_list):
#     if len(attendees_list) >= (len(members_list)/2):
#         print("True")
#         return True
#     else:
#         print("False")
#         return False

# attendees_list = ["bob", "frank"]
# members_list = ["lloyd", "flappy", "egg", "senna", "apple", "banana"]

# has_quorum(attendees_list, members_list)


# def gear_for_day(is_workday, is_sunny):
#     gear_list = []
#     if is_workday:
#         gear_list.append("laptop")
#     if is_workday and not is_sunny:
#         gear_list.append("umbrella")
#     if not is_workday:
#         gear_list.append("surfboard")
#     print("gearlist is", gear_list)

# is_workday = False
# is_sunny = True

# gear_for_day(is_workday, is_sunny)


# def calculate_average(values):
#     total = 0
#     if len(values) == 0:
#         return None
#     for value in values:
#         total =+ value
#     average = total / len(values)
#     print("average", average)
#     return average

# values = [3, 4, 5]
# calculate_average(values)


# import statistics
# def calculate_average(values):
#     print(statistics.mean(values))

# values = [3, 4, 5]

# calculate_average(values)


# def calculate_sum(values):
#     sum = 0
#     if len(values) == 0:
#         print("None")
#         return None
#     for value in values:
#         sum += value
#     print(sum)
#     return sum

# values = [1,2,3]
# calculate_sum(values)


# import statistics

# def calculate_grade(values):
#     score = statistics.mean(values)
#     if score >= 90:
#         print("A")
#         return "A"
#     elif score >= 80:
#         print("B")
#         return "B"
#     elif score >= 70:
#         print("C")
#         return "C"
#     elif score >= 60:
#         print("D")
#         return "D"
#     else:
#         print("F")
#         return "F"

# values = [70, 10, 10]

# calculate_grade(values)


# def max_in_list(values):
#     print("max is", max(values))
#     return max(values)

# values = [1,2,3]
# max_in_list(values)


# def remove_duplicate_letters(s):
#     if len(s) == 0:
#         print("Empty String!")
#         return ""
#     new_string = ""
#     for char in s:
#         if char not in new_string:
#             new_string += char
#     print("new_string is", new_string)
#     return new_string

# s = "abcdab"
# remove_duplicate_letters(s)


# def find_second_largest(values):
#     if len(values) == 0:
#         print("Empty list!")
#         return None
#     if len(values) == 1:
#         print("Only 1 value")
#         return None
#     sorted_list = sorted(values)
#     print(sorted_list[-2])
#     return sorted_list[-2]

# values = [1, 5, 6, 2, 8, 10, 22, 3]
# find_second_largest(values)


# def sum_of_squares(values):
#     total = 0
#     if len(values) == 0:
#         print("Empty List")
#         return None
#     for num in values:
#         total += num*num
#     print("total is", total)
#     return total

# values = [1, 2, 3]
# sum_of_squares(values)


# def sum_of_first_n_numbers(limit):
#     total = 0
#     if limit < 0:
#         print("None")
#         return None
#     for i in range(limit+1):
#         total += i
#     print("total is", total)
#     return total

# sum_of_first_n_numbers(5)


# def sum_of_first_n_even_numbers(n):
#     if n < 0:
#         print("Less than zero")
#         return None
#     total = 0
#     new_n = 2 * n
#     for i in range(new_n+1):
#         if i % 2 == 0:
#             total += i
#     print("total is", total)
#     return total

# sum_of_first_n_even_numbers(-1)


# def count_letters_and_digits(s):
#     digits = []
#     letters = ""
#     for item in s:
#         if item.isdigit():
#             digits.append(item)
#         elif item.isalpha():
#             letters += item
#     print("digit list:", digits)
#     print("letters list:", letters)
#     print(len(digits))
#     print(len(letters))
#     return len(digits), len(letters)

# s = "14223asddfte"

# count_letters_and_digits(s)


# def count_letters_and_digits(s):
#     letters = ""
#     digits = []
#     for char in s:
#         if char.isdigit():
#             digits.append(char)
#         if char.isalpha():
#             letters += char
#     print("letter list length is", len(letters))
#     print("digit list length is", len(digits))
#     return len(letters), len(digits)

# s = "122144ghht"
# count_letters_and_digits(s)


# def pad_left(number, length, pad):
#     string_number = str(number)
#     while len(string_number) < length:
#         string_number = pad + string_number
#     print("String number:", string_number)
#     return string_number

# pad_left(10, 4, "*")


# def reverse_dictionary(dictionary):
#     new_dictionary = {}
#     for key, value in dictionary.items():
#         new_dictionary[value] = key
#     print("new_dictionary", new_dictionary)
#     return new_dictionary

# dictionary = {
#     "chevy": "car",
#     "banana": "fruit",
#     "squirrel": "animal"
# }

# reverse_dictionary(dictionary)


# def is_palindrome(word):
#     # word = input("palindrome checker: ")
#     letters = []
#     reversed_list = []
#     for char in word:
#         letters.insert(0, char)
#         reversed_list.append(char)
#     if reversed_list[0] is letters[0]:
#         print("True")
#     else:
#         print("False")

# word = "banana"
# is_palindrome(word)


# def add_csv_lines(csv_lines):
#     new_list = []
#     for line in csv_lines:
#         if len(line) == 0:
#             new_list.append(0)
#         else:
#             numbers = line.split(",")
#             print(numbers)
#             total = 0
#             for num_str in numbers:
#                 num = int(num_str)
#                 total += num
#             new_list.append(total)
#     print(new_list)
#     return new_list

# test = ["3", "1,9"]
# add_csv_lines(test)


# def pairwise_add(list1, list2):
#     zipped = zip(list1, list2)
#     result_list = []
#     # print(zipped)
#     for value1, value2 in zipped:
#         result_list.append(value1 + value2)
#     print(result_list)
#     return result_list

# list1 = [1,2,3,4]
# list2 = [4,5,6,7]
# pairwise_add(list1, list2)


# def find_indexes(search_list, search_term):
#     new_list = []
#     for char in search_list:
#         if search_term == char:
#             index = search_list.index(char)
#             new_list.append(index)
#     print(new_list)

# search_list = [1,2,3,4]
# search_term = 4
# find_indexes(search_list, search_term)


# def p(list1):
#     new_ = enumerate(list1)
#     print(new_)

# list1 = [1,2,3,4,5,6,7]
# p(list1)

print("hello world")
