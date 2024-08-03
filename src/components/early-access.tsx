import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

const EarlyAccess = () => {
  return (
    <Card className="flex flex-col items-center py-4 my-10">
      <CardHeader>
        <CardTitle>Get early access today</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center gap-8">
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <Input placeholder="email@example.com" className="w-full p-8 rounded-full bg-primary-foreground placeholder:opacity-50" />
        <Button
          variant={"gradient"}
          size={"lg"}
          className="font-semibold w-full py-8 text-lg"
        >
          Get Started For Free
        </Button>
      </CardContent>
    </Card>
  );
};

export default EarlyAccess;
