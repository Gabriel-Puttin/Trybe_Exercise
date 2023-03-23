import pytest
from exercise2 import make_phone_number

expression = "MY-MISERABLE-JOB"
expression_error = "oaksoaksoa oaskoaskoaksoa oaskoaskoaskoask aoskaoskaokoaskao oaskoaskaoks"

def test_is_make_phone_number_return_corret():
    'para uma string entre 30 caracteres'
    assert make_phone_number(expression) == '69-647372253-562'

def test_is_make_phone_number_return_corret():
    'para uma string com mais de 30 caracteres'
    with pytest.raises(ValueError, match="Expression with invalid length"):
        make_phone_number(expression_error)

def test_is_make_phone_number_return_corret():
    'para uma string com caracteres especiais'
    with pytest.raises(ValueError, match="Invalid character"):
        make_phone_number('*&¨%¨$&&')