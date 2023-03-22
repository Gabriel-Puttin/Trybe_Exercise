# # escrita
# file = open("arquivo.txt", mode="w")
# file.write("Trybe S2")
# file.close()

# # leitura
# file = open("arquivo.txt", mode="r")
# content = file.read()
# print(content)
# file.close()  # não podemos esquecer de fechar o arquivo

# escrita
file = open("arquivo.txt", mode="w")
LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
file.writelines(LINES)
file.close()

# leitura
file = open("arquivo.txt", mode="r")
for line in file:
    print(line)  # não esqueça que a quebra de linha também é um caractere da linha
file.close()  # não podemos esquecer de fechar o arquivo

# Criamos um contexto, limitando o escopo onde o arquivo está aberto.
# O uso do "as" aqui é somente para atribuir o valor utilizado no contexto à variável file
with open("arquivo.txt", "w") as file:
    file.write("Michelle 27\n")
# como estamos fora do contexto, o arquivo foi fechado
print(file.closed)