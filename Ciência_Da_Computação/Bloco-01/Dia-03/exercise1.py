def list_of_numbers(limit):
    result = []
    for number in range(1, limit + 1):
        if number % 3 == 0 and number % 5 == 0:
            result.append('FizzBuzz')
        elif number % 3 == 0:
            result.append('Fizz')
        elif number % 5 == 0:
            result.append('Buzz')
        else:
            result.append(number)
    return result

print(list_of_numbers(15))