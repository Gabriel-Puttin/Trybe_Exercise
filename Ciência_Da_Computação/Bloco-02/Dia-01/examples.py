class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    def get_velocidade_maxima(self):
        return self.__velocidade_maxima

    def set_velocidade_maxima(self, velocidade):
        if (0 < velocidade <= 10):
            raise ValueError('A velocidade não pode ultrapassar 10')

        self.__velocidade_maxima = velocidade


class Liquidificador(Eletrodomestico):
    pass


meu_liquidificador = Liquidificador('Azul', 200, 127, 300)
meu_liquidificador.ligar(2)
print(meu_liquidificador.esta_ligado())
meu_liquidificador.desligar()
print(meu_liquidificador.esta_ligado())
meu_liquidificador.set_velocidade_maxima(11)
print(meu_liquidificador.get_velocidade_maxima())


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None
        self.ventilador = None

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def comprar_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self):
        return f"{self.nome} possui {self.saldo_na_conta} reais em sua conta."


pessoa_coziheira = Pessoa('Jacquin', 1000)
pessoa_coziheira.comprar_liquidificador(meu_liquidificador)
print(pessoa_coziheira)


class Ventilador(Eletrodomestico):
    def __init__(self, brand, cor, potencia, tensao, preco):
        super().__init__(cor, potencia, tensao, preco)
        self.brand = brand


ventilador = Ventilador('Arno', 'Preto', 120, 127, 300)
pessoa_coziheira.comprar_ventilador(ventilador)
print(pessoa_coziheira)


class Secador(Eletrodomestico):
    pass


class Batedeira(Eletrodomestico):
    pass


class MaquinaDeLavar(Eletrodomestico):
    pass
