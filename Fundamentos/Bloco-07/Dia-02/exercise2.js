const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
 
  const customerInfo = (order) => {
    const address = Object.entries(order)[2];
    const nome = Object.entries(order)[3];
    return console.log(`Olá ${Object.entries(nome[1])[2][1].deliveryPerson}, entrega para: ${Object.values(order)[0]}, Telefone: ${Object.values(order)[1]}, R. ${Object.values(address)[1].street}, N° ${Object.values(address)[1].number}, AP: ${Object.values(address)[1].apartment}.`);
  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const nome = Object.entries(order)[3];
    const exemplo = Object.entries(order)[3][1];
    const exemplo2 = Object.entries(order)[4][1];
    const fon = Object.entries(exemplo)[0][1];
    const fon2 = Object.entries(exemplo)[1][1];
    return console.log(`Olá ${Object.entries(nome[1])[2][1].deliveryPerson = 'Luiz Silva'}, o total do seu pedido de ${Object.keys(fon)[0]}, ${Object.keys(fon)[1]} e ${Object.entries(fon2)[0][1].type} é R$ ${Object.values(exemplo2)[0] = '50,00'}.`);
  
  }
  
  orderModifier(order);