def search_error_commit(arr: list[bool]) -> int:
    return arr.index(False)


if __name__ == "__main__":
    array = [True, True, True, True, False, False, False]
    result = search_error_commit(array)
    print(result)
