import { NextResponse } from "next/server";

export function GET(req: Request) {
    return NextResponse.json({
        'products': [
            {
                'name': 'Corporate IPAW',
                'description': 'Product 1 description'
            },
            {
                'name': 'Product 2',
                'description': 'Product 2 description'
            },
            {
                'name': 'Product 3',
                'description': 'Product 3 description'
            }
        ]
    })
}