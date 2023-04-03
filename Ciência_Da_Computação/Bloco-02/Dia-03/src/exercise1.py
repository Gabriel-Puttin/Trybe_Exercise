from abc import ABC, abstractmethod

ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"


class Log:
    def dispara_log(self, message):
        return message


class LogDecorator(ABC):
    def __init__(self, log) -> None:
        self.log = log

    @abstractmethod
    def dispara_log(self):
        raise NotImplementedError


class LogSuccess(LogDecorator):
    def dispara_log(self, message):
        return f"{VERDE}{self.log.dispara_log(message)}{RESET}"


class LogWarning(LogDecorator):
    def dispara_log(self, message):
        return f"{LARANJA}{self.log.dispara_log(message)}{RESET}"


class LogError(LogDecorator):
    def dispara_log(self, message):
        return f"{VERMELHO}{self.log.dispara_log(message)}{RESET}"


if __name__ == "__main__":
    logger = Log()
    print(LogSuccess(logger).dispara_log("O sistema esta funcionando"))
    print(LogWarning(logger).dispara_log("O sistema esta lento"))
    print(LogError(logger).dispara_log("O sistema esta com erros"))
