def kids_with_candies(candies, extra_candies):
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]

# Melhor caso: Complexidade de tempo = O(n) Complexidade de espaço = 0(n)
# Pior caso: Complexidade de tempo = O(n) Complexidade de espaço = 0(n)
# Caso médio: Complexidade de tempo = O(n) Complexidade de espaço = 0(n)


print(kids_with_candies([2, 3, 5, 1, 3], 3))
