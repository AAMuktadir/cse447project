import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import User from "@/lib/models/User";

export async function GET(request) {
  try {
    await connect();
    const userID = await getDataFromToken(request);
    const user = await User.findById({ _id: userID }).select("-password");
    return NextResponse.json(
      { message: "User found", data: user },
      {
        status: 200,
        success: true,
      }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
