import pytest
from exercise3 import validated_email

email = 'usuario@email.com'
invalid_email = 'usuario123'

def test_is_validated_email_returns_correct():
    'Para um email válido'
    assert validated_email(email) == email

def test_is_validated_email_returns_correct():
    'Para um email inválido'
    with pytest.raises(ValueError, match="Invalid email"):
        validated_email(invalid_email)