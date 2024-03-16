import { NextResponse } from "next/server";

export function GET(req: Request) {
    return NextResponse.json({
        'products': [
            {
                'name': 'Zen',
                'description': 'A modern hosting panel.',
                'in_development': false,
                'planned': true,
                'style_class': 'ci',
                'product_url': 'https://github.com/avnce/'
            },
            {
                'name': 'TLEEM Courses',
                'description': 'The powerful course platform to be utilized at TLEEM.',
                'style_class': 'li',
                'in_development': true,
                'product_url': 'https://courses.tleem.org/',
            },
            {
                'name': 'Coming Soon',
                'description': 'This is a placeholder for a product that is coming soon.',
                'style_class': 'pl in',
                'product_url': '#'
            }
        ]
    })
}