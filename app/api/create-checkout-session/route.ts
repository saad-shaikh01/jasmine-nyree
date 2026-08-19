import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder", {
  apiVersion: "2025-02-24.acacia" as any,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, frequency, email, name, metadata } = body;

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: "Invalid donation amount" }, { status: 400 });
    }

    const amountInCents = Math.round(amount * 100);
    const origin = request.headers.get("origin") || "http://localhost:3000";
    const isMonthly = frequency === "monthly";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Jasmine Nyree Campus ${isMonthly ? "Monthly" : "One-Time"} Donation`,
              description: "Generous contribution supporting individuals with special needs and community development.",
            },
            unit_amount: amountInCents,
            ...(isMonthly ? { recurring: { interval: "month" } } : {}),
          },
          quantity: 1,
        },
      ],
      mode: isMonthly ? "subscription" : "payment",
      customer_email: email || undefined,
      success_url: `${origin}/donate?success=true&session_id={CHECKOUT_SESSION_ID}&amount=${amount}`,
      cancel_url: `${origin}/donate?canceled=true`,
      metadata: {
        donor_name: name || "Anonymous",
        donor_email: email || "N/A",
        ...metadata,
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
