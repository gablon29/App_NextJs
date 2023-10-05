import { NextResponse } from "next/server";

export const GET = async ({ params }) => {
  const id = params.id;
  const response = await fetch(`${process.env.API_URL}/${id}`, {
    headers: {
      //especificamos que esperamos una respuesta en formato JSON
      //tambien indicamos que el cuerpo de la solicitud esta en formato JSON
      "Content-Type": "application/json",
    },
  });
  const product = await response.json();
  return NextResponse.json({ data: product });
};

export const DELETE = async ({ params }) => {
  const id = params.id;
  const response = await fetch(`${process.env.API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const product = await response.json();
  return NextResponse.json({ data: `Product ${id} remove` });
};
