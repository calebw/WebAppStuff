using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisitorPattern
{
    public interface VisitableByTransport
    {
        void accept(TransportVisitor visitor);
    }
}
