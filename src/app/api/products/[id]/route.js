import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const id = params.id;
  const response = await fetch(`${process.env.API_URL}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const product = await response.json();
  return NextResponse.json({ data: product });
};

export const DELETE = async (req, { params }) => {
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
