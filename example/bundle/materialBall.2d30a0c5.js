var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},n=e.parcelRequire5b70;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return a[e]=r,n.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,a){t[e]=a},e.parcelRequire5b70=n);var r=n("ilwiq"),o=n("RPVlj"),i=n("7lx9d"),s=n("5Rd1x"),l=n("4CEV9"),d=n("cVdfP"),m=n("891vQ"),c=n("kp7Te"),u=n("jiuw3");let h,g,p,C,b,v,w,y,f,M,S;const T={material1:{color:"#ffc766",emissive:"#000000",emissiveIntensity:1,roughness:.1,metalness:.8,ior:1.495,transmission:0,opacity:1,matte:!1},material2:{color:"#db7157",emissive:"#000000",emissiveIntensity:1,roughness:.8,metalness:.1,transmission:0,ior:1.495,opacity:1,matte:!1},material3:{color:"#000000",roughness:.01,metalness:.05,matte:!1},multipleImportanceSampling:!0,stableNoise:!1,environmentIntensity:3,environmentRotation:0,environmentBlur:0,backgroundBlur:.05,bounces:5,samplesPerFrame:1,acesToneMapping:!0,resolutionScale:1/window.devicePixelRatio,transparentTraversals:20,filterGlossyFactor:.5,tiles:1,backgroundAlpha:1,checkerboardTransparency:!0};window.location.hash.includes("transmission")&&(T.material1.metalness=0,T.material1.roughness=.05,T.material1.transmission=1,T.material1.color="#ffffff",T.bounces=10);function x(){const e=window.innerWidth,a=window.innerHeight,t=T.resolutionScale,n=window.devicePixelRatio;C.setSize(e*t*n,a*t*n),C.reset(),h.setSize(e,a),h.setPixelRatio(window.devicePixelRatio*t),b.aspect=e/a,b.updateProjectionMatrix()}function F(){C.reset()}function R(){const e=f.generate(y,T.environmentBlur);C.material.envMapInfo.updateFrom(e),M.environment=e,C.reset()}function I(){requestAnimationFrame(I);const e=w[0];e.color.set(T.material1.color).convertSRGBToLinear(),e.emissive.set(T.material1.emissive).convertSRGBToLinear(),e.emissiveIntensity=T.material1.emissiveIntensity,e.metalness=T.material1.metalness,e.roughness=T.material1.roughness,e.transmission=T.material1.transmission,e.ior=T.material1.ior,e.opacity=T.material1.opacity;const a=w[1];a.color.set(T.material2.color).convertSRGBToLinear(),a.emissive.set(T.material2.emissive).convertSRGBToLinear(),a.emissiveIntensity=T.material2.emissiveIntensity,a.metalness=T.material2.metalness,a.roughness=T.material2.roughness,a.transmission=T.material2.transmission,a.ior=T.material2.ior,a.opacity=T.material2.opacity;const t=w[2];t.color.set(T.material3.color).convertSRGBToLinear(),t.metalness=T.material3.metalness,t.roughness=T.material3.roughness,C.material.materials.updateFrom(p.materials,p.textures),C.material.materials.setMatte(0,T.material1.matte),C.material.materials.setMatte(1,T.material2.matte),C.material.materials.setMatte(2,T.material3.matte),C.material.filterGlossyFactor=T.filterGlossyFactor,C.material.environmentIntensity=T.environmentIntensity,C.material.backgroundBlur=T.backgroundBlur,C.material.bounces=T.bounces,C.material.backgroundAlpha=T.backgroundAlpha,C.material.physicalCamera.updateFrom(b),b.updateMatrixWorld(),T.backgroundAlpha<1?M.background=null:M.background=M.environment;for(let e=0,a=T.samplesPerFrame;e<a;e++)C.update();C.samples<1&&h.render(M,b),h.autoClear=!1,v.material.map=C.target.texture,v.render(h),h.autoClear=!0,S.innerText=`Samples: ${Math.floor(C.samples)}`}window.innerWidth/window.innerHeight<.65&&(T.bounces=Math.max(T.bounces,6),T.resolutionScale*=.5,T.tiles=2,T.multipleImportanceSampling=!1,T.environmentBlur=.35),async function(){h=new r.WebGLRenderer({antialias:!0}),h.toneMapping=r.ACESFilmicToneMapping,h.setClearColor(0,0),document.body.appendChild(h.domElement),b=new l.PhysicalCamera(75,window.innerWidth/window.innerHeight,.025,500),b.position.set(-4,2,3),C=new l.PathTracingRenderer(h),C.alpha=!0,C.camera=b,C.material=new l.PhysicalPathTracingMaterial,C.material.setDefine("TRANSPARENT_TRAVERSALS",T.transparentTraversals),C.material.setDefine("FEATURE_MIS",Number(T.multipleImportanceSampling)),C.tiles.set(T.tiles,T.tiles),v=new o.FullScreenQuad(new r.MeshBasicMaterial({map:C.target.texture,blending:r.CustomBlending})),g=new s.OrbitControls(b,h.domElement),g.addEventListener("change",(()=>{C.reset()})),M=new r.Scene,S=document.getElementById("samples"),f=new l.BlurredEnvMapGenerator(h);const e=new Promise((e=>{(new m.RGBELoader).load("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/royal_esplanade_1k.hdr",(a=>{y=a,R(),e()}))})),a=new d.PathTracingSceneWorker,t=(new i.GLTFLoader).setMeshoptDecoder(c.MeshoptDecoder).loadAsync("https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/material-balls/material_ball_v2.glb").then((e=>{const t=new r.Group;e.scene.scale.setScalar(.01),e.scene.updateMatrixWorld(),t.add(e.scene);const n=new r.Box3;n.setFromObject(e.scene);const o=new r.Mesh(new r.CylinderBufferGeometry(3,3,.05,200),new r.MeshStandardMaterial({color:16777215,roughness:0,metalness:.25}));o.geometry=o.geometry.toNonIndexed(),o.geometry.clearGroups(),o.position.y=n.min.y-.03,t.add(o);const i=new r.MeshStandardMaterial,s=new r.MeshStandardMaterial;return e.scene.traverse((e=>{e.geometry&&e.geometry.computeVertexNormals(),"Sphere_1"===e.name?e.material=s:e.material=i,"subsphere_1"===e.name&&(e.material=s)})),w=[i,s,o.material],a.generate(t)})).then((e=>{p=e,M.add(e.scene);const{bvh:t,textures:n,materials:r}=e,o=t.geometry,i=C.material;i.bvh.updateFrom(t),i.normalAttribute.updateFrom(o.attributes.normal),i.tangentAttribute.updateFrom(o.attributes.tangent),i.uvAttribute.updateFrom(o.attributes.uv),i.materialIndexAttribute.updateFrom(o.attributes.materialIndex),i.textures.setTextures(h,2048,2048,n),i.materials.updateFrom(r,n),a.dispose()}));await Promise.all([t,e]),document.getElementById("loading").remove(),document.body.classList.add("checkerboard"),x(),window.addEventListener("resize",x);const n=new u.GUI,B=n.addFolder("Path Tracing");B.add(T,"acesToneMapping").onChange((e=>{h.toneMapping=e?r.ACESFilmicToneMapping:r.NoToneMapping,v.material.needsUpdate=!0})),B.add(T,"stableNoise").onChange((e=>{C.stableNoise=e})),B.add(T,"multipleImportanceSampling").onChange((e=>{C.material.setDefine("FEATURE_MIS",Number(e)),C.reset()})),B.add(T,"tiles",1,4,1).onChange((e=>{C.tiles.set(e,e)})),B.add(T,"samplesPerFrame",1,10,1),B.add(T,"filterGlossyFactor",0,1).onChange((()=>{C.reset()})),B.add(T,"bounces",1,30,1).onChange((()=>{C.reset()})),B.add(T,"transparentTraversals",0,40,1).onChange((e=>{C.material.setDefine("TRANSPARENT_TRAVERSALS",e),C.reset()})),B.add(T,"resolutionScale",.1,1).onChange((()=>{x()}));const A=n.addFolder("Environment");A.add(T,"environmentIntensity",0,10).onChange((()=>{C.reset()})),A.add(T,"environmentRotation",0,2*Math.PI).onChange((e=>{C.material.environmentRotation.setFromMatrix4((new r.Matrix4).makeRotationY(e)),C.reset()})),A.add(T,"environmentBlur",0,1).onChange((()=>{R()})),A.add(T,"backgroundBlur",0,1).onChange((()=>{C.reset()})),A.add(T,"backgroundAlpha",0,1).onChange((()=>{C.reset()})),A.add(T,"checkerboardTransparency").onChange((e=>{e?document.body.classList.add("checkerboard"):document.body.classList.remove("checkerboard")}));const k=n.addFolder("Camera");k.add(b,"focusDistance",1,100).onChange(F),k.add(b,"apertureBlades",0,10,1).onChange((function(e){b.apertureBlades=0===e?0:Math.max(e,3),this.updateDisplay(),F()})),k.add(b,"apertureRotation",0,12.5).onChange(F),k.add(b,"anamorphicRatio",.1,10).onChange(F),k.add(b,"bokehSize",0,50).onChange(F).listen(),k.add(b,"fStop",.3,20).onChange(F).listen(),k.add(b,"fov",25,100).onChange((()=>{b.updateProjectionMatrix(),F()})).listen();const E=n.addFolder("Shell Material");E.addColor(T.material1,"color").onChange(F),E.addColor(T.material1,"emissive").onChange(F),E.add(T.material1,"emissiveIntensity",0,50,.01).onChange(F),E.add(T.material1,"roughness",0,1).onChange(F),E.add(T.material1,"metalness",0,1).onChange(F),E.add(T.material1,"opacity",0,1).onChange(F),E.add(T.material1,"transmission",0,1).onChange(F),E.add(T.material1,"ior",.9,3).onChange(F),E.add(T.material1,"matte").onChange(F),E.close();const P=n.addFolder("Ball Material");P.addColor(T.material2,"color").onChange(F),P.addColor(T.material2,"emissive").onChange(F),P.add(T.material2,"emissiveIntensity",0,50,.01).onChange(F),P.add(T.material2,"roughness",0,1).onChange(F),P.add(T.material2,"metalness",0,1).onChange(F),P.add(T.material2,"opacity",0,1).onChange(F),P.add(T.material2,"transmission",0,1).onChange(F),P.add(T.material2,"ior",.9,3).onChange(F),P.add(T.material2,"matte").onChange(F),P.close();const G=n.addFolder("Floor Material");G.addColor(T.material3,"color").onChange(F),G.add(T.material3,"roughness",0,1).onChange(F),G.add(T.material3,"metalness",0,1).onChange(F),G.add(T.material3,"matte").onChange(F),G.close(),I()}();
//# sourceMappingURL=materialBall.2d30a0c5.js.map
