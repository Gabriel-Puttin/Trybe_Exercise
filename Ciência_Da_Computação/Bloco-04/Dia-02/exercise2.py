def count_par_numbers(n: int) -> int:
    if n <= 0:
        return 0
    elif n % 2 == 0:
        return 1 + count_par_numbers(n - 1)
    else:
        return count_par_numbers(n - 1)


print(count_par_numbers(6))
