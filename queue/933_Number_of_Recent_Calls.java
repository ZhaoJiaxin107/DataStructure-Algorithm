class RecentCounter {
    Queue<Integer> queue;
    public RecentCounter() {
        queue = new LinkedList();  
    }
    
    public int ping(int t) {
        //每次访问都添加到queue
        queue.add(t);
            
        while(!queue.isEmpty())
        // 如果超过规定范围就弹出
            if(t - queue.peek() > 3000)
                queue.poll();
             else
                break;
        return queue.size();//返回队列的大小
    }
}