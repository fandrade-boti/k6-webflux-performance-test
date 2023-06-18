/opt/k6-v0.44.1-macos-amd64/k6 run --iterations 100 /Users/colaborador/Documents/personal-git-repos/k6-webflux-performance-test/src/Test1.js 


/opt/k6-v0.44.1-macos-amd64/k6 run --vus 50 --duration 1m /Users/colaborador/Documents/personal-git-repos/k6-webflux-performance-test/src/Test1.js 


/opt/k6-v0.44.1-macos-amd64/k6 run --config /Users/colaborador/Documents/personal-git-repos/k6-webflux-performance-test/src/k6config.json /Users/colaborador/Documents/personal-git-repos/k6-webflux-performance-test/src/Test1.js 

-Dreactor.netty.ioWorkerCount=2 -Dreactor.netty.pool.maxConnections=300

  netty:
    worker:
      threads: 1
    max-connections: 300

Resultado com webflux
     data_received..................: 200 kB 3.3 kB/s
     data_sent......................: 449 kB 7.3 kB/s
     http_req_blocked...............: avg=293.99µs min=1µs   med=6µs   max=8.61ms p(90)=11µs   p(95)=4.65ms
     http_req_connecting............: avg=247.86µs min=0s    med=0s    max=6.15ms p(90)=0s     p(95)=2.27ms
     http_req_duration..............: avg=3.1s     min=1.29s med=3.12s max=4.34s  p(90)=3.4s   p(95)=3.52s 
       { expected_response:true }...: avg=3.1s     min=1.29s med=3.12s max=4.34s  p(90)=3.4s   p(95)=3.52s 
     http_req_failed................: 0.00%  ✓ 0        ✗ 1564
     http_req_receiving.............: avg=131.12µs min=12µs  med=113µs max=3.51ms p(90)=191µs  p(95)=235µs 
     http_req_sending...............: avg=55.4µs   min=4µs   med=34µs  max=4.1ms  p(90)=57.7µs p(95)=76µs  
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s    max=0s     p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=3.1s     min=1.29s med=3.12s max=4.34s  p(90)=3.4s   p(95)=3.52s 
     http_reqs......................: 1564   25.53876/s
     iteration_duration.............: avg=3.1s     min=1.29s med=3.12s max=4.34s  p(90)=3.4s   p(95)=3.52s 
     iterations.....................: 1564   25.53876/s
     vus............................: 23     min=23     max=80
     vus_max........................: 80     min=80     max=80