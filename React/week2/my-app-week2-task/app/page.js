"use client"
import React from "react";
import styles from "./page.module.css"
import { Button } from "@/components/button/button"
import { Card } from "@/components/card/Card";
import { Layout } from "@/components/layout/Layout";
import { ToggleContent } from "@/components/toggleContent/ToggleContent";
import { Counter } from "@/components/counter/Counter";
import { Form } from "@/components/form/Form";
import { Parent } from "@/components/parent/Parent";



export default function home() {


const handleClick = () => {
    alert('you clicked me!');
  };

  return (
    <div>
      <Button appearance="primary" text="click here" action={() => console.log("click")} />
      <Card title="This  is a card component" imageUrl="https://en.wikipedia.org/wiki/Cat#/media/File:Cat_August_2010-4.jpg"
      description="card component" />
      <Layout />
        <ToggleContent />
        <Counter />
        <Form  />
        <Parent />
    </div>
  );
};


