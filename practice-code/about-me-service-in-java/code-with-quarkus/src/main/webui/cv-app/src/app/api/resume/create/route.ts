import { NextRequest, NextResponse } from "next/server";
import { FormDataProps } from "@/app/resume/create/Form";
import { Kafka, Producer } from "kafkajs";

export const kafka = new Kafka({
  clientId: 'cv-app',
  brokers: ['localhost:9092'],
});

async function createResume(data: FormDataProps) {
  const producer: Producer = kafka.producer();
  try {
    await producer.connect();
    await producer.send({
      topic: 'resumeTopic',
      messages: [{ value: `${data?.firstName}` }, { value: `${data?.lastName}` }]
    });
    await producer.disconnect();
    return true;
  } catch (error: any) {
    console.error(error?.message || error);
    await producer.disconnect();
  }
  return false;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!body) {
    console.error("Cannot submit empty values");
    return NextResponse.json(
      {
        error: "Cannot submit empty values",
      },
      {
        status: 400,
      }
    )
  }
  const data: FormDataProps = {
    firstName: body.firstName,
    lastName: body.lastName,
  };
  if (await createResume(data)) {
    return NextResponse.json(
      null,
      {
        status: 201,
        statusText: "Created",
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      },
    )
  }
  else {
    return NextResponse.json(
      {
        status: 500,
        statusText: "Server Error",
      },
    )
  }
}

export function OPTIONS(){
  return NextResponse.json(
    null,
    {
      status: 200,
      statusText: "Options",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    }
  )
}
