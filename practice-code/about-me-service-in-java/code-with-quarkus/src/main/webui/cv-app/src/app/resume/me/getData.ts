import "server-only";
import { kafka } from '@/app/api/resume/create/route';
import { Consumer } from 'kafkajs';

export async function getResumeData() {
  let resumeData: string[] = [];


  const consumer: Consumer = kafka.consumer(
    {
      groupId: "resumeConsumers"
    }
  );
  await consumer.connect();
  await consumer.subscribe({ topic: "resumeTopic", fromBeginning: true});
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      await resumeData.push(message?.value!.toString());
      await console.log(`MESSAGE: ${message?.value?.toString()}`);
    },
  });
  console.table(resumeData)
  return resumeData;
}
