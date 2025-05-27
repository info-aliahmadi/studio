
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, CreditCard, Receipt } from "lucide-react";
import Wave from "react-wavify";

const features = [
  {
    title: "Track Customer Balances",
    description: "Easily monitor outstanding debts and available credits for each of your customers.",
    icon: ListChecks,
  },
  {
    title: "Set & Manage Credit Limits",
    description: "Define and adjust credit limits for individual customers to effectively manage financial risk.",
    icon: CreditCard,
  },
  {
    title: "Record Payments & Adjustments",
    description: "Quickly log customer payments, apply credits, or make necessary adjustments to accounts.",
    icon: Receipt,
  },
];

export default function DebtCreditManagementSection() {
  return (
    <>
      <section id="customer-accounts" style={{ marginTop: '-6px' }} className="py-16 sm:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              style={{
                backgroundImage: "linear-gradient(to right, hsla(197, 93%, 29%, 1), hsla(167, 98%, 39%, 1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }} className="text-7xl sm:text-6xl p-4 font-bold tracking-tight text-primary hover:text-primary/90 transition-colors duration-300">
              Manage Customer Debt & Credit
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Empower your business with tools to handle customer accounts, track balances, and manage credit seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transform transition-all duration-300 ease-in-out">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
