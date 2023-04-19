def contains_duplicate(numbers: list[int]) -> bool:
    numbers.sort()
    previous_number = 'not a number'
    for number in numbers:
        if (previous_number == number):
            return True
        previous_number = number

    return False


# Complexidade de tempo = O(n log n)
# Complexidade de espaço = O(1)

numbers = [1, 2, 3, 4, 4]
print(contains_duplicate(numbers))
