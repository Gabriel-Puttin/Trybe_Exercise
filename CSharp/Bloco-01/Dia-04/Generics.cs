using System;

namespace Generics
{
    public class GenericList<T>
    {
        private class Node
        {
            public T Value;
            public Node? Next;

            public Node(T t)
            {
                Value = t;
                Next = null;
            }
        }

        public Node Head;

        public GenericList()
        {
            Head = null;
        }

        public void Add(T input)
        {
            if (Head == null)
            {
                Head = new Node(input);
                Console.WriteLine("Nó Head criado!");
            }
            else
            {
                //Encontra onde inserir o próximo nó na lista.
                Node lastNode = Head;
                while (lastNode.Next != null) lastNode = lastNode.Next;

                lastNode.Next = new Node(input);
            }
        }
    }
}
