import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const id = req.params;
  const response = await fetch(`${process.env.API_URL}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const product = await response.json();
  return NextResponse.json({ data: product });
};
