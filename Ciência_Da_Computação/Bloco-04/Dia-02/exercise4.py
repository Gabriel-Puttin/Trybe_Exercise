def find_mdc(x, y):
    if y <= 1:
        return x
    elif x <= 1:
        return y
    elif x > y:
        return find_mdc(y, x % 2)
    else:
        return find_mdc(x, y % 2)


if __name__ == "__main__":
    print(find_mdc(3, 15))
