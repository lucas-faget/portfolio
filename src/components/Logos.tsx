import LogoLoop from "./LogoLoop";
import {
    SiAdonisjs,
    SiAstro,
    SiDocker,
    SiLaravel,
    SiPhp,
    SiReact,
    SiSvelte,
    SiTailwindcss,
    SiTypescript,
    SiVuedotjs,
} from "react-icons/si";

const techLogos = [
    { node: <SiAdonisjs />, title: "Adonis", href: "https://adonisjs.com" },
    { node: <SiAstro />, title: "Astro", href: "https://astro.build" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
    { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiSvelte />, title: "Svelte", href: "https://svelte.dev" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiVuedotjs />, title: "Vue.js", href: "https://vuejs.org" },
];

export function Logos() {
    return (
        <div className="relative overflow-hidden">
            <LogoLoop
                logos={techLogos}
                speed={100}
                direction="left"
                logoHeight={60}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                ariaLabel="Technology logos"
            />
        </div>
    );
}
