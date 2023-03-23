from exercise1 import list_of_numbers

list_three = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']

def test_is_list_of_numbers_return_corret():
    'Para um numéro divisível por 3'
    assert list_of_numbers(15)[2] == list_three[2]

def test_is_list_of_numbers_return_corret():
    'Para um numéro divisível por 5'
    assert list_of_numbers(15)[4] == list_three[4]

def test_is_list_of_numbers_return_corret():
    'Para um numéro divisível por 3 e 3'
    assert list_of_numbers(15)[-1] == list_three[-1]

def test_is_list_of_numbers_return_corret():
    'Para todos os números'
    assert list_of_numbers(15) == list_three