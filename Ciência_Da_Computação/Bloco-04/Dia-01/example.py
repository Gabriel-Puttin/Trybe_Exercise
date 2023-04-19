def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


meu_array = [1, 2, 3]

multiply_arrays(meu_array, meu_array)


def sum_arrays(array1, array2, array3):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            for number3 in array3:
                print(f'Array 3: {number3}')
                result.append(number1 + number2 + number3)
                number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


sum_arrays(meu_array, meu_array, meu_array)


def binary_search(numbers, target):
    start = 0
    end = len(numbers) - 1

    while start <= end:
        mid = (start + end) // 2

        if numbers[mid] == target:
            return mid

        if target < numbers[mid]:
            end = mid - 1
        else:
            start = mid + 1

    return -1


numbers = [2, 3, 4, 10, 40]
target = 40

result = binary_search(numbers, target)
print(f"Elemento encontrado na posição: {result}")
