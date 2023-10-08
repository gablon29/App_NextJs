import { NextResponse } from "next/server";
const url = process.env.API_URL;
export const GET = async ({ params }) => {
  const id = params.id;
  const reques = await fetch(`${url}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const product = reques.json();
  return NextResponse.json({ data: product });
};
