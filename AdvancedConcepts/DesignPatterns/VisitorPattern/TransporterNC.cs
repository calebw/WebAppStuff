using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisitorPattern
{
    public class TransporterNC : TransportVisitor
    {
        public double totalCost { get; private set; }

        public TransporterNC() {
            totalCost = 0;
        }

        public void visit(Item item)
        {
            Console.WriteLine("Transporting item: "+item.title+" for "+item.milesNeeded+" at $2 per mile");
            totalCost += item.milesNeeded * 2;
        }

        public void visit(Food food)
        {
            Console.WriteLine("Transporting food: " + food.type + " for " + food.milesNeeded + " at $1.25 per mile");
            totalCost += food.milesNeeded * 1.25;
        }

        public void visit(Person person)
        {
            Console.WriteLine("Transporting person: " + person.name + " for " + person.milesNeeded + " at $6 per mile");
            totalCost += person.milesNeeded * 6;
        }

        public void PrintTotalCost()
        {
            Console.WriteLine("Total NC Cost is: $" + totalCost);
        }
    }
}
