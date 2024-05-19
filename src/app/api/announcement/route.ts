import { NextResponse } from "next/server";

export function GET(req: Request) {
    return NextResponse.json({
        head: 'avnce is now Loom!',
        description: 'We have rebranded to Loom! Loom is a new community that builds upon the development side of avnce, with a new focus on both research and development.',
        category: 'important',
    })
}