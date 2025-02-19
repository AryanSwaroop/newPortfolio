export default function Footer() {
  const today = new Date().getFullYear();

  return (
    <footer className="antialiased md:w-full max-w-xl mt-auto mb-4 mx-4 md:mx-auto tracking-tight border-t border-zinc-800">
      <p className="text-sm text-center text-neutral-400 pt-4">
        © {today} Aryan Swaroop
      </p>
    </footer>
  );
}
