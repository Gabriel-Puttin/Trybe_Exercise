class TV:
    def __init__(self, length) -> None:
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = length
        self.__ligada = False

    @property
    def volume(self) -> int:
        return self.__volume

    @volume.setter
    def volume(self, value: int):
        if (0 > value > 99):
            raise ValueError('O volume tem que estar entre 0 e 99')

        self.__volume = value

    @property
    def canal(self) -> int:
        return self.__canal

    @canal.setter
    def canal(self, value: int):
        if (1 > value > 99):
            raise ValueError('O volume tem que estar entre 1 e 99')

        self.__canal = value

    @property
    def tamanho(self) -> int:
        return self.__tamanho

    @tamanho.setter
    def tamanho(self, value: int):
        self.__tamanho = value

    @property
    def ligada(self) -> bool:
        return self.__ligada

    @ligada.setter
    def ligada(self, value: bool):
        self.__ligada = value

    def aumentar_volume(self):
        if (self.__volume < 99):
            self.__volume += 1

    def diminuir_volume(self):
        if (self.__volume > 0):
            self.__volume -= 1

    def modificar_canal(self, value):
        if (value < 1 or value > 99):
            raise ValueError('O canal deve estar entre 1 e 99')
        self.__canal = value

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
