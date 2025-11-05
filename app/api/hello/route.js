export async function GET(request) {
  const name = process.env.NAME || "Гость";

  return new Response(JSON.stringify({
    message: `Привет, ${name}! Это серверлесс-функция Next.js 🚀`,
  }), {
    headers: { "Content-Type": "application/json" },
  });
}
