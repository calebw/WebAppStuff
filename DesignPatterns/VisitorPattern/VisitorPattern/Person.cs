using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisitorPattern
{
    public class Person : VisitableByTransport
    {
        public string name { get; private set; }
        public double milesNeeded { get; private set; } //Would make more since if was location. Just an example

        public Person(string name, double miles) {
            this.name = name;
            this.milesNeeded = miles;
        }

        public void accept(TransportVisitor visitor)
        {
            visitor.visit(this); //Whichever visitor selected will handle this item
        }
    }
}
