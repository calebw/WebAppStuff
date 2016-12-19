using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThreadableQueueTest
{
    public class WorkItemProducer
    {
        private WorkQueue _workQueue;
        private string filename;

        public WorkItemProducer(WorkQueue workQueue, string file)
        {
            _workQueue = workQueue;
            filename = file;
        }

        public void ProduceWorkItems()
        {
            int cnt = 0;
            foreach (string line in File.ReadLines(filename))
            {
                _workQueue.AddTask(line);
                cnt++;
            }
            Console.WriteLine("Counter: "+cnt);
        }

    }
}
