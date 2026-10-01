import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const required = ["nombre", "empresa", "rubro", "telefono", "email"];
  const missing = required.filter((field) => !data[field]);

  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Faltan campos: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  console.log("[lead] Nueva solicitud mayorista", data);

  return NextResponse.json({ ok: true });
}
