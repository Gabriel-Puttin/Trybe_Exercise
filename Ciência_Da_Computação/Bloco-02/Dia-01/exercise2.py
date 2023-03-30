from collections import Counter


class Estatistica:
    def __init__(self, list_numbers: list[int]) -> None:
        self.__list = list_numbers

    def media(self):
        result = sum(self.__list) / len(self.__list)
        return result

    def mediana(self):
        self.__list.sort()
        index = len(self.__list) // 2
        if len(self.__list) % 2 == 0:
            return (self.__list[index - 1] + self.__list[index]) / 2

        return self.__list[index]

    def moda(self):
        number, _ = Counter(self.__list).most_common()[0]
        return number


lista = [1, 6, 7, 4, 5, 10, 20, 34, 20, 15]

medias = Estatistica(lista)
print(medias.media())
print(medias.mediana())
print(medias.moda())
