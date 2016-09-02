using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisitorPattern
{
    class Program
    {
        static void Main(string[] args)
        {
            //Unrealistic example but it displayed the Visitor pattern nonetheless
            //Different Transporters transport various unrelated things in some specific way
            //Shopping cart is another example. Cashier is a Visitor and handles the various items.

            //Have some collection of stuff that can be Visited and therefor accept Visitors
            List<VisitableByTransport> stuff = new List<VisitableByTransport>();
            stuff.Add(new Item("Box", 18.3));
            stuff.Add(new Person("Caleb", 12));
            stuff.Add(new Food("Pizza", 8.7));
            stuff.Add(new Item("TV", 4));
            stuff.Add(new Person("Sally", 24.2));

            //Different Visitors for regions
            TransporterNC tranSC = new TransporterNC();
            TransporterSC tranNC = new TransporterSC();

            foreach (VisitableByTransport thing in stuff) {
                //Item accepts Visitor and Visitor Vistits item
                thing.accept(tranNC);
            }
            tranNC.PrintTotalCost();
            Console.WriteLine("----------------------");
            foreach (VisitableByTransport thing in stuff)
            {
                thing.accept(tranSC);
            }
            tranSC.PrintTotalCost();
            Console.WriteLine("----------------------");
            Console.Read();
        }
    }
}
