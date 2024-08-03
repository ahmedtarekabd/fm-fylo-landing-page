import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

const EarlyAccess = () => {
  return (
    <Card className="flex flex-col items-center py-4 my-10 lg:w-3/4 mx-auto relative top-52">
      <CardHeader>
        <CardTitle>Get early access today</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center gap-8">
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        {/* <div className="flex flex-col md:flex-row gap-8 justify-center"> */}
        <div className="grid md:grid-cols-6 gap-8 w-full">
          <Input
            placeholder="email@example.com"
            className="md:col-span-4 w-full p-8 rounded-full bg-primary-foreground placeholder:opacity-50"
          />
          <Button
            variant={"gradient"}
            size={"lg"}
            className="md:col-span-2 font-semibold w-full py-8 text-lg"
          >
            Get Started For Free
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EarlyAccess;
