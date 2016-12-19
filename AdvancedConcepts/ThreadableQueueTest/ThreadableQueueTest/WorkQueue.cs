using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;

namespace ThreadableQueueTest
{
    public class WorkQueue
    {
        private BlockingCollection<string> _workQueue;
        private AlphaCounter alphaCnter;
        private string pattern;

        public WorkQueue()
        {
            _workQueue = new BlockingCollection<string>(new ConcurrentQueue<string>());
            alphaCnter = new AlphaCounter();
            pattern = @"\sLor|\sip|\sve|\sle|\ssag";
        }

        public AlphaCounter AlphCounter {
            get {
                return alphaCnter;
            }
        }

        public void AddTask(string workTask)
        {
            _workQueue.Add(workTask);
        }

        public void AllItemsAdded()
        {
            _workQueue.CompleteAdding();
            //Console.WriteLine("Count: "+_workQueue.Count);
        }

        public void MonitorWorkQueue()
        {
            while (true)
            {
                try
                {
                    //Console.WriteLine(string.Format("Thread {0} processing", Thread.CurrentThread.ManagedThreadId));
                    string wt = _workQueue.Take();
                    Regex reg = new Regex(pattern, RegexOptions.IgnoreCase);
                    Match m = reg.Match(wt);
                    while (m.Success) {
                        alphaCnter.AddMatch(m.Value);
                        m = m.NextMatch();
                    }
                    //Console.WriteLine("Count: "+_workQueue.Count);
                }
                catch (InvalidOperationException e)
                {
                    Console.WriteLine(string.Format("Work queue on thread {0} has been closed.", Thread.CurrentThread.ManagedThreadId));
                    break;
                }
            }
        }

        /*private void AddMatch(string match)
        {
            switch (match.ToLower())
            {
                case " lor":
                    alphaCnter.cnt_Lor += (int)strPoint.Lor;
                    break;
                case " ip":
                    alphaCnter.cnt_ip += (int)strPoint.ip;
                    break;
                case " ve":
                    alphaCnter.cnt_ve += (int)strPoint.ve;
                    break;
                case " le":
                    alphaCnter.cnt_le += (int)strPoint.le;
                    break;
                case " sag":
                    alphaCnter.cnt_sag += (int)strPoint.sag;
                    break;
                default:
                    alphaCnter.cnt_NONE += 1;
                    Console.WriteLine("NONE: "+match);
                    break;
            }
        }*/

    }
}
