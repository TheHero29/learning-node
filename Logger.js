const Logger = (req,res,next) => {
    const method = req.method;
    let ip = req.ip;
    if(!ip)
        ip = req.headers['x-forwarded-for']
    const hostname = req.hostname;
    const date = new Date().toISOString();
    // const date = req.date;
    console.log(`method:${method} | IP:${ip} | hostname:${hostname} | date:${date}`);
    next();
} 