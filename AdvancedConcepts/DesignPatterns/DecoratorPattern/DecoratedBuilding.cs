using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DecoratorPattern
{
    //Parent of specific decorators
    public abstract class DecoratedBuilding : Building
    {
        private Building buildingRef = null;

        public DecoratedBuilding(Building bRef) {
            this.buildingRef = bRef;
        }

        public override void Build(int height)
        {
            buildingRef.Build(height);
        }
    }
}
