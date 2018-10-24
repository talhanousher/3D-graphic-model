var scene = new THREE.Scene();
// console.log(scene);
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);
var renderer = new THREE.WebGLRenderer();
console.log(renderer);
console.log(window)
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var sphere = new THREE.Mesh(
    new THREE.SphereGeometry(10, 20, 20),
    new THREE.MeshBasicMaterial({ color: '#ffffff', wireframe: true, wireframeLinewidth: 3})
);
// mesh.geometry.scale(- 1, 1, 1);
scene.add(sphere);
var torusGeometry = new THREE.TorusKnotBufferGeometry(10, 2, 0, 0, 2);
console.log(torusGeometry);
torus = new THREE.Mesh(torusGeometry, new THREE.MeshBasicMaterial({ color: '#ffffff', wireframe: true, wireframeLinewidth: 3 }));
torus.position.set(50, 0, 0);
scene.add(torus);


var boxGeometry = new THREE.BoxBufferGeometry(15, 15, 15);
var cubeMaterials = [
    new THREE.MeshBasicMaterial({ color: '#ff0000', transparent: true, opacity: 0.8 }),
    new THREE.MeshBasicMaterial({ color: '#00ff00', transparent: true, opacity: 0.8 }),
    new THREE.MeshBasicMaterial({ color: '#0000ff', transparent: true, opacity: 0.8 }),
    new THREE.MeshBasicMaterial({ color: '#ffff00', transparent: true, opacity: 0.8 }),
    new THREE.MeshBasicMaterial({ color: '#ff00ff', transparent: true, opacity: 0.8 }),
    new THREE.MeshBasicMaterial({ color: '#00ffff', transparent: true, opacity: 0.8 }),
];
var box = new THREE.Mesh(boxGeometry, new THREE.MeshFaceMaterial(cubeMaterials));
box.position.set(-50, 0, 0)
scene.add(box);

animate = function () {

    requestAnimationFrame(animate);
    box.rotation.y = Date.now() * 0.0002;
    box.rotation.z = Date.now() * 0.0002;
    sphere.rotation.y = Date.now() * 0.0002;
    sphere.rotation.z = Date.now() * 0.0002;
    // line.rotation.x = Date.now() * 0.002;
    torus.rotation.y = Date.now() * 0.0002;
    torus.rotation.z = Date.now() * 0.0002;
    renderer.render(scene, camera);

}
animate();

renderer.render(scene, camera);