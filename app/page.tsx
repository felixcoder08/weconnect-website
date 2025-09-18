import Hero from "@/components/home/hero/hero";
import About from "@/components/home/about/about";
import Mission from "@/components/home/mission/mission";
import Adhesion from "@/components/home/adhesion/adhesion";
import Actions from "@/components/home/actions/actions";

export default function HomePage() {
    return (
        <div>
            <Hero />
            <About />
            <Mission />
            <Adhesion />
            <Actions />
        </div>
    );
}