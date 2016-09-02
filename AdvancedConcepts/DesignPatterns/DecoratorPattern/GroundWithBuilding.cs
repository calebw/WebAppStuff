using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DecoratorPattern
{
    //Concrete Decorator
    public class GroundWithBuilding : DecoratedBuilding
    {
        public GroundWithBuilding(Building bRef) : base(bRef) { }

        public override void Build(int height)
        {
            base.Build(height);
            BuildGround();
        }

        //Added functionality
        private void BuildGround() {
            for (int i = 0; i< 5; i++) {
                Console.WriteLine("0o0o0o0o0o0o0o0o0o");
            }
        }

    }
}
