import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const payload = await getPayload({ config: configPromise });
    
    const message = await payload.create({
      collection: 'contact-messages',
      data: {
        name: data.name,
        email: data.email,
        company: data.company,
        serviceOfInterest: data.serviceOfInterest,
        message: data.message,
      },
    });

    return NextResponse.json({ success: true, message }, { status: 201 });
  } catch (error) {
    console.error("Error saving contact message:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
