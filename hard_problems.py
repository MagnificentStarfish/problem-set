def total_song_knowers(num_villagers, attendees_lists):
    print(num_villagers)
    print(attendees_lists)
    count = 0
    knows_song = []
    for i in range(num_villagers + 1):
        knows_song.append(False)
    for villagers in attendees_lists:
        if len(villagers) == 1 and villagers[0] == 0:
            continue
        if 0 in villagers:
            print(villagers)
            for villager in villagers:
                knows_song[villager] = True
        if 0 not in villagers:
            for villager in villagers:
                knows_song[villager] = True
    for villagers in attendees_lists:
        all_know_songs = True
        for villager in villagers:
            if not knows_song[villager]:
                all_know_songs = False
                break
        if all_know_songs:
            count += 1
    print(count)
    return count



def calculate_num_letters(num_pushes):
    print(num_pushes)
    num_x = 0
    num_o = 0
    letters = ["X"]

    if num_pushes == 1:
        num_x = 1
        num_o = 0
        return num_x, num_o
    else:
        for _ in range(2, num_pushes):
            new_letters = []
            for char in letters:
                if char == "X":
                    new_letters.append("O")
                elif char == "O":
                    new_letters.append("O")
                    new_letters.append("X")
            letters = new_letters

    for letter in letters:
        num_x += letter.count("X")
        num_o += letter.count("O")


    return num_x, num_o

result = calculate_num_letters(2)
print(result)
