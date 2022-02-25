const fireworksContainer=document.querySelector(".fireworks-container"),fireworksConfig={hue:{min:0,max:345},delay:{min:15,max:15},rocketsPoint:{min:50,max:50},opacity:.5,speed:10,acceleration:1.02,friction:.97,gravity:1.5,particles:90,trace:3,explosion:6,lineStyle:"round",lineWidth:{explosion:{min:1,max:4},trace:{min:.1,max:1}},autoresize:!0,brightness:{min:50,max:80,decay:{min:.015,max:.03}},boundaries:{x:50,y:50,width:fireworksContainer.clientWidth,height:fireworksContainer.clientHeight,visible:!1},sound:{enabled:!1,files:[document.location.origin+document.location.pathname+"sounds/explosion0.mp3",document.location.origin+document.location.pathname+"sounds/explosion1.mp3",document.location.origin+document.location.pathname+"sounds/explosion2.mp3"],volume:{min:2,max:4}},mouse:{click:!0,move:!1,max:1}},backgroundConfig={backgroundColor:"#000000",backgroundImage:"",backgroundSize:"cover",backgroundPosition:"50% 50%",backgroundRepeat:"no-repeat",container:!1,fps:!1};document.addEventListener("keydown",(e=>{"F11"===e.code&&(e.preventDefault(),fireworksContainer.requestFullscreen?fireworksContainer.requestFullscreen():fireworksContainer.webkitRequestFullscreen&&fireworksContainer.webkitRequestFullscreen())}));const fireworks=new Fireworks(fireworksContainer,fireworksConfig);fireworks.start();let update,stats,count_fireworks=document.querySelector(".count-fireworks"),count_particles=document.querySelector(".count-particles");stats=new Stats,stats.setMode(0),stats.domElement.style.position="fixed",stats.domElement.style.left="5px",stats.domElement.style.top="5px",stats.domElement.id="stats",document.body.appendChild(stats.domElement),update=function(){stats.begin(),stats.end(),count_fireworks.textContent=fireworks._traces.length,count_particles.textContent=fireworks._explosions.length,requestAnimationFrame(update)},requestAnimationFrame(update);const fpsMonitor=document.querySelector("#stats"),fireworksCounters=document.querySelector(".fireworks-counters"),container=document.querySelector(".container"),gui=new dat.GUI({closed:!0,autoPlace:!0,width:window.outerWidth>360?320:260}),folders={fireworks:gui.addFolder("fireworks"),boundaries:gui.addFolder("boundaries"),sound:gui.addFolder("sound"),mouse:gui.addFolder("mouse"),background:gui.addFolder("background")};folders.fireworks.addFolder("hue"),folders.fireworks.__folders.hue.add(fireworksConfig.hue,"min",0,360).step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.__folders.hue.add(fireworksConfig.hue,"max",0,360).step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.addFolder("delay"),folders.fireworks.__folders.delay.add(fireworksConfig.delay,"min",1,100).step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.__folders.delay.add(fireworksConfig.delay,"max",1,100).step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.addFolder("brightness"),folders.fireworks.__folders.brightness.add(fireworksConfig.brightness,"min",1,100).step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.__folders.brightness.add(fireworksConfig.brightness,"max",1,100).step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.__folders.brightness.addFolder("decay"),folders.fireworks.__folders.brightness.__folders.decay.add(fireworksConfig.brightness.decay,"min",.001,.05).step(.001).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.__folders.brightness.__folders.decay.add(fireworksConfig.brightness.decay,"max",.001,.05).step(.001).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.addFolder("rocketsPoint"),folders.fireworks.__folders.rocketsPoint.add(fireworksConfig.rocketsPoint,"min",0,100).step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.addFolder("lineWidth"),folders.fireworks.__folders.lineWidth.addFolder("explosion"),folders.fireworks.__folders.lineWidth.__folders.explosion.add(fireworksConfig.lineWidth.explosion,"min",1,10).step(.1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.__folders.lineWidth.__folders.explosion.add(fireworksConfig.lineWidth.explosion,"max",1,10).step(.1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.__folders.lineWidth.addFolder("trace"),folders.fireworks.__folders.lineWidth.__folders.trace.add(fireworksConfig.lineWidth.trace,"min",0,10).step(.1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.__folders.lineWidth.__folders.trace.add(fireworksConfig.lineWidth.trace,"max",0,10).step(.1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.__folders.rocketsPoint.add(fireworksConfig.rocketsPoint,"max",0,100).step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.add(fireworksConfig,"opacity",.1,1).step(.1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.add(fireworksConfig,"speed",1,100).step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.add(fireworksConfig,"acceleration",1,2).step(.01).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.add(fireworksConfig,"friction",.5,3).step(.01).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.add(fireworksConfig,"gravity",.1,10).step(.1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.add(fireworksConfig,"particles",1,1e3).step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.add(fireworksConfig,"trace",1,10).step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.add(fireworksConfig,"explosion",1,10).step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.add(fireworks,"flickering",0,100).step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.fireworks.add(fireworks,"lineStyle",["round","square"]).onChange((e=>{fireworksConfig.lineStyle=e,fireworks.setOptions(fireworksConfig)})),folders.fireworks.add(fireworks,"_running",!0).name("enabled").onChange((()=>{fireworks.render()})),window.export=()=>{const e=new Blob([JSON.stringify(fireworksConfig,void 0,4)],{type:"text/plain"}),o=document.createElement("a");Object.assign(o,{href:URL.createObjectURL(e),download:"fireworks-config.json"}),o.click(),o.remove()},folders.fireworks.add(window,"export").name("export config (json)"),folders.boundaries.add(fireworksConfig.boundaries,"visible").onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.boundaries.add(fireworksConfig.boundaries,"x").step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.boundaries.add(fireworksConfig.boundaries,"y").step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.boundaries.add(fireworksConfig.boundaries,"width").step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.boundaries.add(fireworksConfig.boundaries,"height").step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.sound.addFolder("volume"),folders.sound.__folders.volume.add(fireworksConfig.sound.volume,"min",1,100).step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.sound.__folders.volume.add(fireworksConfig.sound.volume,"max",1,100).step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.sound.add(fireworksConfig.sound,"enabled",!1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.mouse.addFolder("click"),folders.mouse.__folders.click.add(fireworksConfig.mouse,"click",!0).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.mouse.__folders.click.add(fireworksConfig.mouse,"max",1,10).step(1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.mouse.add(fireworksConfig.mouse,"move",!1).onChange((()=>{fireworks.setOptions(fireworksConfig)})),folders.background.addColor(backgroundConfig,"backgroundColor").name("background-color").onChange((e=>{fireworksContainer.style.backgroundColor=e})),folders.background.add(backgroundConfig,"backgroundImage").name("background-image").onChange((e=>{fireworksContainer.style.backgroundImage=`url(${e})`})),folders.background.add(backgroundConfig,"backgroundSize").name("background-size").onChange((e=>{fireworksContainer.style.backgroundSize=e})),folders.background.add(backgroundConfig,"backgroundPosition").name("background-position").onChange((e=>{fireworksContainer.style.backgroundPosition=e})),folders.background.add(backgroundConfig,"backgroundRepeat").name("background-repeat").onChange((e=>{fireworksContainer.style.backgroundRepeat=e})),folders.background.add(backgroundConfig,"fps").name("hide fps").onChange((e=>{e?(fpsMonitor.style.display="none",fireworksCounters.style.display="none"):(fpsMonitor.style.display="block",fireworksCounters.style.display="block")})),folders.background.add(backgroundConfig,"container").name("hide card").onChange((e=>{container.style.display=e?"none":"block"}));