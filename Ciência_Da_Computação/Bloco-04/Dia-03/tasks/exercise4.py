from random import shuffle
from exercise3 import benchmarking_sorted_algorithms
from bubble_sort import bubble_sort
from merge_sort import merge_sort


if __name__ == "__main__":
    ordered = list(range(100))
    reverse_ordered = list(reversed(range(100)))
    randoms = ordered[:]
    benchmarking_sorted_algorithms(ordered, bubble_sort)
    benchmarking_sorted_algorithms(reverse_ordered, bubble_sort)
    benchmarking_sorted_algorithms(randoms, bubble_sort)
    benchmarking_sorted_algorithms(shuffle(randoms), bubble_sort)

    benchmarking_sorted_algorithms(ordered, merge_sort)
    benchmarking_sorted_algorithms(reverse_ordered, merge_sort)
    benchmarking_sorted_algorithms(randoms, merge_sort)
    benchmarking_sorted_algorithms(shuffle(randoms), merge_sort)
