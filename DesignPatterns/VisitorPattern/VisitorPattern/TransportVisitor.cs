using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisitorPattern
{
    public interface TransportVisitor
    {
        //Must have method for every visit option
        void visit(Person person);
        void visit(Food food);
        void visit(Item item);
    }
}
