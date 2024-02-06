import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import Notification from "@/components/Notification";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main> 
      <Slider />
      <Notification />
      <Featured />
      <Notification />
      <Menu />
    </main>
    
  );
}
