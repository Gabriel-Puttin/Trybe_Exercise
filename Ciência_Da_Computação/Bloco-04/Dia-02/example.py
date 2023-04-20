def countdown(n):
    if n == 0:
        print("FIM!")
    else:
        print(n)
        countdown(n - 1)


def factorial(n):
    if n <= 1:
        return 1
    else:
        return n * factorial(n - 1)


def sum_previous(n):
    if n == 1:
        return 1
    else:
        return (n + sum_previous(n - 1))


print(sum_previous(4))


def fibonacci(num):
    if (num <= 1):
        return num
    else:
        return fibonacci(num - 2) + fibonacci(num - 1)


print(fibonacci(8))
