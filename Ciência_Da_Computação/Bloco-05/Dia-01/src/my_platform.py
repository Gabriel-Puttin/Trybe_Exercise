import platform


def my_platform():
    my_platform = platform.platform()
    version = platform.release()
    architecture = platform.architecture()[0]
    print(
        f"Plataforma: {my_platform}\n"
        f"Versão: {version}\n"
        f"Arquitetura: {architecture}\n")


if __name__ == "__main__":
    my_platform()
