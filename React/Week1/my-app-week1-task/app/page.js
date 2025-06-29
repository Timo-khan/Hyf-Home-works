"use client"


import { GreetingComponent } from "@/components/Greeting-component/GreetingComponent";
import { CardComponent } from "@/components/Card-component/CardComponent";
import { CardsComponent } from "@/components/Cards-component/CardsComponent";
import { Person } from "@/components/Person-component/PersonComponent";
import { Button } from "@/components/Button-component/Button";
import { DangerButton } from "@/components/DangerButton-component/DangerButton";
import { TextInput } from "@/components/TextInput-component/TextInput";
import { ProfileImage } from "@/components/ProfileImage-Component/ProfileImage";
import { Header } from "@/components/Header/header"; 
import { Footer } from "@/components/Footer/Footer";


export default function Home() {
  return (
    <div>
      <GreetingComponent/>
      <CardComponent/>
      <CardsComponent/>
      <Person/>
      <Button appearance="btn-primary" text="Click me" action={() => console.log("click")} />
      <DangerButton appearance="btn-secondary" text="Don't click me" action={() => console.log("click")} />
      <TextInput appearance="not yet" placeholder="Type something here" action={()=> console.log("submit")}/>
      <ProfileImage/>
      <Header/>
      <Footer/>
    </div>
  );
  
}
