export async function GET() {
    console.log("Мой API_KEY:", process.env.API_KEY);
  return new Response(JSON.stringify({ message: "Привет с серверлесс-функции!" }), {
    headers: { "Content-Type": "application/json" },
  });
}
