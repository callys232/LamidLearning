import { NextResponse } from "next/server";
import { mockUsers } from "@/mock/users";
import { parseBody, requireFields } from "@/lib/api-helpers";

export async function POST(req: Request) {
  const body = await parseBody(req);
  const err  = requireFields(body, ["userId"]);
  if (err) return err;

  const user = mockUsers.find((u) => u.id === String(body!.userId));
  if (!user) return NextResponse.json({ error: "User not found." }, { status: 404 });

  user.verificationStatus = "rejected";
  user.lastActiveAt = new Date().toISOString();
  return NextResponse.json({ success: true, user });
}
