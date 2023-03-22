# primeiro exercício
name = input('Digite seu nome:')

for letters in name:
    print(f"{letters} ")

# segundo exercício
nums = input("Insira valores aqui, separados por espaço: ")

numsArr = nums.split(" ")

sum = 0
for num in numsArr:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é: {sum}")

# terceiro exercício

file = open("students.txt", "r")
for line in file:
    if int(line.split(" ")[1]) < 6:
        print(f'os estudantes reprovados são {line.split(" ")[0]}')
file.close()