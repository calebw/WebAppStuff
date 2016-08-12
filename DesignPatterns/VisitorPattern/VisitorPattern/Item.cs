using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisitorPattern
{
    public class Item : VisitableByTransport
    {
        public string title { get; private set; }
        public double milesNeeded { get; private set; }

        public Item(string title, double miles) {
            this.title = title;
            this.milesNeeded = miles;
        }

        public void accept(TransportVisitor visitor)
        {
            visitor.visit(this);
        }
    }
}
