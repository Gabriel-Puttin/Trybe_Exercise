import random


def generate_random_list(n):
    result = []
    for _ in range(100):
        average = 0
        for _ in range(1, n):
            average += random.randrange(1, n)
            result.append(average / n)
    return result

# Complexidade de tempo = O(n)
# Complexidade de espaço = O(1)


print(generate_random_list(10))
