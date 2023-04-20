def count_par_numbers(n: int) -> int:
    result = 0
    for number in range(1, (n + 1)):
        if number % 2 == 0:
            result += 1
    return result


if __name__ == "__main__":
    print(count_par_numbers(4))
