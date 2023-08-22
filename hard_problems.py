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


def best_student_and_score(answer_key):
    students = {
        "Caris": ["A", "A", "C", "C", "B", "B"],
        "Baz": ["B", "A", "B", "C"],
        "Azami": ["A", "B", "C"]
    }

    scores = {student: 0 for student in students}
    intervals = [6, 4, 3]

    for interval, student in zip(intervals, students.keys()):
        student_answers = students[student]
        answer_key_at_interval = [answer_key[x:x+interval] for x in range(0, len(answer_key), interval)]

        for x in answer_key_at_interval:
            for i in range(min(interval, len(x))):
                if x[i] == student_answers[i]:
                    scores[student] += 1

    highest_score = max(scores.values())
    top_students = [student for student, score in scores.items() if score == highest_score]

    return highest_score, top_students[0] if len(top_students) == 1 else top_students


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


def num_laundry_days(num_shirts, num_days, event_days):
    clean_shirt = num_shirts
    laundry = 0

    for day in range(1, num_days + 1):
        if clean_shirt == 0:
            laundry += 1
            clean_shirt = num_shirts

        if day in event_days:
            num_shirts += 1
            clean_shirt += 1

        if clean_shirt > 0:
            clean_shirt -= 1

    return laundry


def breakout_room(code, message):
    counter1 = 0
    counter2 = 0
    counter3 = 0
    counter4 = 0
    final = 0
    for char in message:
        if char == code[0]:
            counter1 +=1
            continue
        if char == code[1]:
            counter2 += 1
            continue
        if char == code[2]:
            counter3 += 1
            continue
        if char == code[3]:
            counter4 += 1
            continue
    while counter1 > 0:
        if (counter1 > 0) and (counter1 == counter2 == counter3 == counter4):
            final +=1
            counter1 -= 1
            counter2 -= 1
            counter3 -= 1
            counter4 -= 1
        else:
            break
    return final



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
        for _ in range(2, num_pushes+1):
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


def outcome(starting_player, matches):
    players = [False] * 26
    starting_player_index = ord(starting_player) - ord('A')
    players[starting_player_index] = True

    for match in matches:
        winner, loser = match[0], match[1]
        if starting_player == loser:
            players[ord(starting_player) - ord('A')] = False
            players[ord(winner) - ord('A')] = True
            starting_player = winner

    for index, gold in enumerate(players):
        if gold:
            result = chr(index + ord('A'))
            return result



def calculate_plays(num_quarters):
    machine_one = 0
    machine_two = 0
    machine_three = 0
    total_plays = 0

    while num_quarters > 0:
        machine_one += 1
        total_plays += 1
        num_quarters -= 1
        if machine_one == 27:
            num_quarters += 20
            machine_one = 0

        if num_quarters > 0:
            machine_two += 1
            total_plays += 1
            num_quarters -= 1
            if machine_two == 100:
                num_quarters += 50
                machine_two = 0

        if num_quarters > 0:
            machine_three += 1
            total_plays += 1
            num_quarters -= 1
            if machine_three == 8:
                num_quarters += 7
                machine_three = 0


    return total_plays
