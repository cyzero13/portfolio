import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useEffect } from "react";
import { Stars, Float, OrbitControls, useGLTF, Html, useAnimations } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Astronaut() {
  const group = useRef();
  const { scene, animations } = useGLTF("/src/assets/astronaut_fixed.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      firstAction.reset().fadeIn(0.5).play();
    }
  }, [actions]);

  return <primitive ref={group} object={scene} scale={1.5} position={[0, -4, 0]} />;
}

export default function App() {
  const astronautRef = useRef();

  useEffect(() => {
    const triggerAnimation = () => {
      if (!astronautRef.current) {
        requestAnimationFrame(triggerAnimation); // wait until ref is ready
        return;
      }

      // About Me section
      ScrollTrigger.create({
        trigger: "#about-me",
        start: "top center",
        onEnter: () => {
          console.log("Entered About Me");
          gsap.to(astronautRef.current.position, { x: -7, duration: 1.5, ease: "power2.inOut" });
          gsap.to(astronautRef.current.rotation, { y: 1.5, duration: 1.5, ease: "power2.inOut" });
        },
        onLeaveBack: () => {
          console.log("Leaving About Me");
          gsap.to(astronautRef.current.position, { x: 0, duration: 1.5, ease: "power2.inOut" });
          gsap.to(astronautRef.current.rotation, { y: 0, duration: 1.5, ease: "power2.inOut" });
        },
      });

      // Projects section
      ScrollTrigger.create({
        trigger: "#projects",
        start: "top center",
        onEnter: () => {
          console.log("Entered Projects");
          gsap.to(astronautRef.current.position, { x: 7, duration: 1.5, ease: "power2.inOut" });
          gsap.to(astronautRef.current.rotation, { y: -1, duration: 1.5, ease: "power2.inOut" });
        },
        onLeaveBack: () => {
          console.log("Leaving Projects");
          gsap.to(astronautRef.current.position, { x: -7, duration: 1.5, ease: "power2.inOut" });
          gsap.to(astronautRef.current.rotation, { y: 1.5, duration: 1.5, ease: "power2.inOut" });
        },
      });
    };

    triggerAnimation();
  }, []);

  return (
    <div className="relative w-screen overflow-x-hidden text-white flex flex-col gap-10"> {/* removed overflow-y-auto */}
      {/* Fixed Canvas */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />

          {/* Stars */}
          <Stars radius={200} depth={60} count={5000} factor={4} fade />

          {/* Animate the group, not individual model */}
          <Float speed={1.5} rotationIntensity={2}>
            <group ref={astronautRef}>
              <Suspense fallback={<Html center>🧑‍🚀 Loading...</Html>}>
                <Astronaut />
              </Suspense>
            </group>
          </Float>

          <OrbitControls enableZoom={false} enableRotate={false} />
        </Canvas>
      </div>

      {/* Sections */}
      <section className="min-h-screen flex flex-col items-center mt-8 relative">
        <h1 id="title" className="text-5xl font-bold text-indigo-400 mb-4">Deony Diras</h1>
        <div className="flex flex-col gap-4 items-center">
          <p className="text-lg text-gray-300">3D Full Stack Developer</p>
          <p className="text-gray-400 animate-bounce text-lg">Scroll down ⬇️</p>
        </div>

      </section>

      <section id="about-me" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-bold mb-8 text-indigo-400">About Me</h2>

        <p className="text-lg text-gray-300 max-w-2xl mb-4">
          Hi! I'm <strong>Deony Diras</strong>, a passionate 3D Full Stack Developer. I specialize in building dynamic web applications and interactive 3D experiences, combining both creativity and technical expertise.
        </p>
        <p className="text-lg text-gray-300 max-w-2xl mb-4">
          I have hands-on experience with <strong>Git, AWS, MySQL, Postgres, API development</strong>, and modern web stacks including <strong>React.js, Three.js, React Three Fiber (R3F), Vue.js, the TALL Stack (Tailwind, Alpine.js, Laravel, Livewire)</strong>. I prioritize <strong>clean coding practices</strong> to create scalable, maintainable, and high-quality applications.
        </p>
        <p className="text-lg text-gray-300 max-w-2xl mb-4">
          Beyond coding, I also have experience <strong>handling projects and leading teams</strong>, ensuring collaboration and delivering projects on time while maintaining technical excellence.
        </p>
        <p className="text-lg text-gray-300 max-w-2xl">
          Beyond coding, I’m passionate about exploring new 3D techniques, experimenting with animations, and crafting immersive digital experiences that delight users and elevate projects.
        </p>
      </section>

      <section id="projects" className="min-h-screen flex flex-col items-center justify-center text-center px-6 ">
        <h2 className="text-4xl font-bold mb-8 text-indigo-400">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Project 1 */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold mb-2">3D Interactive Portfolio</h3>
            <p className="text-gray-300 mb-2">
              Built using <strong>React Three Fiber (R3F), Three.js, and React.js</strong> to create a dynamic 3D experience. Features smooth animations, floating 3D models, and responsive design.
            </p>
            <p className="text-gray-400 text-sm">
              Highlights: Interactive 3D astronaut, Scroll-triggered animations, Floating effects, and immersive UI.
            </p>
          </div>

          {/* Project 2 */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold mb-2">Full Stack Business App ( In Progress )</h3>
            <p className="text-gray-300 mb-2">
              Developed with <strong>Laravel, Vue.js</strong>, and <strong>Postgres/MySQL</strong>. Includes dynamic dashboards, multi-tenant database support, and RESTful APIs.
            </p>
            <p className="text-gray-400 text-sm">
              Highlights: Clean code architecture, responsive design, multi-database handling, and secure user management.
            </p>
          </div>

          {/* Project 3 */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold mb-2">Home Planner ( Coming Soon)</h3>
            <p className="text-gray-300 mb-2">
              A web-based application for planning and visualizing home layouts. Built with <strong>React.js, R3F, Three.js</strong> for interactive 3D room layouts and <strong>MySQL/Postgres</strong> for data management.
            </p>
            <p className="text-gray-400 text-sm">
              Highlights: Interactive furniture placement, 3D room visualization, responsive design, and smooth user interactions.
            </p>
          </div>
        </div>
      </section>


      <section id="contact-me" className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-12 ">
        <h2 className="text-4xl font-bold mb-8 text-indigo-400">Contact Me</h2>

        <p className="text-lg text-gray-300 mb-4">
          I'm always open to new projects, collaborations, or a chat about web development and 3D experiences.
        </p>

        <p className="text-lg text-gray-300">
          Email: <a className="text-indigo-400 hover:underline">deony.diras1998@gmail.com</a>
        </p>
        <p className="text-lg text-gray-300">
          Phone: <a className="text-indigo-400 hover:underline">+63 951 300 3072</a>
        </p>
      </section>
    </div>
  );
}
