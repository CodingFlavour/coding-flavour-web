import Logo from "@/presentation/components/Logo/Logo";

export default function Home() {
  return (
    <section>
      <h1>Bienvenidos todos</h1>
      <h2>
        Vamos a empezar a trabajar en componentes y aqui tenemos el muestrario
      </h2>
      <p>El logo no se ve bien asi que lo envuelvo en oscuro jejej</p>
      <div
        style={{
          backgroundColor: "black",
          padding: 16,
        }}
      >
        <Logo />
        {/* <Navbar /> */}
      </div>
    </section>
  );
}
