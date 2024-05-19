import { NextResponse } from "next/server";

export function GET(req: Request) {
    return NextResponse.json({
        head: 'avnce is now Loom!',
        description: 'We have rebranded to Loom! Loom is a new community that builds ontop of the foundation that avnce set. We are excited to see where this new journey takes us!',
        category: 'important',
    })
}