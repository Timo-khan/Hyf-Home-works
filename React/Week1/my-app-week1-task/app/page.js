"use client"


import { GreetingComponent } from "@/components/Greeting-component/GreetingComponent";
import { CardComponent } from "@/components/Card-component/CardComponent";

export default function Home() {
  return (
    <div>
      <GreetingComponent/>
      <CardComponent/>
    </div>
  );
  
}
