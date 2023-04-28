from random import shuffle
from insertion_sort import insertion_sort
from selection_sorted import selection_sort
from Cronometro import Cronometro


def benchmarking_sorted_algorithms(value: list[int], algorithm):
    with Cronometro(f" tmepo da função {algorithm.__name__}"):
        algorithm(value)


if __name__ == "__main__":
    ordered = list(range(100))
    reverse_ordered = list(reversed(range(100)))
    randoms = ordered[:]
    benchmarking_sorted_algorithms(ordered, insertion_sort)
    benchmarking_sorted_algorithms(reverse_ordered, insertion_sort)
    benchmarking_sorted_algorithms(randoms, insertion_sort)
    benchmarking_sorted_algorithms(shuffle(randoms), insertion_sort)

    benchmarking_sorted_algorithms(ordered, selection_sort)
    benchmarking_sorted_algorithms(reverse_ordered, selection_sort)
    benchmarking_sorted_algorithms(randoms, selection_sort)
    benchmarking_sorted_algorithms(shuffle(randoms), selection_sort)
