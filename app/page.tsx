import { useTheme } from "@/context/ThemeProvider";

export default function Home() {
  const { mode } = useTheme();

  return (
    <main className="mt-1 ">
      <div>this is nextjs home</div>
    </main>
  );
}
