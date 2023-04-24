def insertion_sort(numbers):
    n = len(numbers)  # Quantidade de elementos na lista

    for index in range(1, n):  # Começaremos a ordenar pelo segundo elemento
        # Pegamos o segundo elemento e o definimos como chave
        key = numbers[index]
        # Tomamos a posição anterior para iniciar a comparação
        new_position = index - 1
        # Enquanto a chave for menor, remaneja o elemento para frente
        while new_position >= 0 and numbers[new_position] > key:
            # Remaneja o elemento
            numbers[new_position + 1] = numbers[new_position]
            new_position = new_position - 1
        # Insere a chave na posição correta
        numbers[new_position + 1] = key

    return numbers


if __name__ == "__main__":
    numbers = [7, 5, 9, 2, 6, 8]
    print(insertion_sort(numbers))
