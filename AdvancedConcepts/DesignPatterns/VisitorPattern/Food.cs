using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisitorPattern
{
    public class Food : VisitableByTransport
    {
        public string type { get; private set; }
        public double milesNeeded { get; private set; }

        public Food(string type, double miles) {
            this.type = type;
            this.milesNeeded = miles;
        }

        public void accept(TransportVisitor visitor)
        {
            visitor.visit(this);
        }
    }
}
